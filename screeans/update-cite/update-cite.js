import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableHighlight, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { set } from 'react-native-reanimated';

// const API = process.env.REACT_APP_API;
// const API = req.get("http://127.0.0.1:5000/addcite");

function UpdateCite({ route, navigation }) {
    const [name, setName] = useState("");
    const [lastname, setLastName] = useState("");
    const [document, setDocument] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");  
    const updateCite = async () => {
        try{
          const response = await fetch('http://127.0.0.1:5000/updatecite', {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: route.params.cite.id,
                name: name,
                lastname: lastname,
                document: document,
                birthdate: birthdate,
                city: city,
                phone: phone
            })
          });
          const json = await response.json();
          Alert.alert("Cite update succesfully");
          navigation.navigate('Home'); 
        } catch (error){
            Alert.alert(error)
        }       
    }
    useEffect(()=>{
        // console.log("isFocused: " + isFocused);
        setName(route.params.cite.name);
        setLastName(route.params.cite.name);
        setDocument(route.params.cite.document);
        setBirthdate(route.params.cite.birthdate);
        setCity(route.params.cite.city);
        setPhone(route.params.cite.phone);
    },[]);
    return (
      <View style={styles.container}>
          <TextInput style={styles.styleTextInput} value={name} onChangeText={text => setName(text)} placeholder="Name"></TextInput>
          <TextInput style={styles.styleTextInput} value={lastname} onChangeText={text => setLastName(text)} placeholder="LastName"></TextInput>
          <TextInput style={styles.styleTextInput} value={document} onChangeText={text => setDocument(text)} placeholder="Document"></TextInput>
          <TextInput style={styles.styleTextInput} value={birthdate} onChangeText={text => setBirthdate(text)} placeholder="Birthdate"></TextInput>
          <TextInput style={styles.styleTextInput} value={city} onChangeText={text => setCity(text)} placeholder="City"></TextInput>
          <TextInput style={styles.styleTextInput} value={phone} onChangeText={text => setPhone(text)} placeholder="Phone"></TextInput>
          <TouchableHighlight style={styles.styleCreateButton} onPress={updateCite}>
            <Text style={styles.text}>Update Cites</Text>
          </TouchableHighlight>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center'
  },
  styleTextInput: {
      padding: 10,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      width: Dimensions.get('screen').width * 0.9,
      marginTop: 10
      
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
  }
});

export default UpdateCite;
