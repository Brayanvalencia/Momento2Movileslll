import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListCite from './screeans/list.cite/list-cite';
import CreateCite from './screeans/create-cite/create.cite';
import DatailCite from './screeans/datail-cite/datail.cite';
import UpdateCite from './screeans/update-cite/update-cite';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ListCite} />
        <Stack.Screen name="Create" component={CreateCite} />
        <Stack.Screen name="Datail" component={DatailCite} />
        <Stack.Screen name="Datail" component={DatailCite} />
        <Stack.Screen name="Update" component={UpdateCite} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;