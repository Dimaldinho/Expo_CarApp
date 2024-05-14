import React, { useState } from 'react';
import { Pressable,View, TextInput, Button, StyleSheet,Text } from 'react-native';
//import checkLogin_Password from '../../api/loginCheck';
import { router } from 'expo-router';


const login = ({ }) => {
  const [userLogin, setEmail] = useState('');
  const [userPassword, setPassword] = useState('');
  const [isRegisterModalVisible, setIsRegisterModalVisible] = useState(false);
  
  
  const toggleRegisterModal = () => {
    setIsRegisterModalVisible(!isRegisterModalVisible);
    
  };

  const handleLogin = async () => {
   
    console.log('Login:', userLogin);
    console.log('Password:', userPassword);

    // if(await checkLogin_Password(userLogin,userPassword) == true){
    //   console.log("Success")
      
    //   router.push('../(tabs)/mainScreen');
      
    // }
  
  };
  

  return (
    <View style={styles.container}>
        
      <TextInput
        style={styles.input}
        placeholder="Login"
        onChangeText={setEmail}
        value={userLogin}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={userPassword}
        secureTextEntry
      />
      
        <Pressable onPress={handleLogin}>
          <Text>Login</Text>
        </Pressable>
      
    </View>
  );
};

{/* Your login screen UI */}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 20, // Add some space between inputs and buttons
  },
});

export default login;
