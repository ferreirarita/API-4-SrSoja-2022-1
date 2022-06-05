import React, { useState, useEffect } from "react";
import { Alert, View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import styles from "./styles";
import { CheckButton, CancelButton } from "../../components/Button";

//(<Mapa longitude= 0 latitude= 0/>)
export default function Mapa({ navigation, route }) {
  const [alfinete, setAlfinete] = useState({longitude: -45, latitude: -23});
  const [origin, setOrigin] = useState(null);

  // const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);

  const [ coordHeaders, setCoordHeaders ] = useState({});
  const [coord, setCoord] = useState({});

  const [name, setName] = useState("");
  const [namePage,setNamePage] = useState("");

  useEffect(() => {
    // CheckIfLocationEnabled();
    GetCurrentLocation();
  }, []);
/* 
  useEffect(()=>{
    const setHeader = async () => {
      
    }
    if(coord !== {})
      setHeader()
  },[coord]) */

  /* const CheckIfLocationEnabled = async () => {
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
  }; */

  // console.log(coordHeaders)

  const GetCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permissão negada",
        "Por favor, permita que a localização seja utilizada para continuar",
        [{ text: "Ok" }],
        // { cancelable: false }
      );
    }
    let { coords } = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
    });

    if (coords) {
      const { latitude, longitude } = coords;
      
      // console.log('response do mapa:',response)
      setOrigin({
        latitude: coords.latitude,
        longitude: coords.longitude,
        latitudeDelta: 0.00922,
        longitudeDelta: 0.00421,
      });

      /* let response = await Location.reverseGeocodeAsync({
        latitude: coord.latitude ?? latitude,
        longitude: coord.longitude ?? longitude,
      });
  
      setCoordHeaders({
        region: response[0].region,
        subregion: response[0].subregion,
        street: response[0].street,
        district: response[0].district
      }) */
    }
  };

  useEffect( async ()=>{
    if(coord !== {}){
      let response = await Location.reverseGeocodeAsync({
        latitude: coord.latitude ?? alfinete.latitude,
        longitude: coord.longitude ?? alfinete.longitude,
      });

      setCoordHeaders({
        region: response[0].region,
        subregion: response[0].subregion,
        street: response[0].street,
        district: response[0].district
      }) 
    }
  },[coord])

  // console.log(coordHeaders)


  let nomeRecebido = route.params?.name;

  useEffect(() => {
    if (nomeRecebido === undefined || nomeRecebido === "") {
      // console.log("Você ainda não definiu o nome da fazenda", nomeRecebido);
      setName("Sua Área");
    } else {
      // console.log("recebeu o nome", nomeRecebido);
      setName(nomeRecebido);
    }
  }, [nomeRecebido]);

  let page = route.params?.idPage
  useEffect(()=>{
    if(page === undefined || page === ''){
        // console.log('é a página',page)
        setNamePage(page)
      }else{
        // console.log('nome da página para navegação',page)
        setNamePage(page)
      }
      },[page]
    )

  return (
    <>
      <MapView
        style={styles.container}
        initialRegion={origin}
        showsUserLocation={true}
        zoomEnabled={true}
        loadingEnabled={true}
        mapType="hybrid"
        onPress={(e) => {
          setAlfinete(e.nativeEvent.coordinate);
          setCoord(e.nativeEvent.coordinate);
        }}
        >
        <Marker 
          coordinate={alfinete}
         />
      </MapView>

      <View style={styles.header}>
        <Text style={styles.headerTitle}>{name}</Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.footerRow}>
          <View style={styles.footerRowCenterButtons}>
            <View style={styles.footerButtonCancel}>
              <CancelButton
                size={48}
                onPress={() => {
                  navigation.goBack();
                }}
              />
            </View>
            <View style={styles.footerButtonCheck}>
              <CheckButton
                size={48}
                onPress={() => {
                  navigation.navigate({
                    name: namePage,
                    params: { 
                      coordenadas: namePage === 'Fazenda' ? coordHeaders : coord
                    },
                    merge: true,
                  });
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
}