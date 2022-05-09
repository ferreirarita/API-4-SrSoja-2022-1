import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
//components
import CardHeader from '../../components/CardEstadoMunicipio';
import Table from '../../components/TableCard'
import stylesVar from '../../styles/stylesVar';

export default function Cotacao_Soja () {
  return (
    <>    
      <SafeAreaView style={{ flex: 1}}>
      <View>
        <Text style={stylesVar.titlePrimary}>Cotações da Soja</Text>
        <CardHeader />
        <Table />
      </View>
      </SafeAreaView>
    </>
  );
};