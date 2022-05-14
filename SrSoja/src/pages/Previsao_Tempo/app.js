//importações
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons'; 
import MainCard from './maincard';
import InfoCard from './infocard';
import * as Location from 'expo-location';
import getCurrentWeather from './consultapi'


export default function App() {


const [darkTheme, setDarkTheme] = useState(true)
const [currentTemperature, setCurrentTemperature] = useState ('20')
const [location, setLocation] = useState ('BR, São José dos Campos')
const [currentHour, setCurrentHour] =useState('09:00')

const [wind, setWind] = useState('20')
const [umidity, setUmidity] = useState('93')
const [temMin, setTemMin] = useState('15')
const [temMax, setTempMax] = useState('22')
const [locationCoords, setLocationCoords] = useState([])

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: darkTheme ? '#232634' : '#f2f2f2',
  alignItems: 'center',

},
temperature:{
  alignItems: 'center',
  flexDirection: 'row',
  marginTop:10,
},
temperatureText:{
  color:darkTheme ?'#e0e0e0' : 'black',
  fontSize: 50, 
},
refreshButton:{
position:'absolute',
margin:30,
alignSelf:'flex-start',
},

cardView:{
  color:darkTheme ? 'black': 'white',
  margin:10,
  flexDirection: 'row',
  alignItems:'center',
},

info:{
  alignItems:'center',
  backgroundColor: darkTheme ? '#393e54' : '#8f8f8f',
  borderRadius:20,
  width:350,
  height:230,
},

infoText:{
  color: darkTheme ? '#e0e0e0' : 'white',
  margin:15,
  fontSize: 20,
  fontWeight: 'bold',
},

infoCards:{
  flexDirection: 'row',
  flexWrap: 'wrap',
},

themeButton:{
  margin:10,
  marginLeft:300,

  justifyContent:'center',
  width:50,
  height:50,
  borderRadius:25,
},

squareButton:{
  backgroundColor: darkTheme ? '#f2f2f2' : '#8f8f8f',
  justifyContent: 'center',
  borderRadius: 20,
  marginRight: 20,
  width: 50,
  height:25,
},

circleButton:{
  backgroundColor: darkTheme ? '#232634' : '#f2f2f2',
  alignSelf: darkTheme ? 'flex-end' : 'flex-start',
  margin:5,
  width: 20,
  height:20,
  borderRadius: 50,
}

});

async function setCurrentWeather(){

  await getLocation()
 
  let date = new Date()
  setCurrentHour(date.getHours() + ':' + data.getMinutes())
  const data = await getCurrentWeather(locationCoords)
 // [currentTemperature, temperatureMin, temperatureMax, locationName, wind, humidity]
  setCurrentTemperature(convertKelvinInC(data[0]))
  setTemMin(convertKelvinInC(data[1]))
  setTempMax(convertKelvinInC(data[2]))
  setLocation(convertKelvinInC(data[3]))
  setWind(data[4])
  setUmidity(data[5])
}

function convertKelvinInC(kelvin){
  return parseInt(kelvin - 273)
}

async function getLocation(){
  let {status} = await Location.requestPermissionsAsync()
  if(status !== 'granted'){
    setErrorMsg('Sem permiçao')
  }else{
    let location = await Location.getCurrentPositionAsync({})
    await setLocationCoords(location.coords)


  }
}
useEffect(() => {
 setCurrentWeather()

},[])

return (
  <View style={styles.container}>
    <TouchableOpacity onPress={() => setCurrentWeather()} style={styles.refreshButton}>
    <EvilIcons name="refresh" size={30} color={darkTheme ? 'white' : 'black'} />
    </TouchableOpacity>

    <Feather name="sun"  style={{marginTop: 55}}size={40} color="orange" />
    <View style={styles.temperature}>
      <Text style={styles.temperatureText}>{currentTemperature}</Text>
      <Text style={[styles.temperatureText, {fontSize: 14}]}>°C</Text>
    </View>

    <Text style={[styles.temperatureText, {fontSize: 14}]}>{location}, {currentHour}</Text>

   <View style={styles.cardView}>
     <MainCard title={'Manhã'} backgroundColor = {darkTheme ? '#ff873d' : '#cc6e30'} temperature={'20°'}icon={'morning'}></MainCard>
     <MainCard title={'Tarde'} backgroundColor = {darkTheme ? '#D29600' : '#FCC63F'} temperature={'19°'}icon={'afternoon'}></MainCard>
     <MainCard title={'Noite'} backgroundColor = {darkTheme ? '#008081' : '#38B7B8'} temperature={'17°'}icon={'night'}></MainCard>
   </View>

   <View style={styles.info}>
     <Text style={styles.infoText}> Informações Adicionais </Text>
     <View style={styles.infoCards}>
       <InfoCard title={'Vento'} value={wind + 'm/h' }></InfoCard>
       <InfoCard title={'Umidade'} value={umidity + '%'}></InfoCard>
       <InfoCard title={'Temp. Min'} value={temMin}></InfoCard>
       <InfoCard title={'Temp. Max'} value={temMax}></InfoCard>

     </View>
   </View>
  
  <View style={styles.themeButton}>
    <View style={styles.squareButton}>
      <TouchableOpacity style={styles.circleButton} onPress={ () => darkTheme ? setDarkTheme(false) : setDarkTheme(true)}></TouchableOpacity>
    </View>
  </View>

 </View>
);
}


//1:06:45 minuto




