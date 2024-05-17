import axios from 'axios';
import { getData, setData } from '../scripts/asyncStorage'
import AsyncStorage from '@react-native-async-storage/async-storage';
const getCarData= async (userLogin) => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/carInfo?userLogin=${userLogin}`);
    
      if(response != null){

        console.log(response.data.car_info)
        
        
        var a = JSON.parse(response.data.car_info)
        var data = JSON.stringify(a)
        setData('carInfo', data)

      }

                    
    
    
    
    
  } catch (error) {
    console.error('Error loging user:', error);
    throw error;
  }
};

export default getCarData;
