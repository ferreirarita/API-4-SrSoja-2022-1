import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

import styles from './Styles/AppStyles';
import HelloWorld from './Components/HelloWorldExemple';

export default function App() {
  return (
    <View style={styles.container}>
      <HelloWorld />
      <StatusBar style='light' />
    </View>
  );
}

