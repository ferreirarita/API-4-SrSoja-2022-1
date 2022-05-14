import React from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const App_Open = () => {
  const navigation = useNavigation();
    setTimeout(() =>{
    navigation.navigate('HomeDrawer')
  }, 500) 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Image source={require('../../assets/Logotype/SrSoja_Logo.png')} style={styles.logotype} />
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>Bem-vindo Sr(a).</Text>
      </View>
    </SafeAreaView>
  )};
  
  export default App_Open;