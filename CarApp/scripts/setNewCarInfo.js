import axios from 'axios';
import { getData, setData } from '../scripts/asyncStorage'
import AsyncStorage from '@react-native-async-storage/async-storage';

const setCarData= async (userLogin,Data) => {
  try {
    const response = await axios.post(`http://127.0.0.1:8000/newCarInfo_ForUser?login=${userLogin}&data=${Data}`);
    
      if(response != null){
        console.log(response)
        console.log("Data in db")

      }else return null


  } catch (error) {
    console.error('Error loging user:', error);
    throw error;
  }
};

export default setCarData;
