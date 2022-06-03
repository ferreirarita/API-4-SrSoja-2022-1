<<<<<<< HEAD
import { View,Text,Image } from 'react-native';
import getXMLResponse from '../../components/XMLResponse';
import styles from '../Home/styles';
import { parse } from 'fast-xml-parser';
=======


 import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import {useState, useEffect} from 'react'
import * as Location from 'expo-location'
import { EvilIcons } from '@expo/vector-icons' 
import styles from './styles'

import InfoCard from '../../components/InfoCard'
import MainCard from "../../components/MainCard"

/* useEffect(() => {
  let time = getCurrentTime();
  setTime(time);
}, []); */

export default function Teste (){
  return(
    <Text style={{alignItems:'center',justifyContent:'center'}}>Teste</Text>
  )
}
/* 
const getCurrentTime = () => {
  let today = new Date();
  let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
  let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
  let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
  return hours + ':' + minutes + ':' + seconds;
}

async function getCurrentWeather(locationCoords){

  const axios = require('axios')

  const lat = locationCoords.latitude
  
  const log = locationCoords.longitude

  var results = []

  await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=40a5f7559101e8312445dfae9a9b0db1`)
      .then(function (response){

          const data = response.data     
          const locationName = (data.sys.country + ', ' + ' ' + data.name)
          const temperatureMin = data.main.temp_min
          const temperatureMax = data.main.temp_max
          const wind = data.wind.speed
          const humidity = data.main.humidity
          const currentTemperature = data.main.temp
          
          results = [currentTemperature, temperatureMin, temperatureMax, locationName, wind, humidity]          
      })
      .catch(function (error) {
          console.log(error)
      })

  return results
}

export default function App() {

  const axios = require('axios')
  
  const [currentTemperature, setCurrentTemperature] = useState('31')

  const [locationCoords, setLocationCoords] = useState(null);

  const [locationName, setLocationName] = useState('Brasil, Fortaleza')
  
  const [temperatureMin, setTemperatureMin] = useState('21')
  const [temperatureMax, setTemperatureMax] = useState('32')
  const [wind, setWind] = useState('7')
  const [humidity, setHumidity] = useState('68')

//aqui estava o cons styles, removi ele e coloquei no styles.js

  async function getLocation(){
    let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
      }else{
        let location = await Location.getCurrentPositionAsync({})
        await setLocationCoords(location.coords)
      }
  }

  async function setCurrentWeather(){
    await getLocation()
    const data = await getCurrentWeather(locationCoords)
>>>>>>> 55d982a3cd195c482f2186d6cb9158e287d1b242




   

    const [tempo,settempo] = useState({})
    const lat = -22.90;
    const log = -47.06;
        useEffect (() => {

            fetch(`http://servicos.cptec.inpe.br/XML/cidade/7dias/${lat}/${log}/previsaoLatLon.xml`)

            .then((response) => response.text())

            .then((textResponse) => {

                let obj = parse(textResponse);
                let cidade = obj.cidade.nome;
                let previsao = [...obj.cidade.previsao]
                settempo({nome: cidade,previsao: previsao});
            })

            .catch((error) => {

                console.log(error);

            });
    },[]);


const Previsao_Tempo = () => {

    console.log("Sera?");
    console.log(tempo);
    console.log("AEW");
    return (
        
            <View style={styles.container}>
                <View style={styles.body}>
                    <Text style={styles.bodyTitle}>"Pegar do XMLResponse"</Text>

                    <View style={styles.bodyRow}>
                        <View style={styles.bodyButton}>
                            <Text style={styles.bodyText}>ºC</Text>
                        </View>
                    </View>

                    <Text style={styles.bodyTitle}>XMLResponse </Text>

                    <View style={styles.bodyRow}>
                        <View style={styles.bodyButton}>
                            <Text style={styles.bodyText}>ºC</Text>
                        </View>
                    </View>

                    <Text style={styles.bodyTitle}>XMLResponse </Text>

                    <View style={styles.bodyRow}>
                        <View style={styles.bodyButton}>
                            <Text style={styles.bodyText}>ºC</Text>
                        </View>
                    </View>

                    <Text style={styles.bodyTitle}>XMLResponse </Text>

                    <View style={styles.bodyRow}>
                        <View style={styles.bodyButton}>
                            <Text style={styles.bodyText}>ºC</Text>
                        </View>
                    </View>

                    <Text style={styles.bodyTitle}>XMLResponse </Text>

                    <View style={styles.bodyRow}>
                        <View style={styles.bodyButton}>
                            <Text style={styles.bodyText}>ºC</Text>
                        </View>
                    </View>

                    <Text style={styles.bodyTitle}>XMLResponse </Text>


                    <View style={styles.bodyRow}>
                        <View style={styles.bodyButton}>
                            <Text style={styles.bodyText}>ºC</Text>
                        </View>
                    </View>
                </View>
            </View>
        
<<<<<<< HEAD
    );
}
export default Previsao_Tempo;
=======
      </View>
  ); 
}*/


 
>>>>>>> 55d982a3cd195c482f2186d6cb9158e287d1b242
