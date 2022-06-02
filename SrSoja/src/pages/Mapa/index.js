import React, { useState, useEffect } from 'react';
import { View } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import { CheckButton, CancelButton } from '../../components/Button'

//(<Mapa longitude= 0 latitude= 0/>)
export default function Mapa(props) {
const navigation = useNavigation();
const [ alfinete, setAlfinete] = useState({longitude: -45, latitude: -23})
const [ origin, setOrigin] = useState(null)


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
});

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
 */          setAlfinete(e.nativeEvent.coordinate)
          navigation.navigate('Fazenda', {coord:[e.nativeEvent.coordinate]})
/*           props.route.params.teste(e.nativeEvent.coordinate)
 */        }}
        
  >
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
