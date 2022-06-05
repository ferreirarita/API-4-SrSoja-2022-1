import { ActivityIndicator, View, Text, Image, Alert, ScrollView,TouchableOpacity } from 'react-native';
import styles from './styles';
import { parse } from 'fast-xml-parser';
import React, { useEffect, useState } from 'react';
import * as Location from "expo-location";



const Previsao_Tempo = () => {

  const [coord, setCoord] = useState({});
  const [coordHeaders, setCoordHeaders] = useState({});
  const [loading, setLoading] = useState(true);
  const [location,setLocation]=useState({});

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

/*
  useEffect(() => {

    // AQUI TENTO UM AWAIT
    
     const prevclima = async () => {
      await
       fetch(`http://servicos.cptec.inpe.br/XML/cidade/7dias/${lat}/${log}/previsaoLatLon.xml`)
      .then((response) => response.text())
      .then((textResponse) => {
          let obj = parser.parse(textResponse);
          let cidade = obj.cidade.nome;
          let estado = obj.cidade.uf;
          let previsao = [...obj.cidade.previsao];
          setclima({ nome: cidade, estado: estado, previsao: previsao });

          setLoading(false)
        })
        .catch((error) => {
          console.log(error);
        });

    }
  }, []); */

  const Loading = () => (
    <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
      <ActivityIndicator size="large" color="#343434" />
    </View>
  );



  const[semanal,setSemanal]=useState([])
  const[semanalDias,setSemanalDias]=useState({})

  async function previsaoClima(clima){
    await fetch(`http://servicos.cptec.inpe.br/XML/cidade/7dias/${lat}/${log}/previsaoLatLon.xml`)
    .then((res)=> res.text())
    .then(res=>{
      let xml = parser.parse(res)
      let semana = xml.cidade.previsao
      setSemanal({semana})
      let um    =  semanal[0]
      let dois  =  semanal[1]
      let tres  =  semanal[2]
      let quatro=  semanal[3]
      let cinco =  semanal[4]
      let seis  =  semanal[5]
      let sete  =  semanal[6]

      var lista = semana.map(e=>{
        return semana
        
      })
      setSemanalDias(lista)
      console.log('semanalDiassssssssssssssssssssssssssssss',semanal)
    }).catch(err =>{console.log('erro', err)})
  }

  
  return (
    <ScrollView>
          <View style={styles.container}>
            <ScrollView>
              <View style={styles.body}>
                <TouchableOpacity
                onPress={() => previsaoClima()
                }>
                  <Text style={styles.bodyTitle}>teste</Text>

                </TouchableOpacity>


                <Text style={styles.bodyTitle}></Text>
                </View>
            </ScrollView>
          </View >
    </ScrollView >
  )
}

export default Previsao_Tempo;
          
          // AQUI TRANSFORMA AS ABREVIAÇÕES DO TEMPO
/* 
          for (x = 0; x = !5; x = x + 1) {
            if (clima.previsao[x].tempo == "ec")
              clima.previsao[x].tempo = "Encoberto com Chuvas Isoladas";
            if (clima.previsao[x].tempo == "ci")
              clima.previsao[x].tempo = "Chuvas Isoladas";
            if (clima.previsao[x].tempo == "c")
              clima.previsao[x].tempo = "Chuva";
            if (clima.previsao[x].tempo == "in")
              clima.previsao[x].tempo = "Instável";
            if (clima.previsao[x].tempo == "pp")
              clima.previsao[x].tempo = "Poss. de Pancadas de Chuva";
            if (clima.previsao[x].tempo == "cm")
              clima.previsao[x].tempo = "Chuva pela Manhã";
            if (clima.previsao[x].tempo == "cn")
              clima.previsao[x].tempo = "Chuva a Noite";
            if (clima.previsao[x].tempo == "pt")
              clima.previsao[x].tempo = "Pancadas de Chuva a Tarde";
            if (clima.previsao[x].tempo == "pm")
              clima.previsao[x].tempo = "Pancadas de Chuva pela Manhã";
            if (clima.previsao[x].tempo == "np")
              clima.previsao[x].tempo = "Nublado e Pancadas de Chuva";
            if (clima.previsao[x].tempo == "pc")
              clima.previsao[x].tempo = "Pancadas de Chuva";
            if (clima.previsao[x].tempo == "pn")
              clima.previsao[x].tempo = "Parcialmente Nublado";
            if (clima.previsao[x].tempo == "cv")
              clima.previsao[x].tempo = "Chuvisco";
            if (clima.previsao[x].tempo == "ch")
              clima.previsao[x].tempo = "Chuvoso";
            if (clima.previsao[x].tempo == "t")
              clima.previsao[x].tempo = "Tempestade";
            if (clima.previsao[x].tempo == "ps")
              clima.previsao[x].tempo = "Predomínio de Sol";
            if (clima.previsao[x].tempo == "e")
              clima.previsao[x].tempo = "Encoberto";
            if (clima.previsao[x].tempo == "n")
              clima.previsao[x].tempo = "Nublado";
            if (clima.previsao[x].tempo == "cl")
              clima.previsao[x].tempo = "Céu Claro";
            if (clima.previsao[x].tempo == "nv")
              clima.previsao[x].tempo = "Nevoeiro";
            if (clima.previsao[x].tempo == "g")
              clima.previsao[x].tempo = "Geada";
            if (clima.previsao[x].tempo == "ne")
              clima.previsao[x].tempo = "Neve";
            if (clima.previsao[x].tempo == "nd")
              clima.previsao[x].tempo = "Não Definido";
            if (clima.previsao[x].tempo == "pnt")
              clima.previsao[x].tempo = "Pancadas de Chuva a Noite";
            if (clima.previsao[x].tempo == "psc")
              clima.previsao[x].tempo = "Possibilidade de Chuva";
            if (clima.previsao[x].tempo == "pcm")
              clima.previsao[x].tempo = "Possibilidade de Chuva pela Manhã";
            if (clima.previsao[x].tempo == "pct")
              clima.previsao[x].tempo = "Possibilidade de Chuva a Tarde";
            if (clima.previsao[x].tempo == "pcn")
              clima.previsao[x].tempo = "Possibilidade de Chuva a Noite";
            if (clima.previsao[x].tempo == "npt")
              clima.previsao[x].tempo = "Nublado com Pancadas a Tarde";
            if (clima.previsao[x].tempo == "npn")
              clima.previsao[x].tempo = "Nublado com Pancadas a Noite";
            if (clima.previsao[x].tempo == "ncn")
              clima.previsao[x].tempo = "Nublado com Poss. de Chuva a Noite";
            if (clima.previsao[x].tempo == "nct")
              clima.previsao[x].tempo = "Nublado com Poss. de Chuva a Tarde";
            if (clima.previsao[x].tempo == "ncm")
              clima.previsao[x].tempo = "Nubl. c/ Poss. de Chuva pela Manhã";
            if (clima.previsao[x].tempo == "npm")
              clima.previsao[x].tempo = "Nublado com Pancadas pela Manhã";
            if (clima.previsao[x].tempo == "npp")
              clima.previsao[x].tempo = "Nublado com Possibilidade de Chuva";
            if (clima.previsao[x].tempo == "vn")
              clima.previsao[x].tempo = "Variação de Nebulosidade";
            if (clima.previsao[x].tempo == "ct")
              clima.previsao[x].tempo = "Chuva a Tarde";
            if (clima.previsao[x].tempo == "ppn")
              clima.previsao[x].tempo = "Poss. de Panc. de Chuva a Noite";
            if (clima.previsao[x].tempo == "ppt")
              clima.previsao[x].tempo = "Poss. de Panc. de Chuva a Tarde";
            if (clima.previsao[x].tempo == "ppm")
              clima.previsao[x].tempo = "Poss. de Panc. de Chuva pela Manhã";
          } */

          // AQUI ERA PARA DESABILITA O LOADING




  //O RETURN TA RODANDO ANTES DE DE useEffect
  // OU seja TA DANDO erro em todos {clima.previsao[0].dia} etc..
