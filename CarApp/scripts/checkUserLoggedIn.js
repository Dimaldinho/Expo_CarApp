import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

export function userLoggedInOrNot() {
  useEffect(() => {
    const fetchData = async () => {

        
        const userLoggedIn = await AsyncStorage.getItem('userLoggedIn');
        console.log('User logged in:', userLoggedIn);
        if (userLoggedIn == 'false' || userLoggedIn == null) {
          router.push('./screens/login_page/login');
        } else {
          router.push('./(tabs)');
        }
     
      
    };

    fetchData();
  }, []);

  return null; // Return null as we are handling navigation in useEffect
}