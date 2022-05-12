import React, {useState,useEffect} from 'react';
import MapView,{ Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

//(<Mapa longitude= 0 latitude= 0/>)
export default function Mapa(props) {
const [alfinete,setAlfinete] = useState ({longitude: -45, latitude: -23});
const [origin,setOrigin]=useState(null);


useEffect(()=>{
    (async function(){
        const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
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
},);

return( 
  <MapView
          style={{flex:1}}
          initialRegion={origin}
          showsUserLocation={true}
          zoomEnabled={true}
          loadingEnabled={true}
          onPress={e => {
            setAlfinete(e.nativeEvent.coordinate)
            props.route.params.setCoord(e.nativeEvent.coordinate)
          }}
          onRegionChangeComplete={(region) => {
            setAlfinete(region);
            props.route.params.setCoord({latitude:region.latitude, longitude:region.longitude})
          }}
  >
    <Marker coordinate={alfinete} />
  </MapView>
)}