import React, { useState, useEffect } from 'react';
import { StyleSheet,View, Text, SafeAreaView, TouchableOpacity, Image ,Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as Location from 'expo-location';


const Sementes = ({ navigation }) => {
    const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);
    const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
      'Wait, we are fetching you location...'
    );
  
    useEffect(() => {
        CheckIfLocationEnabled();
        GetCurrentLocation();
      }, []);
 
      const CheckIfLocationEnabled = async () => {
        let enabled = await Location.hasServicesEnabledAsync();
    
        if (!enabled) {
          Alert.alert(
            'Location Service not enabled',
            'Please enable your location services to continue',
            [{ text: 'OK' }],
            { cancelable: false }
          );
        } else {
          setLocationServiceEnabled(enabled);
        }
      };

const GetCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
  
    if (status !== 'granted') {
      Alert.alert(
        'Permission not granted',
        'Allow the app to use location service.',
        [{ text: 'OK' }],
        { cancelable: false }
      );
    }
  
    let { coords } = await Location.getCurrentPositionAsync();
  
    if (coords) {
      const { latitude, longitude } = coords;
      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude
      });
  
      for (let item of response) {
        let address = ` ${item.street},${item.name}, ${item.postalCode}, ${item.city}, ${item.region}, ${item.district}`;
  
        setDisplayCurrentAddress(address);
        if (address.length > 0) {
            setTimeout(() => {
              navigation.navigate('Previsao_Tempo', { item: address });
            }, 2000);
          }
      }
    }
  };  
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>What's your address?</Text>
        </View>
        <Text style={styles.text}>{displayCurrentAddress}</Text>
      </View>
    );
  };
    
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#070707',
      alignItems: 'center',
      justifyContent: 'center'
    }
  });














const Fertilizantes = () => {
    return (
      <View>
          <Text>Teste</Text>
      </View>
    );
  };
  
const Agrotoxicos = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.navigate('Cadastros')}>
                        <Text>HOME</Text>
                    </TouchableOpacity>
                </View>
        </SafeAreaView>
    );
}

export { Sementes, Fertilizantes, Agrotoxicos }