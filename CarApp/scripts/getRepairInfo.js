import axios from 'axios';
import { getData, setData } from '../scripts/asyncStorage'
import AsyncStorage from '@react-native-async-storage/async-storage';
const getCarRepairData = async () => {
  try {
    var user = await AsyncStorage.getItem('userLogin')
    const response = await axios.get(`http://127.0.0.1:8000/allReapirInfo?login=${user}`);
    
      if(response.data != null){
        return response.data
        

      }else return null


  } catch (error) {
    console.error('Error loging user:', error);
    throw error;
  }
};

export default getCarRepairData;
