import { Pressable, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { router } from 'expo-router';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Pressable onPress={()=> router.push('../carRepairInfoInput')} style={styles.button}>
            <Text>Add</Text>
      </Pressable>
    </View>
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
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    bottom: -350,
  },
});
