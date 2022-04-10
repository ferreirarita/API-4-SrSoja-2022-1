import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../Styles/AppStyles';

//import { Container } from './styles';

export default function Helloworldexample () {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Hello World!</Text>
    </View>
  )
}