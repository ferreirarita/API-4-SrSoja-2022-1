import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import light from '../../styles/light';

export default function Toolbar () {
  return (
    <View>
      <View>
        <Text style={styles.Header}></Text>
      </View>
      <Text style={styles.headerText}>Teste toolbar</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  Header: {
      top: 0,
      width: '100%',
      height: 40,
      flexDirection: 'row',
      color: '#EE8600',
      textAlign: 'center'
  },
  headerText: {
      fontWeight: 'bold',
      fontSize: 20,
      color: '#3333',
      letterSpacing: 1
  }
});
