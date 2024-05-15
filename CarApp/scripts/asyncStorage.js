import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to store data
export const setData = async (key, value) => {
    try {
      await AsyncStorage.setItem(String(key), value);
    } catch (e) {
      console.error("Error saving data:", e);
    }
  };
  
  // Function to retrieve data
export const getData = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key); // Replace 'key' with your actual key
    if (data !== null) {
      // Data retrieval successful
      console.log('Retrieved data:', data);
      return data;
    } else {
      // No data found
      console.log('No data found');
      return null;
    }
  } catch (error) {
    // Error retrieving data
    console.error('Error retrieving data:', error.message);
    return null;
  }
};
  //   AsyncStorage.getItem(key)
  // .then(value => {
  //   if (value !== null) {
        
  //     console.log("Retrieved data:", value);
  //     return value
  //   } else {
        
  //     console.log("No data found for key: my-key");
  //     return null
  //   }
    
  // })
  // .catch(error => {console.error("Error retrieving data:", error);return null;}
  //   );


    
  // };