import axios from 'axios';
import { getData, setData } from '../scripts/asyncStorage'
import AsyncStorage from '@react-native-async-storage/async-storage';
const getCarData= async (userLogin) => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/carInfo?userLogin=${userLogin}`);
    
      if(response != null){

        //console.log(response.data.car_info)
        
        
        var a = response.data.car_info
        
        console.log("getUSersCarData: ")
        
        //console.log(a)
       
        await setData('carInfo', a)

      }

                    
    
    
    
    
  } catch (error) {
    console.error('Error loging user:', error);
    throw error;
  }
};

export default getCarData;
