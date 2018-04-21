import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';

import logo from "../../imgs/Larces.png";

const InitialPage = () => (
      <View style={styles.background}>
        <Image source={logo} style={styles.image} />
        <Text style={styles.txtLarces}>Laboratório de Redes de Computadores e Segurança</Text>
      </View>
);

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#2e3638',
    flex: 1,
    alignItems: 'center'
  },
  image: {
    marginTop: 200,
    width: 250,
    height: 50,
  },
  txtLarces: {
    marginLeft: 100,
    width: 200,
    color: 'white',
    fontSize: 12
  }
});

export default InitialPage;