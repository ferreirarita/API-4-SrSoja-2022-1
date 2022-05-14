import React, {useState, useEffect, useContext} from 'react';
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
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View>
          <View style={styles.header}>
            <Image source={require('../../assets/Logotype/SrSoja_Body.png')} />
            <Image source={require('../../assets/Logotype/SrSoja_Name.png')} />
          </View>

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
            <TouchableOpacity style={styles.bodyButton1} onPress={()=>props.navigation.navigate("Register")}>
              <Text style={styles.bodyText}>Registrar-se</Text>
            </TouchableOpacity>
              <TouchableOpacity style={styles.bodyButton2} onPress={enviar}>
                <Text style={styles.bodyText}>Login</Text>
                <FlechaIcon size="25" fill='#F7BB26'/>
              </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}