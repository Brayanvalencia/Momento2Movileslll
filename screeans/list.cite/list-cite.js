import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
// import CardComponent from '../list.cite/card-component';
import {useIsFocused} from '@react-navigation/native';

function ListCite({ navigation }) {
    const isFocused = useIsFocused();
    const [cites, setCites] = useState([]);
    const listCites = async () => {
        let response = await fetch('');
        let json = await response.json();
        setCites();
  }
  const datailCite = (item) =>{
      navigation.navigate('Datail', {cite: item});
  }
  useEffect(()=>{
      // console.log("isFocused: " + isFocused);
      listCites();
  },[isFocused]);
  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.styleCreateButton} onPress={() => navigation.navigate('Create')}>
        <Text style={styles.text}>Create Cites!</Text>
      </TouchableHighlight>
      <FlatList>
          data={cites}
          renderItem={({item}) => <TouchableHighlight onPress={() => datailCite(item)} style={styles.listButton}>
                {/* <CardComponent cite={item}></CardComponent> */}
            </TouchableHighlight>}
            keyExtractor={item => item.id}
      </FlatList>
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
  styleCreateButton: {
      backgroundColor: 'purple',
      padding: 15,
      alignItems: 'center',
      borderRadius: 5,
      width: Dimensions.get('screen').width * 0.9,
      marginTop: 10,
      borderRadius: 5

  },
  text: {
    color: 'white'
  },
  listButton: {
    marginTop: 10,
    padding: 15,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
    width: Dimensions.get('screen').width * 0.9

  }
});

export default ListCite;
