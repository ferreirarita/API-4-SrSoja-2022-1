import React, { useState, useEffect, useContext } from 'react'
import { View, Text, TextInput, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker'
import { stylesArea, stylesPrevisao, stylesCalculo } from './styles'
import getContext from '../../hooks'
import {ThisContext} from '../../context'
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import MiniMap from '../../components/MiniMap'
//button
import { CheckButton, CancelButton, AddButton, NextButton, InfoButton } from '../../components/Button'


const Area = () => {
  const { database, dataResult, setResult, tlh_id, fzd_id } = getContext();
  const navigation = useNavigation();

  const [fazenda, setFazenda]= useState(['Fazenda 1', 'Fazenda 2', 'Fazenda 3', 'Fazenda 4'])
  const [selectedFazenda,setSelectedFazenda]= useState([])


  const [talhao, setTalhao]= useState(['Talhão 1', 'Talhão 2', 'Talhão 3', 'Talhão 4'])
  const [selectedTalhao,setSelectedTalhao]= useState([])


    const [alfinete, setAlfinete] = useState({latitude: -23, longitude: -45});
    const [origin, setOrigin] = useState(null);
  
  useEffect(() => {
    GetCurrentLocation();
  }, []);


  const GetCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permissão negada",
        "Por favor, permita que a localização seja utilizada para continuar",
        [{ text: "Ok" }],
      );
    }
    let { coords } = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
    });

    if (coords) {
      const { latitude, longitude } = coords;
      
      setOrigin({
        latitude: coords.latitude,
        longitude: coords.longitude,
        latitudeDelta: 0.00922,
        longitudeDelta: 0.00421,
      });
      setAlfinete({ latitude: coords.latitude,
        longitude: coords.longitude,})
    }}
  
  useEffect(()=>{


  },[talhao])

  return (
      <SafeAreaView style={stylesArea.container}>
        <ScrollView>
          <View style={stylesArea.body}>
            <View style={stylesArea.bodyRow}>
              <View style={stylesArea.bodyColumn}>
                <Text style={stylesArea.bodyTitle}>Fazenda</Text>
                <TouchableOpacity style={stylesArea.bodyRowSelect}>

                <Picker
                style={{flex:1, flexWrap:'nowrap'}}
                  selectedValue={selectedFazenda}
                  onValueChange={(itemValue,index)=>
                    setSelectedFazenda(itemValue,index)
                }>
                {
                  fazenda.map((fzd,index) => {
                    return(
                    <Picker style={{flex:1}} label={fzd} value={fzd} key={index} />
                    )
                  }) 
                }
                </Picker>

                </TouchableOpacity>
              </View>
              <View style={stylesArea.bodyColumn}>
                <Text style={stylesArea.bodyTitle}>Talhão</Text>
                <TouchableOpacity style={stylesArea.bodyRowSelect}>
                
                <Picker
                style={{flex:1, flexWrap:'nowrap'}}
                  selectedValue={selectedTalhao}
                  onValueChange={(itemValue,index)=>
                    setSelectedTalhao(itemValue,index)
                }>
                {
                  talhao.map((tl,index) => {
                    return(
                    <Picker style={{flex:1}} label={tl} value={tl} key={index} />
                    )
                  }) 
                }
                </Picker>

                </TouchableOpacity>
              </View>
            </View>
            
            <View style={stylesArea.bodyMapRow}>
                <MiniMap />
            </View>
            
            <Text style={stylesArea.bodyResultsTitle}>Resultado de Produtividade</Text> 
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
            
            <View style={stylesPrevisao.footerButtonInfo}>
                <InfoButton size={48}
                  onPress={() => {
                    navigation.navigate({
                      name: 'Area'
                    })
                  }}
                />
            </View>
            <View style={stylesPrevisao.footerRowCenterButtons}>

              <View style={stylesPrevisao.footerButtonCancel}>
                <CancelButton size={48}/>
              </View>
              <View style={stylesPrevisao.footerButtonCheck}>
                <CheckButton size={48} 
                  onPress={() => {
                  
                  }}
                  
                  />

              </View>
           </View>

            <View style={stylesPrevisao.footerButtonNext}>
              <NextButton size={48} 
                onPress={() => {
                  navigation.navigate({
                    name: 'Calculo'
                  })
                }}/>
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
      <View style={stylesPrevisao.footerRowButtons}>
            
            <View style={stylesPrevisao.footerButtonInfo}>
                <InfoButton size={48}
                  onPress={() => {
                    navigation.navigate({
                      name: 'Area'
                    })
                  }}
                />
            </View>
            <View style={stylesPrevisao.footerRowCenterButtons}>

              <View style={stylesPrevisao.footerButtonCancel}>
                <CancelButton size={48}/>
              </View>
              <View style={stylesPrevisao.footerButtonCheck}>
                <CheckButton size={48} 
                  onPress={() => {
                  
                  }}
                  
                  />

              </View>
           </View>

            <View style={stylesPrevisao.footerButtonNext}>
              <AddButton size={48} 
                onPress={() => {

                }}/>
            </View>
          </View>

  </SafeAreaView>
  );
}

export { Area, Previsao, Calculo }