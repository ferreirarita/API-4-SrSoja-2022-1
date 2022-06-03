import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Previsao_Tempo = ({route}) =>{
    const { item } = route.params;
    return (
      <View style={stylesFertilizante.container}>
        <View style={stylesFertilizante.contentContainer}>
          <Text style={stylesFertilizante.title}>Home Delivery address: </Text>
          <Text style={stylesFertilizante.text}>{item}</Text>
        </View>
      </View>
    );
  };
  
  const stylesFertilizante = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#070707',
      alignItems: 'center',
      justifyContent: 'center'
    },
    contentContainer: {
      paddingHorizontal: 20,
      alignItems: 'center'
    },
    title: {
      fontSize: 22,
      fontWeight: '700',
      color: '#FD0139',
      paddingBottom: 10
    },
    text: {
      fontSize: 20,
      fontWeight: '400',
      color: '#fff'
    }
  });
  export default Previsao_Tempo