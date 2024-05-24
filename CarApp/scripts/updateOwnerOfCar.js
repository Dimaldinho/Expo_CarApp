import axios from 'axios';
import { getData, setData } from '../scripts/asyncStorage'
import AsyncStorage from '@react-native-async-storage/async-storage';

const updateOwnerOfCar= async (newOwner) => {
  try {
    var oldOwner = await AsyncStorage.getItem('userLogin')

    const response = await axios.put(`http://127.0.0.1:8000/updateCarOwner?oldOwnerLogin=${oldOwner}&newOwnerLogin=${newOwner}`);
                                       
      if(response != null){
        console.log(response)
        console.log("Data in db")

      }


  } catch (error) {
    console.error('Error loging user:', error);
    throw error;
  }
};

export default updateOwnerOfCar;
