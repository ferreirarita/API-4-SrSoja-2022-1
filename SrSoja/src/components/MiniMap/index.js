import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location'

//(<Mapa longitude= 0 latitude= 0/>)
export default function Mapa({navigation, route}) {
const [ alfinete, setAlfinete] = useState({longitude: -45, latitude: -23})
const [ origin, setOrigin] = useState(null)

const [locationServiceEnabled, setLocationServiceEnabled] = useState(false)
const [coord,setCoord]=useState('Buscando localização')
const [getCoord,setGetCoord]=useState({})
const [nome,setNome]=useState('')
const [miniMap,setMiniMap]=useState(false)

useEffect(()=>{
  CheckIfLocationEnabled()
  GetCurrentLocation()
}, [])

const CheckIfLocationEnabled = async () => {
  let enabled = await Location.hasServicesEnabledAsync()

  if (!enabled) {
    Alert.alert(
      'A Localização está desativada',
      'Por favor, ative a para continuar',
      [{ text: 'Ok' }],
      {cancelable: false }
    )
  } else {
    setLocationServiceEnabled(enabled)
  }
}

const GetCurrentLocation = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();

  if (status !== 'granted') {
    Alert.alert(
      'Permissão negada',
      'Por favor, permita que a localização seja utilizada para continuar',
      [{ text: 'Ok' }],
      {cancelable: false }
    )
  }
  let { coords } = await Location.getCurrentPositionAsync({enableHighAccuracy: true});

  if (coords) {
    const { latitude, longitude} = coords
    let response = await Location.reverseGeocodeAsync({
      latitude, longitude
    })
    setOrigin({
      latitude: coords.latitude,
      longitude: coords.longitude,
      latitudeDelta: 0.00922,
      longitudeDelta: 0.00421
  })

    for (let item of response){
      let coordinate = {
       postalCode: item.postalCode,
       street:  item.street,
       district:   item.district,
       region:    item.region
      }
    
      setCoord(coordinate)
    }
  }

}
let nomeRecebido = route.params?.nome

useEffect(() => {
  if(nomeRecebido === undefined || nomeRecebido === ''){
    console.log('Você ainda não definiu o nome da fazenda',nomeRecebido)
    setNome('Sua Área')
  }else{
    console.log('recebeu a coordenada',nomeRecebido)
    setNome(nomeRecebido)
  }
  },[nomeRecebido]
)

let isMiniMap = route.params?.miniMap

useEffect(()=>{
    if(isMiniMap === undefined || isMiniMap === ''){
        console.log('é isMiniMap',isMiniMap)
        setMiniMap(true)
      }else{
        console.log('recebeu a coordenada',isMiniMap)
        setMiniMap(true)
      }
      },[isMiniMap]
    )

return(
  <>
    <MapView
      style={{flex: 0.4,margin:40,}}
      initialRegion={origin}
      showsUserLocation={true}
      zoomEnabled={false}
      loadingEnabled={true}
      mapType="hybrid"
    >

  <Marker coordinate={alfinete}
    title={nome} 
    />
  </MapView>

</>
)} 