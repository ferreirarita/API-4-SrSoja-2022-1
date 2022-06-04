import React,{ useState, useEffect }  from 'react';
import { Text, View, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import * as Location from 'expo-location'
import { EvilIcons } from '@expo/vector-icons' 
import styles from './styles'

import InfoCard from '../../components/InfoCard'
import MainCard from "../../components/MainCard"



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

  const [time, setTime] = useState(null);

  const getCurrentTime = () => {
    let today = new Date();
    let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
    let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();

    return hours + ':' + minutes;
  }

  const axios = require('axios')
  
  const [currentTemperature, setCurrentTemperature] = useState('30')

  const [locationCoords, setLocationCoords] = useState(null);

  const [locationName, setLocationName] = useState('Brasil, São Paulo')
  
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


    setCurrentTemperature(convertKelvinToC(data[0]))
    setTemperatureMin(convertKelvinToC(data[1]))
    setTemperatureMax(convertKelvinToC(data[2]))
    setLocationName(data[3])
    setWind(data[4])
    setHumidity(data[5])
    
  }

  function convertKelvinToC(kelvin){
    return parseInt(kelvin - 273)
  }

  useEffect(() => {
    setCurrentWeather()
  }, [])
  
  useEffect(() => {
    let time = getCurrentTime();
    setTime(time);
  }, []);

  return (
      <View style={styles.container}>
      
        <TouchableOpacity style={styles.refreshButton} onPress={() => setCurrentWeather()}>
          <EvilIcons name="refresh" color={'black'} size={24}/>
        </TouchableOpacity>

        <Feather style={{marginTop: 30}} name="sun" size={40} color="orange" />

        <View style={styles.temperatureView}>
          <Text style={styles.temperatureText}>{currentTemperature}</Text>
          <Text style={[styles.temperatureText, {fontSize: 14}]}>°C</Text>
        </View>
        
        <Text style={styles.localizationText}>{locationName},{time}</Text> 


        <View style={styles.cardsView}>
          <MainCard title={"Segunda"} icon={'segunda'} temperature={"20°"} backgroundColor={'#CC6E30'} ></MainCard>
          <MainCard title={"Terça"} icon={'terça'} temperature={"26°"} backgroundColor={'#FCC63F'} ></MainCard>
          <MainCard title={"Quarta"} icon={'quarta'} temperature={"19°"} backgroundColor={'#38B7B8'} ></MainCard>
          <MainCard title={"Quinta"} icon={'quinta'} temperature={"22°"} backgroundColor={'#556D23'} ></MainCard>
          <MainCard title={"Sexta"} icon={'sexta'} temperature={"25°"} backgroundColor={'#49A130'} ></MainCard>
        </View>
    
        <View style={styles.info}>
          <Text style={styles.infoText}>Informações adcionais:</Text>
          <View style={styles.addtionalInfo}>
            <InfoCard title={'Vento'} variable={wind} ></InfoCard>
            <InfoCard title={'Umidade'} variable={humidity} ></InfoCard>
            <InfoCard title={'Temp. Min'} variable={temperatureMin} ></InfoCard>
            <InfoCard title={'Temp. Max'} variable={temperatureMax} ></InfoCard>
          </View>
        </View>
        
      </View>
  ); 
}


