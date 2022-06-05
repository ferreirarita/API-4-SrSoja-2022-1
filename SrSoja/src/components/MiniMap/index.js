import React, { useState, useEffect } from "react";
import { Text } from 'react-native'
import getContext from '../../hooks'
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import styles from "./styles";

export default function MiniMap({navigation,coordMiniMap}){
 
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
    setAlfinete({ 
      latitude: coordMiniMap.latitude,
      longitude: coordMiniMap.longitude
    })
  }
}
  return(
    <>
    <MapView style={styles.container}
      initialRegion={origin}
      zoomEnabled={true}
      showsUserLocation={true}
      loadingEnabled={true}
      mapType="hybrid"
      >
    <Marker 
      coordinate={alfinete}
      />
  </MapView>
  <Text>{coordMiniMap.longitude}</Text>
  </>
  )
}