import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import styles from './styles';
import light from '../../styles/light';
//components
import Header from '../../components/Header'
import CardHeader from '../../components/CardEstadoMunicipio';

export default function Cotacao_soja () {
  return (
    <>    
      <SafeAreaView style={{ flex: 1, backgroundColor:'#ff1000'}}>
      <View>
        <Header />
        <CardHeader />
        <View style={styles.Header}></View>
      </View>
      </SafeAreaView>
    </>
  );
};