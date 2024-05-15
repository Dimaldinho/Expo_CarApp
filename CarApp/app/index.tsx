import { StyleSheet } from 'react-native';
import {userLoggedInOrNot} from '../scripts/checkUserLoggedIn'

export default function index() {
  userLoggedInOrNot();

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
