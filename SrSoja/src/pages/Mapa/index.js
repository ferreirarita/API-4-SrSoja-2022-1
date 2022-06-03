import React, { useState, useEffect } from 'react';
import { Alert, View, Text } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import { CheckButton, CancelButton } from '../../components/Button'

//(<Mapa longitude= 0 latitude= 0/>)
export default function Mapa({navigation, route}) {
const [ alfinete, setAlfinete] = useState({longitude: -45, latitude: -23})
const [ origin, setOrigin] = useState(null)

const [locationServiceEnabled, setLocationServiceEnabled] = useState(false)
const [coord,setCoord]=useState('Buscando localização')
const [getCoord,setGetCoord]=useState({})


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

return(
  <>
  <MapView
        style={styles.container}
        initialRegion={origin}
        showsUserLocation={true}
        zoomEnabled={true}
        loadingEnabled={true}
        mapType="hybrid"
        onPress={e => {
/*           console.log(JSON.stringify(e.nativeEvent.coordinate))
 */ 
        setAlfinete(e.nativeEvent.coordinate)
        setGetCoord(e.nativeEvent.coordinate)
          //navigation.navigate('Fazenda', {item: coordinate})

        }}>
 
    <Marker coordinate={alfinete}  />
  </MapView>


  <View style={styles.footer}>
    <View style={styles.footerRow}>
      <View style={styles.footerColumn}>
        <CancelButton size={48} 
        onPress={() => {
          navigation.goBack()
        }}
        />
      </View>

      <View style={styles.footerColumn}>
        <CheckButton size={48}
        onPress={()=>{
              navigation.navigate({
                name: 'Fazenda',
                params: {coordenadas: getCoord},
                merge:true
              })
          }
        }
        />
      </View>
    </View>
  </View>
</>
)}



/* 


useEffect(()=>{
    (async function(){
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status === 'granted') {
            let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
            setOrigin({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.00922,
                longitudeDelta: 0.00421
            })
        } else {
            throw new Error('Location permission not granted');
        }
    })();
}); */

/*

return(
  <>
  <MapView
        style={styles.container}
        initialRegion={origin}
        showsUserLocation={true}
        zoomEnabled={true}
        loadingEnabled={true}
        mapType="hybrid"
        onPress={e => {
/*           console.log(JSON.stringify(e.nativeEvent.coordinate))
 */ /*         
setAlfinete(e.nativeEvent.coordinate)
            let coord= e.nativeEvent.coordinate
              setCoord(coord)
          navigation.navigate('Fazenda', {coord})
            console.log('o tal do alfinete?', coord)*/
/*           props.route.params.teste(e.nativeEvent.coordinate)
 */      /*  }}>
 *//*
    <Marker coordinate={alfinete}  />
  </MapView>
  <View style={styles.footer}>
    <View style={styles.footerRow}>
      <View style={styles.footerColumn}>
        <CancelButton size={48} 
        onPress={() => {
          navigation.goBack()
        }}
        />
      </View>

      <View style={styles.footerColumn}>
        <CheckButton size={48}
        onPress={()=>{
          navigation.navigate('Fazenda')
        }}
        />
      </View>
    </View>
  </View>
</>
)}
*/          