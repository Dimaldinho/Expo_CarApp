import axios from 'axios';

const getCarData= async (userLogin) => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/verifyUser?user_Login=${userLogin}`);
    console.log(response)                      
   
    if(response.data == true){
        return true
    }
    console.log("Error")
    return false
    
    
    
    
    
  } catch (error) {
    console.error('Error loging user:', error);
    throw error;
  }
};

export default checkLogin_Password;
