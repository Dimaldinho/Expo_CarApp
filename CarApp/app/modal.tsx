import { StatusBar } from 'expo-status-bar';
import { Platform, Pressable, StyleSheet, TextInput } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useState } from 'react';
import updateOwnerOfCar from '../scripts/updateOwnerOfCar'

export default function ModalScreen() {
  var [newOwnerLogin, setNewOwnerLogin] = useState('')

  const updateOwner = async () =>{
     await updateOwnerOfCar(newOwnerLogin);
     console.log("aaaaaaaaaaaaa")
  }



  
  return (
    <View >
      
      <Text>Send data about car to...</Text>
      <TextInput placeholder="User login"
      onChangeText={setNewOwnerLogin}
      />
      <Pressable onPress={updateOwner}><Text>Send</Text></Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },button: {
    position: 'absolute',
    bottom: 20,
    left: '50%',
    marginLeft: -75, // Adjust this value to half of the button's width
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center'},
});
