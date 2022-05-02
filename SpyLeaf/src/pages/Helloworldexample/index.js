import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../styles/AppStyles';

//import { Container } from './styles';

export default function Helloworldexample () {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Hello World!</Text>
    </View>
  )
}