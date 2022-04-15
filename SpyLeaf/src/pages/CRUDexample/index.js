import React, { useEffect, useState } from 'react'
import { View, Image, Text, TextInput } from 'react-native'
import style from './styles'

import CheckButton from '../../Components/Button'
import stylesVar from '../../Components/StyleSheetVars'

import axios from 'axios'
const baseUrl = 'https://srsoja-server-db.herokuapp.com'
const source = axios.CancelToken.source()


async function getProdutor(prd_id){
    const url = `${baseUrl}/produtor/get?prd_id=${prd_id}`
    return await axios.get(url, { cancelToken: source.token }).then(async (response) => {
        if(response.status === 200) {
            console.log(response.data)
            return response.data
        }
        else {
            console.log(response.error)
            return response.error
        }
    })
}



export default function CRUDexample() {
    const [teste, setTeste] = useState('')
    const url = `${baseUrl}/produtor/get?prd_id=${1}`
    let x = ''
    /*
    useEffect(() => {
        const url = `${baseUrl}/produtor/get?prd_id=${1}`
        const Teste = async () => {
            const response = await axios.get(url, { cancelToken: source.token })
            if(response.status === 200) {
                //console.log(response.data)
                teste = response.data
            }
            else {
                console.log(response.error)
                teste = response.error
            }
            //console.log(teste)
        }

        Teste()
        console.log(teste)
        return () => source.cancel("Foi")
    })
    */
   
   console.log(teste)


    const [ text , setText ] = useState('oi')
    return (
        <View>
            <Text>{text}</Text>
            <View style={style.row}>
                <CheckButton
                    onPress={() => setTeste(getProdutor(1))}
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
            {x = getProdutor(1)}
        </View>
    )
}