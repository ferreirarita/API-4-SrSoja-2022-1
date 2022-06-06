import React, { useEffect, useState } from 'react'
import { Alert,Text, View, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import styles from './styles'
import { parse } from 'fast-xml-parser'
import * as Location from "expo-location"

//Icons
import CadastrosIcon    from '../../assets/Icons/map-fill'
import RelatoriosIcon   from '../../assets/Icons/clipboard-data-fill'
import CotacaoIcon      from '../../assets/Icons/currency-exchange'
import CustosIcon       from '../../assets/Icons/cart4'
import PrevisaoIcon     from '../../assets/Icons/cloud-lightning-rain-fill'
import HistoricoIcon    from '../../assets/Icons/clock-history'
import ComparacaoIcon   from '../../assets/Icons/trophy-fill'



const Tela_Inicial = () => {

const [coord, setCoord] = useState({});
const [coordHeaders, setCoordHeaders] = useState({});
const [location,setLocation]=useState({});

useEffect(() => {
  GetCurrentLocation();
  previsaoClima()
}, []);

const GetCurrentLocation = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();

  if (status !== "granted") {
    Alert.alert(
      "Permissão negada",
      "Por favor, permita que a localização seja utilizada para continuar",
      [{ text: "Ok" }],
      { cancelable: false }
    );
  }
  let { coords } = await Location.getCurrentPositionAsync({
    enableHighAccuracy: true,
  });

  if (coords) {
    const { latitude, longitude } = coords;
    let response = await Location.reverseGeocodeAsync({
      latitude,
      longitude,
    });
    let municipio = response[0].subregion
    setLocation({municipio})

    setCoord({
      lat: coords.latitude,
      log: coords.longitude,
    })
  }
}

const { XMLParser } = require('fast-xml-parser');
const parser = new XMLParser();
const [clima, setclima] = useState({});
const lat = coord.lat;
const log = coord.log;

async function previsaoClima(){
  await fetch(`http://servicos.cptec.inpe.br/XML/cidade/7dias/${lat}/${log}/previsaoLatLon.xml`)
  .then((response) => response.text())
  .then((textResponse) => {
    let obj = parser.parse(textResponse);
    let cidade = obj.cidade.nome;
    let estado = obj.cidade.uf;
    let previsao = [...obj.cidade.previsao];
    setclima({ nome: cidade, estado: estado, previsao: previsao });
  })
  .catch(err =>{console.log('erro', err)})
}
 useEffect(()=>{
    if(setclima !== null && []) {
        setclima()
    }
 }, []);

    const navigation = useNavigation();
    return (
        <>
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerColumn}>
                    <TouchableOpacity style={styles.headerButton} onPress={(clima) => navigation.navigate('Previsao_Tempo')}>
                        <View style={styles.headerButton}>
                            <PrevisaoIcon size="29" fill='#343434' />
                            <Text style={styles.headerText}>Previsão do Tempo</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.body}>
                <Text style={styles.bodyTitle}>Utilidades</Text>

                <View style={styles.bodyRow}>
                    <TouchableOpacity style={styles.bodyButton} onPress={() => navigation.navigate('Cadastro_Fazenda_Talhao')}>
                        <CadastrosIcon size="40" fill='#343434' />
                        <Text style={styles.bodyText}>Cadastros</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bodyButton} onPress={() => navigation.navigate('Relatorios_Produtividade')}>
                        <RelatoriosIcon size="40" fill='#343434'/>
                        <Text style={styles.bodyText}>Relatórios de Produtividade</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.bodyRow}>
                    <TouchableOpacity style={styles.bodyButton} onPress={() => navigation.navigate('Cotacao_Soja')}>
                        <CotacaoIcon size="40" fill='#343434'/>
                        <Text style={styles.bodyText}>Cotação da Soja</Text>
                    </TouchableOpacity>
            
                    <TouchableOpacity style={styles.bodyButton} onPress={() => navigation.navigate('Custos_Producao')}>
                        <CustosIcon size="42" fill='#343434'/>
                        <Text style={styles.bodyText}>Custos de Produção</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.bodyRowDesabled}>
                    <View style={styles.bodyButtonDesabled}>
                        <HistoricoIcon size="40" fill='#E0E0E0'/>
                        <Text style={styles.bodyTextDesabled}>Histórico de Compra e Venda</Text>
                    </View>

                    <View style={styles.bodyButtonDesabled}>
                        <ComparacaoIcon size="40" fill='#E0E0E0'/>
                        <Text style={styles.bodyTextDesabled}>Comparação da Região</Text>
                    </View>
                </View>
            </View>
       </View>
       </>
    );
}
export default Tela_Inicial