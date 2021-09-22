import React, { useState, useEffect } from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  YellowBox,
  Text, 
  Button} from 'react-native';
import firebase from "./src/utils/firebase";
import 'firebase/auth';
import styles from './Estilos';
import Auth from './src/pages/auth/Auth';
import Dashboard from './src/pages/dashboard/Dashboard';

const App = () => {

  const [user, setUser] = useState(undefined);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((r) => {
      setUser(r)
    })
  }, []);

  if (user === undefined) return null;

  return (
    <>
        <StatusBar barStyle="light-content"/>
        <SafeAreaView style={styles.background}>
          { user ? <Dashboard /> :  <Auth />}
        </SafeAreaView>
    </>
  );
}

export default App;