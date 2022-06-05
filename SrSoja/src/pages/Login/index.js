import React, { useState, useEffect } from 'react'
import { Text, Image, TextInput, View, TouchableOpacity, ScrollView, Alert } from 'react-native'
import styles from './styles'
import ArrowRight from '../../assets/Icons/arrow-right'
import LoadingScreen from '../../components/LoadingScreen'

import { useNavigation } from '@react-navigation/native'

import getContext from '../../hooks'

export default function Login() {
  const navigation = useNavigation()
  const [mail, setMail] = useState('');
  const [senha, setSenha] = useState('');

  const { logIn, user } = getContext()

  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    if(user?.error)
      Alert.alert(user.error)
    else if(user?.prd_id !== undefined) {
      navigation.navigate('HomeDrawer')
    }
  }, [user])


  return (
    !loading ?
    <ScrollView style={styles.container}>
      <View style={styles.scroll}>
        <View style={styles.header}>
          <Image source={require('../../assets/Logotype/SrSoja_Body.png')} style={styles.headerLogoBody} />
          <Image source={require('../../assets/Logotype/SrSoja_Name.png')} style={styles.headerLogoText} />
        </View>
        <Text style={styles.headerTitle}>Fazer Login</Text>

        <View style={styles.body}>
          
          <Text style={styles.bodyTitle}>E-mail</Text>
          <TextInput
            style={styles.bodyInput}
            onChangeText={setMail}
            value={mail}
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect={false}
            keyboardType="email-address"
            placeholder="exemplo@hotmail.com"
          />

          <Text style={styles.bodyTitle}>Senha</Text>
          <TextInput
            style={styles.bodyInput}
            placeholder="Informar senha"
            onChangeText={setSenha}
            value={senha}
            secureTextEntry={true}
          />

        </View>

        <View style={styles.bodyButtons}>
          <TouchableOpacity 
            style={styles.bodyButtonRegister} 
            onPress={()=> navigation.navigate('LogUp')}

          >
            <Text style={styles.bodyTextButton}>Registrar-se</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.bodyButtonLogin} 
            onPress={() => {
              setLoading(true)
              logIn(mail, senha)
              .finally(() => setLoading(false))
            }}
          >
            <Text style={styles.bodyTextButton}>Login</Text>
            <ArrowRight size="25" fill='#F7BB26' />
          </TouchableOpacity>
        </View>
      </View>

      
      
    </ScrollView>
    :
    <LoadingScreen />
  )

  /*
  return (
    <ScrollView>
      <View style={styles.scroll}>
        <Image 
          source={require('../../assets/Logotype/SrSoja_Logo.png')} 
          style={styles.logotype}
        />
        <View style={styles.body}>
          <Text style={styles.bodyTitle}>E-mail</Text>
          <TextInput
            style={styles.bodyInput}
            onChangeText={setMail}
            value={mail}
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect={false}
            keyboardType="email-address"
            placeholder="exemplo@hotmail.com"
          />
          <Text style={styles.bodyTitle}>Senha</Text>
          <TextInput
            style={styles.bodyInput}
            onChangeText={setSenha}
            value={senha}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.bodyButton}>
          <TouchableOpacity style={styles.bodyButton1} onPress={()=>console.log('Cadastro')/*props.navigation.navigate("Register")/}>
            <Text style={styles.bodyText}>Registrar-se</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bodyButton2} onPress={() => console.log('Eu enviei algo')}>
            <Text style={styles.bodyText}>Login</Text>
            <ArrowRight size="25" fill='#F7BB26'/>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
  */
}

/*import React, {useState, useEffect, useContext} from 'react';
import { Text, Image, TextInput, View, TouchableOpacity, SafeAreaView, ScrollView, Alert } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import Contexto from '../../components/Context';
import config from '../../services/database/config';
import FlechaIcon   from '../../assets/Icons/arrow-right'
export default function Login(props){
  const [mail, setMail] = useState('');
  const [senha, setSenha] = useState('');
  const {token, setToken} = useContext(Contexto);
  useEffect( () => {
    if( token === null ){
      SecureStore.getItemAsync(config.STORE_KEY)
      .then( obj => {
        obj = JSON.parse(obj);
        if( obj && obj.token )
          setToken(obj);
          props.navigation?.navigate('Home');
      });
    }
  }, []);
  const enviar = function(){
    if( mail === "" )
      Alert.alert("Forneça o seu e-mail");
    else{
      fetch(`${config.URL}/usuario/login`,{
        method: 'POST',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({mail,senha}) 
      })
      .then((response) => response.json())
      .then(async (obj) => {
        if( obj.error ){
          Alert.alert(obj.error);
        }
        else if( obj && obj.token ){
          await SecureStore.setItemAsync(config.STORE_KEY, JSON.stringify(obj))
          .then( () => {
            setToken(obj);
            props.navigation?.navigate("Home");
          });
        }
        else{
          Alert.alert("Problemas ao efetuar o login");
        }
      });
    }
  }, [user])


  return (
    !loading ?
    <ScrollView style={style.container}>
      <View style={style.scroll}>

      <Text>Login</Text>

      <View style={style.body}>

          <Text style={style.bodyTitle}>E-mail</Text>

          <TextInput
            style={style.bodyInput}
            onChangeText={setMail}
            value={mail}
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect={false}
            keyboardType="email-address"
            placeholder="exemplo@hotmail.com"
          />

          <Text style={style.bodyTitle}>Senha</Text>
          <TextInput
            style={style.bodyInput}
            onChangeText={setSenha}
            value={senha}
            secureTextEntry={true}
          />

        </View>

        <View style={style.bodyButton}>

          <TouchableOpacity 
            style={style.bodyButton1} 
            onPress={()=>{
              setUser({})
              navigation.navigate('Logup')
            }}
          >
            <Text style={style.bodyText}>Cadastrar</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={style.bodyButton2} 
            onPress={() => {
              setLoading(true)
              logIn(mail, senha)
              .finally(() => setLoading(false))
            }}
          >
            <Text style={style.bodyText}>Login</Text>
            <ArrowRight size="25" fill='#F7BB26'/>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}*/
