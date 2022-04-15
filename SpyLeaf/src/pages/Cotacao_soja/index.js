import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
//components
import Header from '../../components/Header'
import CardHeader from '../../components/CardEstadoMunicipio';
import Table from '../../components/TableCard'
import light from '../../styles/light';

export default function Cotacao_soja () {
  return (
    <>    
      <SafeAreaView style={{ flex: 1}}>
      <View>
        <Header />
        <Text style={light.TitlePrimary}>Cotações da Soja</Text>
        <CardHeader />
        <Table />
      </View>
      </SafeAreaView>
    </>
  );
};