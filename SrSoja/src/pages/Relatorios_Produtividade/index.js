import React, { useState, useEffect, useContext } from 'react'
import { View, Text, TextInput, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { stylesArea, stylesPrevisao, stylesCalculo } from './styles'
import {ThisContext} from '../../context'
//icon
import SelectIcon from "../../assets/Icons/chevron-down"
//button
import { CheckButton, CancelButton, AddButton, NextButton } from '../../components/Button'


const Area = () => {
  const { database, dataResult, setResult } = useContext(ThisContext)
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
                    <Text style={stylesArea.bodyResultsTextSecondary}>0</Text>
                  </View>
                </View>
                <View style={stylesArea.bodyResultsColumn}>
                  <Text style={stylesArea.bodyResultsTextPrimary}>Média de Grãos</Text>
                  <Text style={stylesArea.bodyResultsTextPrimary}>por Intervalo:</Text>
                  <View style={stylesArea.bodyRowSelect}>
                    <Text style={stylesArea.bodyResultsTextSecondary}>0</Text>
                  </View>
                </View>
              </View>

              <Text style={stylesArea.bodyTitle}>Cálculo real</Text> 
              <View style={stylesArea.bodyResultsRow}>
                <View style={stylesArea.bodyResultsColumn}>
                  <Text style={stylesArea.bodyResultsTextPrimary}>Total Coletado</Text>
                  <Text style={stylesArea.bodyResultsTextPrimary}>Kg/Ha:</Text>
                  <Text style={stylesArea.bodyResultsTextSecondary}>0</Text>
                </View>
                <View style={stylesArea.bodyResultsColumn}>
                  <Text style={stylesArea.bodyResultsTextPrimary}>Média por Coleta</Text>
                  <Text style={stylesArea.bodyResultsTextPrimary}>Kg/Ha:</Text>
                  <Text style={stylesArea.bodyResultsTextSecondary}>0</Text>
                </View>
                <View style={stylesArea.bodyResultsColumn}>
                  <Text style={stylesArea.bodyResultsTextPrimary}>Nº de Coletas</Text>
                  <Text style={stylesArea.bodyResultsTextPrimary}>realizadas</Text>
                  <Text style={stylesArea.bodyResultsTextSecondary}>0</Text>
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
  const { database, dataResult, setResult } = useContext(ThisContext)

  const [quantidadeLinha, setQuantidadeLinha] = useState('')
  const [distanciaLinha, setDistanciaLinha] = useState('')

  const [quantidadeIntervalos, setQuantidadeIntervalos] = useState('')
  const [distanciaIntervalos, setDistanciaIntervalos] = useState('')
  const [plantasIntervalos, setPlantasIntervalos] = useState('')

  const [quantidadeGraos, setQuantidadeGraos] = useState('')
  const [distanciaPlantas, setDistanciaPlantas] = useState('')

  return (
      <SafeAreaView style={stylesPrevisao.container}>

          <ScrollView>
            <View style={stylesPrevisao.body}>
              <Text style={stylesPrevisao.bodyTitle}>Insira as informações do Talhão</Text>
              <View style={stylesPrevisao.bodyBox}>
                <View style={stylesPrevisao.bodyRow}>
                  <Text style={stylesPrevisao.bodyTitlePrimary}>Linhas</Text>
                  <Text style={stylesPrevisao.bodyTitleSecondary}>Quantidade:</Text>
                  <TextInput style={stylesPrevisao.bodyInput} placeholder="000" keyboardType="numeric"
                  onChangeText={value =>setQuantidadeLinha(value)} value={quantidadeLinha} />
                  <Text style={stylesPrevisao.bodyTitleSecondary}>Distância entre Linhas (m):</Text>
                  <TextInput style={stylesPrevisao.bodyInput} placeholder="0.00" keyboardType="numeric"
                  onChangeText={value =>setDistanciaLinha(value)} value={distanciaLinha} />
                </View>
              </View>

              <View style={stylesPrevisao.bodyBox}>
                <View style={stylesPrevisao.bodyRow}>
                  <Text style={stylesPrevisao.bodyTitlePrimary}>Intervalos na Linha</Text>
                  <Text style={stylesPrevisao.bodyTitleSecondary}>Quantidade:</Text>
                  <TextInput style={stylesPrevisao.bodyInput} placeholder="000" keyboardType="numeric"
                  onChangeText={value =>setQuantidadeIntervalos(value)} value={quantidadeIntervalos} />
                  <Text style={stylesPrevisao.bodyTitleSecondary}>Distância entre intervalos (m):</Text>
                  <TextInput style={stylesPrevisao.bodyInput} placeholder="0.00" keyboardType="numeric"
                  onChangeText={value =>setDistanciaIntervalos(value)} value={distanciaIntervalos} />
                  <Text style={stylesPrevisao.bodyTitleSecondary}>Plantas por Intervalo:</Text>
                  <TextInput style={stylesPrevisao.bodyInput} placeholder="000" keyboardType="numeric"
                  onChangeText={value =>setPlantasIntervalos(value)} value={plantasIntervalos} />
                </View>
              </View>

              <View style={stylesPrevisao.bodyBox}>
                <View style={stylesPrevisao.bodyRow}>
                  <Text style={stylesPrevisao.bodyTitlePrimary}>Plantas</Text>
                  <Text style={stylesPrevisao.bodyTitleSecondary}>Quantidade de Grãos por Planta:</Text>
                  <TextInput style={stylesPrevisao.bodyInput} placeholder="000" keyboardType="numeric"
                  onChangeText={value =>setQuantidadeGraos(value)} value={quantidadeGraos} />
                  <Text style={stylesPrevisao.bodyTitleSecondary}>Distância entre Plantas (cm):</Text>
                  <TextInput style={stylesPrevisao.bodyInput} placeholder="0.00" keyboardType="numeric"
                  onChangeText={value =>setDistanciaPlantas(value)} value={distanciaPlantas} />
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
                <Text style={stylesPrevisao.footerTextSecondary}>0</Text>
              </View>
              <View style={stylesPrevisao.footerColumn}>
                <Text style={stylesPrevisao.footerTextPrimary}>Média de Grãos</Text>
                <Text style={stylesPrevisao.footerTextPrimary}>por intervalo:</Text>
                <Text style={stylesPrevisao.footerTextSecondary}>0</Text>
              </View>
            </View>
          </View>
          <View style={stylesPrevisao.footerRowButtons}>
            <View style={stylesPrevisao.footerRowButtons}>

              <View style={stylesPrevisao.footerButtonCancel}>
                <CancelButton size={48}/>
              </View>
              <View style={stylesPrevisao.footerButtonCheck}>
                <CheckButton size={48}/>
              </View>
           </View>

            <View style={stylesPrevisao.footerButtonNext}>
              <NextButton size={48}/>
            </View>
        </View>

        </SafeAreaView>
  );
}


const Calculo = () => {
  const navigation = useNavigation();
  const { database, dataResult, setResult } = useContext(ThisContext)

  const [coleta, setColeta] = useState('')

  return (
    <SafeAreaView style={stylesCalculo.container}>
        
      <ScrollView>
        <View style={stylesCalculo.body}>
          <Text style={stylesCalculo.bodyTitle}>Insira as Coletas realizadas</Text>
          <View style={stylesCalculo.bodyBox}>
            <View style={stylesCalculo.bodyRow}>
              <Text style={stylesCalculo.bodyTitleSecondary}>1º Coleta:</Text>
              <TextInput style={stylesCalculo.bodyInput} placeholder="000" keyboardType="numeric" 
              onChangeText={value =>setColeta(value)} value={coleta} />
              <Text style={stylesCalculo.bodyTitleSecondary}>Kg/Ha</Text>
            </View>
            <View style={stylesCalculo.bodyRow}>
              <Text style={stylesCalculo.bodyTitleSecondary}>2º Coleta:</Text>
              <TextInput style={stylesCalculo.bodyInput} placeholder="000" keyboardType="numeric"
              onChangeText={value =>setColeta(value)} value={coleta} />
              <Text style={stylesCalculo.bodyTitleSecondary}>Kg/Ha</Text>
            </View>
            <View style={stylesCalculo.bodyRow}>
              <Text style={stylesCalculo.bodyTitleSecondary}>3º Coleta:</Text>
              <TextInput style={stylesCalculo.bodyInput} placeholder="000" keyboardType="numeric"
              onChangeText={value =>setColeta(value)} value={coleta} />
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
            <Text style={stylesCalculo.footerTextSecondary}>0</Text>
          </View>
          <View style={stylesCalculo.footerColumn}>
            <Text style={stylesCalculo.footerTextPrimary}>Média por Coleta</Text>
            <Text style={stylesCalculo.footerTextPrimary}>Kg/Ha:</Text>
            <Text style={stylesCalculo.footerTextSecondary}>0</Text>
          </View>
          <View style={stylesCalculo.footerColumn}>
            <Text style={stylesCalculo.footerTextPrimary}>Nº de Coletas</Text>
            <Text style={stylesCalculo.footerTextPrimary}>realizadas:</Text>
            <Text style={stylesCalculo.footerTextSecondary}>0</Text>
          </View>
        </View>
      </View>
      <View style={stylesCalculo.footerButtons}>
          <View style={stylesCalculo.footerRowButtons}>
            <View style={stylesCalculo.footerRowButtons}>

              <View style={stylesCalculo.footerButtonCancel}>
                <CancelButton size={48}/>
              </View>
              <View style={stylesCalculo.footerButtonCheck}>
                <CheckButton size={48}/>
              </View>
           </View>

            <View style={stylesCalculo.footerButtonNext}>
              <NextButton size={48}/>
            </View>
          </View>
        </View>

  </SafeAreaView>
  );
}

export { Area, Previsao, Calculo }