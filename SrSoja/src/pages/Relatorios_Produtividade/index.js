import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { stylesArea, stylesPrevisao, stylesCalculo } from './styles'
//icon
import SelectIcon from "../../assets/Icons/chevron-down"


const Area = () => {
  const navigation = useNavigation();
  return (
      <SafeAreaView style={stylesArea.container}>
        <ScrollView>
          <View style={stylesArea.body}>
            <View style={stylesArea.bodyRow}>
              <View style={stylesArea.bodyColumn}>
                <Text style={stylesArea.bodyTitle}>Estado</Text>
                <TouchableOpacity style={stylesArea.bodyRowSelect}>
                <Text style={stylesArea.bodyTitleSelect}>Selecione</Text>
                <SelectIcon size={20} fill="#343434" />
                </TouchableOpacity>
              </View>
              <View style={stylesArea.bodyColumn}>
                <Text style={stylesArea.bodyTitle}>Município</Text>
                <TouchableOpacity style={stylesArea.bodyRowSelect}>
                  <Text style={stylesArea.bodyTitleSelect}>Selecione</Text>
                  <SelectIcon size={20} fill="#343434" />
                </TouchableOpacity>
              </View>
            </View>
            
            <View style={stylesArea.bodyMapRow}>
              <View style={stylesArea.bodyMap}/>  
            </View>
            
            <Text style={stylesArea.bodyResultsTitle}>Resultado</Text> 
            <View style={stylesArea.bodyResults}>

              <Text style={stylesArea.bodyTitle}>Previsão</Text> 
              <View style={stylesArea.bodyResultsRow}>
                <View style={stylesArea.bodyResultsColumn}>
                  <Text style={stylesArea.bodyResultsTextPrimary}>Total Coletado Kg/Ha:</Text>
                  <View style={stylesArea.bodyRowSelect}>
                  <Text style={stylesArea.bodyResultsTextSecondary}>240</Text>
                  </View>
                </View>
                <View style={stylesArea.bodyResultsColumn}>
                  <Text style={stylesArea.bodyResultsTextPrimary}>Média de Grãos por Intervalo:</Text>
                  <View style={stylesArea.bodyRowSelect}>
                    <Text style={stylesArea.bodyResultsTextSecondary}>200</Text>
                  </View>
                </View>
              </View>

              <Text style={stylesArea.bodyTitle}>Cálculo real</Text> 
              <View style={stylesArea.bodyResultsRow}>
                <View style={stylesArea.bodyResultsColumn}>
                  <Text style={stylesArea.bodyResultsTextPrimary}>Total Coletado Kg/Ha:</Text>
                  <Text style={stylesArea.bodyResultsTextSecondary}>255</Text>
                </View>
                <View style={stylesArea.bodyResultsColumn}>
                  <Text style={stylesArea.bodyResultsTextPrimary}>Média por Coleta Kg/Ha:</Text>
                    <Text style={stylesArea.bodyResultsTextSecondary}>200</Text>
                </View>
                <View style={stylesArea.bodyResultsColumn}>
                  <Text style={stylesArea.bodyResultsTextPrimary}>Nº de Coletas</Text>
                    <Text style={stylesArea.bodyResultsTextSecondary}>4</Text>
                </View>
              </View>

            </View>         
          </View>
        </ScrollView>
      </SafeAreaView>
  );
}

const Previsao = () => {
  const navigation = useNavigation();
  return (
      <SafeAreaView style={stylesPrevisao.container}>
        <View style={stylesPrevisao.body}>
          <View style={stylesPrevisao.bodyRow}>
            <Text style={stylesPrevisao.bodyTitlePrimary}>Linhas</Text>
            <Text style={stylesPrevisao.bodyTitleSecondary}>Quantidade:</Text>
            <Text style={stylesPrevisao.bodyTitleSecondary}>Distância entre Linhas (m):</Text>
          </View>
          <View style={stylesPrevisao.bodyRow}>
            <Text style={stylesPrevisao.bodyTitlePrimary}>Intervalos na Linha</Text>
            <Text style={stylesPrevisao.bodyTitleSecondary}>Quantidade:</Text>
            <Text style={stylesPrevisao.bodyTitleSecondary}>Distância entre intervalos (m):</Text>
            <Text style={stylesPrevisao.bodyTitleSecondary}>Plantas por Intervalo:</Text>
          </View>
          <View style={stylesPrevisao.bodyRow}>
            <Text style={stylesPrevisao.bodyTitlePrimary}>Plantas</Text>
            <Text style={stylesPrevisao.bodyTitleSecondary}>Quantidade de Grãos por Planta:</Text>
            <Text style={stylesPrevisao.bodyTitleSecondary}>Distância entre Plantas (cm):</Text>
          </View>
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