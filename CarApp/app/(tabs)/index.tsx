import { StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, View } from '@/components/Themed';
import getCarData from '../../scripts/getUsersCarData'
import { useState } from 'react';

export default function TabOneScreen() {
  var [carText, setCarText] = useState('!info')
  var [carModelText, setModelText] = useState('!info')
  var [carYearText, setYearText] = useState('!info')

    const a = async ()=>{
      
      const userLogin = await AsyncStorage.getItem('userLogin');
      
      const jsonData = await getCarData(userLogin)
      
      if(jsonData != null){
        var ab= JSON.parse(jsonData.car_info)
        //console.log(jsonData.car_info)
        

        setCarText(ab.car);
        setModelText(ab.model);
        setYearText(ab.year);
      }
    }
    a()    

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text>{carText}</Text>
      <Text>{carModelText}</Text>
      <Text>{carYearText}</Text>
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
  },
});
