import React from 'react';
import {SafeAreaView, View, Text, StyleSheet } from 'react-native';
//import Toolbar from '../../components/Toolbar/index'
//import styles from './styles';

export default function Cotacao_soja () {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:'#ff1000'}}>
      <View style={styles.Header}>
        <Text style={styles.titleHeader}>Cotação da Soja</Text>
        <View style={styles.cardHeader}>
         <Text style={styles.secondaryTitle}>Estado</Text>
         <Text style={styles.secondaryTitle}>Município</Text>
        </View>
      </View>
      <View style={styles.Body}>
        <View style={styles.cardTablePrimary}>
          <View style={styles.cardTableSecondary} />
        </View>
      </View>
    </SafeAreaView>
  )
  };

const styles = StyleSheet.create({
    Header: {
      backgroundColor: '#F1F1F1',
      alignItems: 'center',
    },

    cardHeader: {
      width: '92%',
      height: 70,
      backgroundColor: "#DCDCDC",
      margin: 10,
    },

    titleHeader:{
      paddingTop: 10,
      textAlign: 'center',
      fontFamily: "Arial",
      fontWeight: "bold",
      fontSize: 18,
      color: "#000000",
    },

    secondaryTitle:{
      fontFamily: "Arial",
      fontWeight: "bold",
      fontSize: 14,
      color: "#000000",
    },

    Body: {
      backgroundColor: '#F1F1F1',
      alignItems: 'center',
    },
    
    cardTablePrimary: {
      alignItems: 'center',
      width: '90%',
      height: 440,
      backgroundColor: "#DCDCDC",
      margin: 10,
    },

    cardTableSecondary: {
      top: '8%',
      width: '88%',
      height: '90%',
      backgroundColor: "#C0C0C0",
    },

})