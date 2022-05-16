import React, { useEffect, useContext } from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Context from '../../components/Context'
import { addProdutor } from '../../services/database/controllers/Produtor'

import styles from './styles';

const App_Open = () => {
  const navigation = useNavigation();
    setTimeout(() =>{
    navigation.navigate('HomeDrawer')
  }, 500)
  useEffect(()=>{
   try{
    const { database, dataResult, setResult } = useContext(Context)
    addProdutor(database,{prd_nome:'Guguinha', prd_email:'guguinha@email.com',prd_senha:'guguinha'}, setResult)
    }catch(e){console.log(e)}
  }, []
  ) 
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