/*   {loading ? (
    <View>
      <ActivityIndicator size="large" color={'red'} />
    </View>
  ) : ( */

/*
              <Text style={styles.bodyTitle}> </Text>

                <Text style={styles.bodyTitle}>{clima.previsao[0].dia} </Text>
                <View style={styles.bodyRow}>
                  <View style={styles.bodyButton}>
                    <Text style={styles.bodyText}> IUV: {clima.previsao[0].iuv}
                       Máxima: {clima.previsao[0].maxima} °C 
                       Mínima: {clima.previsao[0].minima} °C 
                    </Text>
                    <Text style={styles.bodyText}> Tempo: {clima.previsao[0].tempo}</Text>
                  </View>
                </View>

                <Text style={styles.bodyTitle}>{clima.previsao[1].dia} </Text>
                <View style={styles.bodyRow}>
                  <View style={styles.bodyButton}>
                    <Text style={styles.bodyText}> IUV: {clima.previsao[1].iuv}
                       Máxima: {clima.previsao[1].maxima} °C 
                       Mínima: {clima.previsao[1].minima} °C 
                    </Text>
                    <Text style={styles.bodyText}> Tempo: {clima.previsao[1].tempo}</Text>
                  </View>
                </View>



                <Text style={styles.bodyTitle}>{clima.previsao[2].dia} </Text>
                <View style={styles.bodyRow}>
                  <View style={styles.bodyButton}>
                    <Text style={styles.bodyText}> IUV: {clima.previsao[2].iuv}
                       Máxima: {clima.previsao[2].maxima} °C 
                       Mínima: {clima.previsao[2].minima} °C 
                    </Text>
                    <Text style={styles.bodyText}> Tempo: {clima.previsao[2].tempo}</Text>
                  </View>
                </View>

                <Text style={styles.bodyTitle}>{clima.previsao[3].dia} </Text>
                <View style={styles.bodyRow}>
                  <View style={styles.bodyButton}>
                    <Text style={styles.bodyText}> IUV: {clima.previsao[3].iuv}
                       Máxima: {clima.previsao[3].maxima} °C 
                       Mínima: {clima.previsao[3].minima} °C 
                    </Text>
                    <Text style={styles.bodyText}> Tempo: {clima.previsao[3].tempo}</Text>
                  </View>
                </View>


                <Text style={styles.bodyTitle}>{clima.previsao[4].dia} </Text>
                <View style={styles.bodyRow}>
                  <View style={styles.bodyButton}>
                    <Text style={styles.bodyText}> IUV: {clima.previsao[4].iuv}
                       Máxima: {clima.previsao[4].maxima} °C 
                       Mínima: {clima.previsao[4].minima} °C 
                    </Text>
                    <Text style={styles.bodyText}> Tempo: {clima.previsao[4].tempo}</Text>
                  </View>
                </View>


                <Text style={styles.bodyTitle}>{clima.previsao[5].dia} </Text>
                <View style={styles.bodyRow}>
                  <View style={styles.bodyButton}>
                    <Text style={styles.bodyText}> IUV: {clima.previsao[5].iuv}
                       Máxima: {clima.previsao[5].maxima} °C 
                       Mínima: {clima.previsao[5].minima} °C 
                    <Text style={styles.bodyText}> Tempo: {clima.previsao[5].tempo}</Text>
                  </View> 
*/