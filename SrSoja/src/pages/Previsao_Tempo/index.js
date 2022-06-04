import { View,Text,Image,Alert} from 'react-native';
import styles from './styles';
import { parse } from 'fast-xml-parser';
import React, { useEffect, useState } from 'react';
import * as Location from "expo-location";


const Previsao_Tempo = () => {
  
  const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);
  const [coord, setCoord] = useState("Buscando localização");

  useEffect(() => {
    CheckIfLocationEnabled();
    GetCurrentLocation();
  }, []);
  
  const CheckIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();
  
    if (!enabled) {
      Alert.alert(
        "A Localização está desativada",
        "Por favor, ative a para continuar",
        [{ text: "Ok" }],
        { cancelable: false }
      );
    } else {
      setLocationServiceEnabled(enabled);
    }
  };
  
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
      setCoord({
        lat:coords.latitude,
        log:coords.longitude,
      })
    }
  } 
  
  const {XMLParser} = require('fast-xml-parser');
  const parser = new XMLParser();
  const [clima,setclima] = useState({});
  const lat = coord.lat; 
  const log = coord.log;
  console.log("");
        
  useEffect(() => {
    fetch (`http://servicos.cptec.inpe.br/XML/cidade/7dias/${lat}/${log}/previsaoLatLon.xml`)
        .then((response) => response.text())
        .then((textResponse) => {
            let obj = parser.parse(textResponse);
            let cidade = obj.cidade.nome;
            let estado = obj.cidade.uf;
            let previsao = [...obj.cidade.previsao];
            setclima({ nome: cidade,estado: estado,previsao: previsao});
        })
        .catch((error) => {
            console.log(error);
        });
}, []);
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.bodyTitle}>{clima.nome},{clima.estado}</Text>
                <Text style={styles.bodyTitle}> </Text>    
                <Text style={styles.bodyTitle}>{clima.previsao[0].dia}</Text>       
                <View style={styles.bodyRow}>
                    <View style={styles.bodyButton}>
                        <Text style={styles.bodyText}>ºC</Text>
                    </View>
                </View>

                <Text style={styles.bodyTitle}>{clima.previsao[1].dia} </Text>

                <View style={styles.bodyRow}>
                    <View style={styles.bodyButton}>
                        <Text style={styles.bodyText}>ºC</Text>
                    </View>
                </View>

                <Text style={styles.bodyTitle}>{clima.previsao[2].dia} </Text>

                <View style={styles.bodyRow}>
                    <View style={styles.bodyButton}>
                        <Text style={styles.bodyText}>ºC</Text>
                    </View>
                </View>

                <Text style={styles.bodyTitle}>{clima.previsao[3].dia} </Text>

                <View style={styles.bodyRow}>
                    <View style={styles.bodyButton}>
                        <Text style={styles.bodyText}>ºC</Text>
                    </View>
                </View>

                <Text style={styles.bodyTitle}>{clima.previsao[4].dia} </Text>

                <View style={styles.bodyRow}>
                    <View style={styles.bodyButton}>
                        <Text style={styles.bodyText}>ºC</Text>
                    </View>
                </View>

                <Text style={styles.bodyTitle}>{clima.previsao[5].dia} </Text>

                <View style={styles.bodyRow}>
                    <View style={styles.bodyButton}>
                        <Text style={styles.bodyText}>Minima:{clima.previsao[5].minima}</Text>
                        <Text style={styles.bodyText}>Maxima:{clima.previsao[5].maxima}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Previsao_Tempo;