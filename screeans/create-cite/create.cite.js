import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableHighlight, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

// const API = process.env.REACT_APP_API;
// const API = req.get("http://127.0.0.1:5000/addcite");

function CreateCite({ navigation }) {
    const [name, setName] = useState("");
    const [lastname, setLastName] = useState("");
    const [document, setDocument] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");  
    const createCite = async () => {
        try{
          const response = await fetch('http://127.0.0.1:5000/addcite', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                lastname: lastname,
                document: document,
                birthdate: birthdate,
                city: city,
                phone: phone
            })
          });
          const json = await response.json();
          Alert.alert("Cite create succesfully");
          navigation.goBack(); 
        } catch (error){
            Alert.alert(error)
        }       
    }
    return (
      <View style={styles.container}>
          <TextInput style={styles.styleTextInput} onChangeText={text => setName(text)} placeholder="Name"></TextInput>
          <TextInput style={styles.styleTextInput} onChangeText={text => setLastName(text)} placeholder="LastName"></TextInput>
          <TextInput style={styles.styleTextInput} onChangeText={text => setDocument(text)} placeholder="Document"></TextInput>
          <TextInput style={styles.styleTextInput} onChangeText={text => setBirthdate(text)} placeholder="Birthdate"></TextInput>
          <TextInput style={styles.styleTextInput} onChangeText={text => setCity(text)} placeholder="City"></TextInput>
          <TextInput style={styles.styleTextInput} onChangeText={text => setPhone(text)} placeholder="Phone"></TextInput>
          <TouchableHighlight style={styles.styleCreateButton} onPress={createCite}>
            <Text style={styles.text}>Create Cites!</Text>
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

export default CreateCite;
