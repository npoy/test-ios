import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppButton from './app/components/AppButton';
import PreLoader from './app/components/PreLoader';
import BackgroundImage from './app/components/BackgroundImage';
import Start from "./app/screens/Start";
import firebaseConfig from './app/utils/firebase';
import * as firebase from 'firebase';

firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  render() {
    return (
      <BackgroundImage
        source = {require('./assets/imagenes/fondomobile.jpeg')}
        style = {{ flex: 1, width: null, height: null }}
      >
        <Start />
      </BackgroundImage>

      // <PreLoader />

      // <View style={styles.container}>
      //   <AppButton
      //     bgColor = "rgba(111, 38, 74, 0.7)"
      //     title = "test"
      //     action = { () => console.log("falopa") }
      //     iconName = "sign-in"
      //     iconSize = { 30 }
      //     iconColor = "#ffffff"
      //   />
      // </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
