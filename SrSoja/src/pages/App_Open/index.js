import React, { useEffect, useContext } from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Login from '../Login'
import getContext from '../../hooks';

import styles from './styles';

const App_Open = () => {

  const { user } = getContext()
  let token;
  
  const navigation = useNavigation();
  
  
  useEffect(() => {
    if(user?.prd_ids !== undefined) {
      token = user.prd_ids
      console.log('Eu sou um token:',token)
      
      setTimeout(() =>{
        navigation.navigate('HomeDrawer')
      }, 500)
    }

    //console.log('olha o usuário:',user)
    
  }, [user])

  return (
    token !== undefined ?

    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Image source={require('../../assets/Logotype/SrSoja_Logo.png')} style={styles.logotype} />
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>Bem-vindo Sr(a).</Text>
      </View>
    </SafeAreaView>
    :
    <Login />
  )};
  
  export default App_Open;