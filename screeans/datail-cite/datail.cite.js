import React from 'react;'
import { Dimensions, StyleSheet, Text, View, Alert} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

function DatailCite({route, navigation}){
    const {name,document, lastname, city, phone, birthdate, id} = route.params.cite;
    const deleteCite = async () =>{
        try{
            const response = await fetch('http://127.0.0.1:5000/deletecite', {
              method: 'DELETE',
              headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  id: id
              })
            });
            const json = await response.json();
            Alert.alert("Cite delete succesfully");
            navigation.goBack(); 
          } catch (error){
              Alert.alert(error)
          }   
    }
    const updateCite = () =>{
        navigation.navigate('Update', {cite: route.params.cite})
    }
    return(
        <View style={styles.container}>
            <View style={styles.datailCard}>
                <Text>Name: {name} {lastname}</Text>
                <Text>Document: {document}</Text>
                <Text>City: {city}</Text>
                <Text>Birthdate: {birthdate}</Text>
                <Text>Phone: {phone}</Text>
                <View style={styles.buttonView}>
                    <TouchableHighlight onPress={updateCite} style={styles.editButton}>
                        <Text style={styles.textButtonCrud}>Edit</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={deleteCite} style={styles.deleteButton}>
                        <Text style={styles.textButtonCrud}>Delete</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection: 'column',
      alignItems: 'center'
    },
    datailCard: {
        padding: 5,
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 10,
      width: Dimensions.get('screen').width * 0.9,
        
    },
    styleCreateButton: {
      backgroundColor: 'purple',
      padding: 15,
      alignItems: 'center',
      marginTop: 10,
      borderRadius: 6,
      width: Dimensions.get('screen').width * 0.9,
      
  },
  text: {
      color: 'white'
    },
    buttonView:{
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    editButton:{
      backgroundColor: 'purple',
      padding: 15,
      marginBottom: 10,
      alignItems: 'center',
      marginTop: 10,
      borderRadius: 5,
      width: Dimensions.get('screen').width * 0.4,
    },
    deleteButton:{
        backgroundColor: 'purple',
        padding: 15,
        marginBottom: 10,
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 5,
        width: Dimensions.get('screen').width * 0.4,
      },
      textButtonCrud:{
          color: 'white'
      }
  });

  export default DatailCite;