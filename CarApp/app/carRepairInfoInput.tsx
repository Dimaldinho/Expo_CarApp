import { Pressable, StyleSheet, TextInput} from 'react-native';
import { Text, View } from '@/components/Themed';
import { useState } from 'react';
import setRepairData from '../scripts/setCarRepairInfo'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function index() {
  var [repair, setRepair] = useState('!info')
  var [price, setPrice] = useState('0')


  const saveCarRepairInfo = async ()=>{
    console.log("repair = " + repair)
    console.log("price = " + price)
    setRepairData(repair,price)
  }
  return (
    <div>
    <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Info"
            onChangeText={setRepair}
          />
          <TextInput
            style={styles.input}
            placeholder="Price"
            onChangeText={setPrice}
          />
          
          <Pressable onPress={saveCarRepairInfo}style={styles.button}>
            <Text>Save</Text>
          </Pressable>
      </View>
    </div>
  )

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
