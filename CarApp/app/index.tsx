import { StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { getData, setData } from '../scripts/asyncStorage'
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
