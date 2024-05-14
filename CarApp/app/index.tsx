import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

import { Redirect } from 'expo-router';
import { getData, setData } from '../scripts/asyncStorage'

export default function index() {
    setData('userLoggedIn','false')
    const userLoggedIn =  getData('userLoggedIn').then
    
    
    if(userLoggedIn == false){
        setData('userLoggedIn','false')
        
        return <Redirect href="./screens/login_page/login" />;
    }else{
      return <Redirect href="./(tabs)" />;
    }
    
    

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
