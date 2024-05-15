import { StyleSheet, View } from 'react-native';
import { router } from 'expo-router';

export default function loggOut() {
    console.log("aaa")
  router.navigate(href = './screens/login_page/login')
  return (<View>
    <Text>asd</Text>
  </View>)
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
