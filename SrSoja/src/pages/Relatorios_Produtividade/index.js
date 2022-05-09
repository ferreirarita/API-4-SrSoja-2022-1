import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import xButton from '../../components/Button'
import { Title, Row } from './styles'

import SelectFarmAndPlot from "../../components/SelectFazendaTalhao";

/* const Relatorios_Produtividade = () => {
  return (
    <>
      <Title style={light.TitlePrimary}>Relatorio de Produtividade</Title>
      <SelectFarmAndPlot />
      <Row>
        <xButton label="Área"></xButton>
        <xButton label="Previsão de Produção"></xButton>
        <xButton label="Calculo de Produção"></xButton>
      </Row>
      <View
        style={{
          width: "90%",
          height: 205,
          borderColor: "#888",
          borderWidth: 1,
          alignSelf: "center",
          marginTop: 5,
        }}
      />
    </>
  );
}; 

export default Relatorios_Produtividade;*/

const Area = () => {
  const navigation = useNavigation();
  return (
      <SafeAreaView style={{flex:1}}>
          <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
              <Text>Tela da Área</Text>
              <TouchableOpacity style={{marginTop:20}} onPress={() => navigation.navigate('Home')}>
                  <Text>Visualizar</Text>
              </TouchableOpacity>
          </View>
      </SafeAreaView>
  );
}

const Previsao = () => {
  const navigation = useNavigation();
  return (
      <SafeAreaView style={{flex:1}}>
          <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
              <Text>Tela de Previsao</Text>
              <TouchableOpacity style={{marginTop:20}} onPress={() => navigation.navigate('Home')}>
                  <Text>Visualizar</Text>
              </TouchableOpacity>
          </View>
      </SafeAreaView>
  );
}
const Calculo = () => {
  const navigation = useNavigation();
  return (
      <SafeAreaView style={{flex:1}}>
          <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
              <Text>Tela de Cálculo</Text>
              <TouchableOpacity style={{marginTop:20}} onPress={() => navigation.navigate('Home')}>
                  <Text>Visualizar</Text>
              </TouchableOpacity>
          </View>
      </SafeAreaView>
  );
}

export { Area, Previsao, Calculo }