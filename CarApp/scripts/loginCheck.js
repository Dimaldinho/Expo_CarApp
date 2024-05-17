import axios from 'axios';

const checkLogin_Password= async (userLogin, userPassword) => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/verifyUser?userInput_Login=${userLogin}&userInput_Password=${userPassword}`);
                    
   
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
