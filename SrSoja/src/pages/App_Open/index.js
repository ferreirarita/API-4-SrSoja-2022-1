import React, { useEffect, useContext } from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Context from '../../components/Context'
import { addProdutor } from '../../services/database/controllers/Produtor'
import { addSaude, getSaude } from '../../services/database/controllers/Talhao'

import styles from './styles';

const App_Open = () => {
  const navigation = useNavigation();
    setTimeout(() =>{
    navigation.navigate('HomeDrawer')
  }, 500)
  const { database, dataResult, setResult } = useContext(Context)
  useEffect(()=>{
    try{
     //addSaude(database,{tsd_nome:'Saudável',tsd_descr:'quebra-galho'}, setResult)
     //getSaude(database,{tsd_id:1}, setResult)
    }catch(e){console.log(e)}
  }, [])  

  /*
  useEffect(()=>{
  if(dataResult !== null)console.log(dataResult)
  },[dataResult]
  )*/
    
  useEffect(()=>{
    try{
      //addProdutor(database,{prd_nome:'Guguinha', prd_email:'guguinha@email.com',prd_senha:'guguinha'}, setResult)
    }catch(e){console.log(e)}
  }, [])   
  
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