import axios from 'axios';
import { getData, setData } from '../scripts/asyncStorage'
import AsyncStorage from '@react-native-async-storage/async-storage';

const setRepairData= async (repairInfo,repairPrice) => {
  try {
    var user = await AsyncStorage.getItem('userLogin')

    const response = await axios.post(`http://127.0.0.1:8000/newCarRepairInfo?login=${user}&repair=${repairInfo}&price=${repairPrice}`);
                                     
      if(response != null){
        console.log(response)
        console.log("Data in db")

      }


  } catch (error) {
    console.error('Error loging user:', error);
    throw error;
  }
};

export default setRepairData;
