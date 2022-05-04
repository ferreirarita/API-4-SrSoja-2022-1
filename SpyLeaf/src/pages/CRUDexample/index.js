import React, { useCallback, useEffect, useState } from 'react'
import { View, Image, Text, TextInput } from 'react-native'
import style from './styles'

import CheckButton from '../../components/Button'
import stylesVar from '../../components/StyleSheetVars'

import config from '../../services/database/config'
import { createConnection } from 'typeorm'

export default function CRUDexample() {
    const [teste, setTeste] = useState('z')
    const [ text , setText ] = useState('oi')

    console.log(text + ' | ' + teste)
    
    const connect = useCallback(async () => {
        console.log('começando')
        try {
            
            const connection = await createConnection(config)
            
            await connection.getRepository('Produtor').save({
                prd_nome: 'Robson',
                prd_email: 'robson@email.com',
                prd_senha: '123456'
            })
            
        }
        catch (error) {
            console.log('chegou um erro: ' + error)
        }
        finally {
            console.log('finished')
        }
    })

    useEffect(() => {
        connect()
    },[])

    return (
        <View>
            <Text>{teste}</Text>
            <Text>{text}</Text>
            <View style={style.row}>
                <CheckButton
                    onPress={() => setText('C')}
                    fill={stylesVar.color.black}
                    color={stylesVar.color.green}
                    size={stylesVar.iconTiny}
                    buttonStyle={style.button}
                    legend={'C'}
                />

                <CheckButton
                    onPress={() => setText('R')}
                    fill={stylesVar.color.black}
                    color={stylesVar.color.orange}
                    size={stylesVar.iconTiny}
                    buttonStyle={style.button}
                    legend={'R'}
                />

                <CheckButton
                    onPress={() => setText('U')}
                    fill={stylesVar.color.black}
                    color={stylesVar.color.white}
                    size={stylesVar.iconTiny}
                    buttonStyle={style.button}
                    legend={'U'}
                />

                <CheckButton
                    onPress={() => setText('D')}
                    fill={stylesVar.color.black}
                    color={stylesVar.color.red}
                    size={stylesVar.iconTiny}
                    buttonStyle={style.button}
                    legend={'D'}
                />
            </View>
        </View>
    )
}