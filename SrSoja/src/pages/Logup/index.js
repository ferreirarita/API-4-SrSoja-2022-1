import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, ScrollView, TextInput, Image, Alert } from 'react-native'
import styles from './styles'
import LoadingScreen from '../../components/LoadingScreen'

import { useNavigation } from '@react-navigation/native'
import getContext from '../../hooks'


export default function Logup() {
    const navigation = useNavigation()
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ pass, setPass ] = useState('')
    const [ passConfirm, setPassConfirm ] = useState('')

    const { logUp, user, setUser } = getContext()
    const [ loading, setLoading ] = useState(false)

    /*useEffect(()=>{
        if(user?.error)
            Alert.alert(user.error)
        else if(user?.prd_id !== undefined){
            //console.log(user)
            //setUser({})
            navigation.navigate('HomeDrawer')
        }
        //console.log(user)
    },[user])*/

    return (
        !loading ?
        <ScrollView style={styles.container}>
            <View style={styles.body}>

                <View style={styles.header}>
                    <Image source={require('../../assets/Logotype/SrSoja_Body.png')} style={styles.headerLogoBody} />
                    <Image source={require('../../assets/Logotype/SrSoja_Name.png')} style={styles.headerLogoText} />
                </View>

                <Text style={styles.title}>
                    Cadastro
                </Text>

                <View style={styles.viewInput}>

                    <View>
                        <Text style={styles.titleInput}>
                            Nome
                        </Text>

                        <TextInput
                            style={styles.input}
                            onChangeText={setName}
                            value={name}
                            keyboardType="default"
                            placeholder="Informe um Nome"
                        />
                    </View>
                    
                    <View>
                        <Text style={styles.titleInput}>
                            E-mail
                        </Text>

                        <TextInput
                            style={styles.input}
                            onChangeText={setEmail}
                            value={email}
                            keyboardType="email-address"
                            placeholder="exemplo@email.com"
                        />
                    </View>

                    <View>
                        <Text style={styles.titleInput}>
                            Senha
                        </Text>

                        <TextInput
                            style={styles.input}
                            onChangeText={setPass}
                            value={pass}
                            keyboardType="default"
                            placeholder="Informe uma Senha"
                            secureTextEntry={true}
                        />
                    </View>

                    <View>
                        <Text style={styles.titleInput}>
                            Confirmar Senha
                        </Text>

                        <TextInput
                            style={styles.input}
                            onChangeText={setPassConfirm}
                            value={passConfirm}
                            keyboardType="default"
                            placeholder="Confirme a Senha"
                            secureTextEntry={true}
                        />
                    </View>

                </View>

                <View style={styles.viewButton}>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={()=>{
                            setLoading(true)
                            logUp(name,email,pass,passConfirm)
                            .finally(()=>setLoading(false))
                        }}
                    >
                        <Text style={styles.textButton}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
        :
        <LoadingScreen/>
    )
}