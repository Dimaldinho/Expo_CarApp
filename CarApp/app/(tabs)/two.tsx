import { Pressable, ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { router } from 'expo-router';
import getCarRepairData from '../../scripts/getRepairInfo'

import React, { useEffect, useState } from "react";


   
export default function TabTwoScreen() {
  var [condition, setCond] = useState(false)
  const [data, setData] = useState([])
  const [refresh, setRefresh] = useState(false); // State to trigger useEffect
  
  const showAll = async ()=>{
      const data = await getCarRepairData()
      if(!data){
        setCond(false)
      }else{
        setCond(true)
        console.log(data)
        setData(data);
      }
      
      
  }
  const handlePress = () => {
    setRefresh(!refresh);
    router.push('../carRepairInfoInput');
  };
  useEffect(() => {
    
    showAll()
    
  
    
  }, [refresh]);

  return (
    <div>
      {condition ?(
        
           <ScrollView >
             {data.map((item) => (
               <View key={item} style={styles.item}>
                 <Text style={styles.itemText}>{item.info} - {item.price}$</Text>
                <Text style={styles.itemText}>{item.date}</Text>
               </View>
        
            ))}
          </ScrollView>
          
          
      ):(
        <Text>NO DATA</Text>
      )

      }
      <Pressable onPress={handlePress} style={styles.button}>
                  <Text>Add</Text>
                  
            </Pressable>
        
    </div>








    // <View style={styles.container}>
    //   <ScrollView contentContainerStyle={styles.container}>
    //     {data.map((item) => (
    //       <View key={item.id} style={styles.item}>
    //         <Text style={styles.itemText}>{item.info} - {item.price}$</Text>
    //         <Text style={styles.itemText}>{item.date}</Text>
    //       </View>
    //     ))}
    //   </ScrollView>
    //   <Pressable onPress={handlePress} style={styles.button}>
    //           <Text>Add</Text>
              
    //     </Pressable>
    // </View>



    // <View style={styles.container}>
      //  <Pressable onPress={()=> router.push('../carRepairInfoInput')} style={styles.button}>
      //        <Text>Add</Text>
            
      //  </Pressable>
      
    // </View>
    
  );
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
  },button: {
    position: 'absolute',
    bottom: 20,
    left: '50%',
    marginLeft: -75, // Adjust this value to half of the button's width
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
  }, item: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#f9c2ff',
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },itemText: {
    fontSize: 18,
  },scrollViewContent: {
    padding: 20,
    paddingBottom: 80, // Add some padding to avoid content being hidden behind the button
  },
});
