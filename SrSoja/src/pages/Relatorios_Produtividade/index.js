import React from 'react'
import { View, Text, TextInput, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
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
                  <Text style={stylesArea.bodyResultsTextPrimary}>Total Coletado</Text>
                  <Text style={stylesArea.bodyResultsTextPrimary}>Kg/Ha:</Text>
                  <View style={stylesArea.bodyRowSelect}>
                    <Text style={stylesArea.bodyResultsTextSecondary}>240</Text>
                  </View>
                </View>
                <View style={stylesArea.bodyResultsColumn}>
                  <Text style={stylesArea.bodyResultsTextPrimary}>Média de Grãos</Text>
                  <Text style={stylesArea.bodyResultsTextPrimary}>por Intervalo:</Text>
                  <View style={stylesArea.bodyRowSelect}>
                    <Text style={stylesArea.bodyResultsTextSecondary}>200</Text>
                  </View>
                </View>
              </View>

              <Text style={stylesArea.bodyTitle}>Cálculo real</Text> 
              <View style={stylesArea.bodyResultsRow}>
                <View style={stylesArea.bodyResultsColumn}>
                  <Text style={stylesArea.bodyResultsTextPrimary}>Total Coletado</Text>
                  <Text style={stylesArea.bodyResultsTextPrimary}>Kg/Ha:</Text>
                  <Text style={stylesArea.bodyResultsTextSecondary}>255</Text>
                </View>
                <View style={stylesArea.bodyResultsColumn}>
                  <Text style={stylesArea.bodyResultsTextPrimary}>Média por Coleta</Text>
                  <Text style={stylesArea.bodyResultsTextPrimary}>Kg/Ha:</Text>
                  <Text style={stylesArea.bodyResultsTextSecondary}>200</Text>
                </View>
                <View style={stylesArea.bodyResultsColumn}>
                  <Text style={stylesArea.bodyResultsTextPrimary}>Nº de Coletas</Text>
                  <Text style={stylesArea.bodyResultsTextPrimary}>realizadas</Text>
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

          <ScrollView>
            <View style={stylesPrevisao.body}>
              <Text style={stylesPrevisao.headerTitle}>Insira as informações do Talhão</Text>
              <View style={stylesPrevisao.bodyBox}>
                <View style={stylesPrevisao.bodyRow}>
                  <Text style={stylesPrevisao.bodyTitlePrimary}>Linhas</Text>
                  <Text style={stylesPrevisao.bodyTitleSecondary}>Quantidade:</Text>
                  <TextInput style={stylesPrevisao.bodyInput} placeholder="000" />
                  <Text style={stylesPrevisao.bodyTitleSecondary}>Distância entre Linhas (m):</Text>
                  <TextInput style={stylesPrevisao.bodyInput} placeholder="0.00" />
                </View>
              </View>

              <View style={stylesPrevisao.bodyBox}>
                <View style={stylesPrevisao.bodyRow}>
                  <Text style={stylesPrevisao.bodyTitlePrimary}>Intervalos na Linha</Text>
                  <Text style={stylesPrevisao.bodyTitleSecondary}>Quantidade:</Text>
                  <TextInput style={stylesPrevisao.bodyInput} placeholder="000" />
                  <Text style={stylesPrevisao.bodyTitleSecondary}>Distância entre intervalos (m):</Text>
                  <TextInput style={stylesPrevisao.bodyInput} placeholder="0.00" />
                  <Text style={stylesPrevisao.bodyTitleSecondary}>Plantas por Intervalo:</Text>
                  <TextInput style={stylesPrevisao.bodyInput} placeholder="000" />
                </View>
              </View>

              <View style={stylesPrevisao.bodyBox}>
                <View style={stylesPrevisao.bodyRow}>
                  <Text style={stylesPrevisao.bodyTitlePrimary}>Plantas</Text>
                  <Text style={stylesPrevisao.bodyTitleSecondary}>Quantidade de Grãos por Planta:</Text>
                  <TextInput style={stylesPrevisao.bodyInput} placeholder="000" />
                  <Text style={stylesPrevisao.bodyTitleSecondary}>Distância entre Plantas (cm):</Text>
                  <TextInput style={stylesPrevisao.bodyInput} placeholder="0.00" />
                </View>
              </View>

            </View>
          </ScrollView>

          <View style={stylesPrevisao.footer}>
            <Text style={stylesPrevisao.footerTitle}>Resultado</Text>
            <View style={stylesPrevisao.footerRow}>
              <View style={stylesPrevisao.footerColumn}>
                <Text style={stylesPrevisao.footerTextPrimary}>Total Coletado</Text>
                <Text style={stylesPrevisao.footerTextPrimary}>Kg/Ha:</Text>
                <Text style={stylesPrevisao.footerTextSecondary}>255</Text>
              </View>
              <View style={stylesPrevisao.footerColumn}>
                <Text style={stylesPrevisao.footerTextPrimary}>Média de Grãos</Text>
                <Text style={stylesPrevisao.footerTextPrimary}>por intervalo:</Text>
                <Text style={stylesPrevisao.footerTextSecondary}>200</Text>
              </View>
            </View>
          </View>

        </SafeAreaView>
  );
}


const Calculo = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={stylesCalculo.container}>
        
      <ScrollView>
        <View style={stylesCalculo.body}>
          <Text style={stylesCalculo.headerTitle}>Insira as Coletas realizadas</Text>
          <View style={stylesCalculo.bodyBox}>
            <View style={stylesCalculo.bodyRow}>
              <Text style={stylesCalculo.bodyTitleSecondary}>1º Coleta:</Text>
              <TextInput style={stylesCalculo.bodyInput} placeholder="000" />
              <Text style={stylesCalculo.bodyTitleSecondary}>Kg/Ha</Text>
            </View>
            <View style={stylesCalculo.bodyRow}>
              <Text style={stylesCalculo.bodyTitleSecondary}>2º Coleta:</Text>
              <TextInput style={stylesCalculo.bodyInput} placeholder="000" />
              <Text style={stylesCalculo.bodyTitleSecondary}>Kg/Ha</Text>
            </View>
            <View style={stylesCalculo.bodyRow}>
              <Text style={stylesCalculo.bodyTitleSecondary}>3º Coleta:</Text>
              <TextInput style={stylesCalculo.bodyInput} placeholder="000" />
              <Text style={stylesCalculo.bodyTitleSecondary}>Kg/Ha</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={stylesCalculo.footer}>
        <Text style={stylesCalculo.footerTitle}>Resultado</Text>
        <View style={stylesCalculo.footerRow}>
          <View style={stylesCalculo.footerColumn}>
            <Text style={stylesCalculo.footerTextPrimary}>Total Coletado</Text>
            <Text style={stylesCalculo.footerTextPrimary}>Kg/Ha:</Text>
            <Text style={stylesCalculo.footerTextSecondary}>255</Text>
          </View>
          <View style={stylesCalculo.footerColumn}>
            <Text style={stylesCalculo.footerTextPrimary}>Média por Coleta</Text>
            <Text style={stylesCalculo.footerTextPrimary}>Kg/Ha:</Text>
            <Text style={stylesCalculo.footerTextSecondary}>63.75</Text>
          </View>
          <View style={stylesCalculo.footerColumn}>
            <Text style={stylesCalculo.footerTextPrimary}>Nº de Coletas</Text>
            <Text style={stylesCalculo.footerTextPrimary}>realizadas:</Text>
            <Text style={stylesCalculo.footerTextSecondary}>4</Text>
          </View>
        </View>
      </View>

  </SafeAreaView>
  );
}

export { Area, Previsao, Calculo }