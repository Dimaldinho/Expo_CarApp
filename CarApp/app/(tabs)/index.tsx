import { Pressable, StyleSheet, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, View } from '@/components/Themed';
import { useEffect, useState } from 'react';
import setCarData from '../../scripts/setNewCarInfo'

export default function TabOneScreen() {
  
  var [carText, setCarText] = useState('!info')
  var [carModelText, setModelText] = useState('!info')
  var [carYearText, setYearText] = useState('!info')
  var [userLogin, setUserLogin] = useState('')

  var [condition, carInfoInDB] = useState(true)
  useEffect(() => {
    const showCarInfo_Input = async ()=>{
     
      var carInfoFromDB = await AsyncStorage.getItem('carInfo');
      var user = await AsyncStorage.getItem('userLogin')
      if (user != null){
        setUserLogin(user)
      }
      
      console.log("carInfoFromDB: " + carInfoFromDB)

      if(carInfoFromDB != null){
        var dsa = JSON.parse(carInfoFromDB)
      
        setCarText(dsa.car);
        setModelText(dsa.model);
        setYearText(dsa.year);
      }else{
        carInfoInDB(false)
      }
      
    }
    showCarInfo_Input()
  }, []);

    const newCarDataToDB = async () => {
      const carData = {
        car: carText,
        year: carYearText,
        model: carModelText,
        
      };
  
      console.log("JSON.stringify(carData): " + JSON.stringify(carData));
      var data = JSON.stringify(carData)
      console.log(typeof(data))
      setCarData(userLogin,data)
    };


     
  return (
    <div>
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      </View>
      {condition ? 
      (
      <View  style={styles.container}>
      <Text>{carText}</Text>
      <Text>{carModelText}</Text>
      <Text>{carYearText}</Text>
      </View>
      ):
      ( <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Car Brand"
            onChangeText={setCarText}
          />
          <TextInput
            style={styles.input}
            placeholder="Car Model"
            onChangeText={setModelText}
          />
          <TextInput
            style={styles.input}
            placeholder="Car Year"
            onChangeText={setYearText}
          />
          <Pressable onPress={newCarDataToDB} style={styles.button}>
            <Text>Save</Text>
          </Pressable>


        </View>
      )}
    
    </div>
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
  },input: {
    width: '80%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    
  },button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
});
