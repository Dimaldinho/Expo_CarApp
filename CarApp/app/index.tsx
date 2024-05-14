import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Redirect } from 'expo-router';

export default function index() {
    const userLoggedIn = false
    
    if(!userLoggedIn){
        return <Redirect href="./screens/login_page/login" />;
    }
    return <Redirect href="./(tabs)" />;

  
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