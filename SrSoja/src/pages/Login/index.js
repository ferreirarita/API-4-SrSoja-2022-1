import React, { useState, useEffect } from 'react'
import { Text, Image, TextInput, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import style from './styles'
import ArrowRight from '../../assets/Icons/arrow-right';
import LoadingScreen from '../../components/LoadingScreen'

import { useNavigation } from '@react-navigation/native'

import getContext from '../../hooks'

export default function Login() {
  const navigation = useNavigation()
  const [mail, setMail] = useState('');
  const [senha, setSenha] = useState('');

  const { logIn, user, setUser } = getContext()

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
      </View>
    </ScrollView>
    :
    <LoadingScreen />
  )
}