import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';

import InitialPage from './src/components/InitialPage'
import FormLogin from './src/components/FormLogin';

export default class App extends Component {
  render() {
    return (
      <FormLogin/>
    );
  }
}