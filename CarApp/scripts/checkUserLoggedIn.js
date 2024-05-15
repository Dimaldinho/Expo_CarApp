import { getData, setData } from './asyncStorage'
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

export function userLoggedInOrNot() {
  useEffect(() => {
    const fetchData = async () => {
        await AsyncStorage.setItem('userLoggedIn', 'false');

        
        const userLoggedIn = await AsyncStorage.getItem('userLoggedIn');
        console.log('User logged in:', userLoggedIn);
        if (userLoggedIn === 'false') {
          router.push('./screens/login_page/login');
        } else {
          
          // Redirect to another page if user is logged in
          // return <Redirect href="./tabs" />;
        }
     
      
    };

    fetchData();
  }, []);

  return null; // Return null as we are handling navigation in useEffect
}