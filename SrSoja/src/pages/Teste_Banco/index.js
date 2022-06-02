import React, { useContext, useEffect, useState } from 'react'
import { View, Image, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import style from './styles'

import { AddButton, NextButton, CheckButton, CancelButton } from '../../components/Button'
import LoadingScreen from '../../components/LoadingScreen'

/**Para acessar o banco, tem de importar o Context e as funções desejadas*/
//import Context from '../../context'
import getContext from '../../hooks'
import { addProdutor, getProdutor, delProdutor } from '../../services/database/controllers/Produtor'


export default function Teste_Banco() {
    const [ prd_id, setId ] = useState()
    const [ prd_nome, setNome ] = useState()
    const [ prd_email, setEmail ] = useState('')
    const [ prd_senha, setSenha ] = useState('')
    
    const [ text , setText ] = useState('*retorno do banco*')

    const { database, dataResult, setResult, logIn, user } = getContext()

    const [ loading, setLoading ] = useState(false)

    

    /*useEffect( () => {
        console.log(token, typeof token)

    }, [token])*/

    //useEffect(() => console.log('dataResult atualizou:',dataResult,typeof dataResult),[dataResult])

    /*useEffect(() => {
        try {
            getProdutor(
                database,
                {
                    prd_id: 0
                },
                setResult
            )
        }
        catch (error) {
            console.log(error)
        }
    },[])*/

    /**Necessário caso houver alguma edição com os dados obtidos do banco */
    /*
    useEffect(() => {
        /*
        if(dataResult !== null) {
            if(dataResult.map == [].map)
                setText(JSON.stringify(dataResult[dataResult.length - 1]))
            else
                setText(dataResult)
            
        }
        /
    },[dataResult])
    */

    useEffect(()=>{
        console.log(dataResult)
    },[dataResult])

    useEffect(() => {
        if(user?.error)
            Alert.alert(user.error)
    }, [user])
    
    return (
        !loading ?
        <View>
            <Text style={style.textT}>{text}</Text>

            <View style={style.colunm}>
                <TextInput 
                    style={style.textInput}
                    onChangeText={setId}
                    placeholder="id"
                    keyboardType="default"
                />
                
                <TextInput 
                    style={style.textInput}
                    onChangeText={setNome}
                    placeholder="nome"
                    keyboardType="default"
                />
                
                <TextInput 
                    style={style.textInput}
                    onChangeText={setEmail}
                    placeholder="e-mail"
                    keyboardType="email-address"
                />
                
                <TextInput 
                    style={style.textInput}
                    onChangeText={setSenha}
                    placeholder="senha"
                    keyboardType="default"
                    secureTextEntry={true}
                />


                <View style={style.row}>
                    <AddButton
                        onPress={() => {
                            
                            try {
                                getProdutor(
                                    database,
                                    {
                                        prd_id: 0
                                    },
                                    setResult
                                )
                            } catch (error) {
                                console.log(error)
                            }

                            //console.log('C')
                            /*
                            try {
                                addProdutor(
                                    database,
                                    {
                                        prd_nome,
                                        prd_email,
                                        prd_senha
                                    },
                                    setResult
                                )
                            } catch (error) {
                                console.log(error)
                            }
                            */
                        }}
                        size='64'
                        buttonStyle={style.button}
                        legend={'C'}
                    />

                    <NextButton
                        onPress={() => {
                            // console.log('R')
                            /**/
                            try {
                                getProdutor(
                                    database,
                                    {
                                        prd_id: 0
                                    },
                                    setResult
                                )
                            } catch (error) {
                                console.log(error)
                            }
                            /**/
                        }}
                        size='64'
                        buttonStyle={style.button}
                        legend={'R'}
                    />

                    <CheckButton
                        onPress={() => {
                            console.log('U')
                            /*
                            try {
                                addProdutor(
                                    database,
                                    {
                                        prd_id,
                                        prd_nome,
                                        prd_email,
                                        prd_senha
                                    },
                                    setResult
                                )
                            } catch (error) {
                                console.log(error)
                            }
                            */
                        }}
                        size='64'
                        buttonStyle={style.button}
                        legend={'U'}
                    />

                    <CancelButton
                        onPress={() => {
                            console.log('D')
                            /*
                            try {
                                delProdutor(
                                    database,
                                    {
                                        prd_id:"yt"
                                    },
                                    setResult
                                )
                            } catch (error) {
                                console.log(error)
                            }
                            */
                        }}
                        size='64'
                        buttonStyle={style.button}
                        legend={'D'}
                    />
                </View>
            </View>
        </View>
        :
        <LoadingScreen />
    )

    
}