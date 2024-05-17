import axios from 'axios';
import { getData, setData } from '../scripts/asyncStorage'

const getCarData= async (userLogin) => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/carInfo?userLogin=${userLogin}`);
    
      
      if(response != null){
        console.log(response.data.car_info) 
        

        
      }
    return response.data                 
    
    
    
    
  } catch (error) {
    console.error('Error loging user:', error);
    throw error;
  }
};

export default getCarData;
