import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to store data
export const setData = async (key, value) => {
    try {
      await AsyncStorage.setItem(String(key), value);
    } catch (e) {
      console.error("Error saving data:", e);
    }
  };
  
  
export const getData = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key); 
    if (data !== null) {
      
      console.log('Retrieved data:', data);
      return data;
    } else {
      
      console.log('No data found');
      return null;
    }
  } catch (error) {
    
    console.error('Error retrieving data:', error.message);
    return null;
  }
};
