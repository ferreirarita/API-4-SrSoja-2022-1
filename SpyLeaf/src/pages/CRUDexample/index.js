import React, { useState } from 'react'
import { View, Image, Text, TextInput } from 'react-native'
import style from './styles'

import CheckButton from '../../Components/Button'
import stylesVar from '../../Components/StyleSheetVars'

import { 
    addProdutor, getProdutor,
    delProdutor
} from '../../services/database'

function create(){
    
}

export default function CRUDexample() {
    const [ text , setText ] = useState('Hi')
    return (
        <View>
            <Text>{text}</Text>
            <View style={style.row}>
                <CheckButton
                    onPress={() => setText('By')}
                    fill={stylesVar.color.black}
                    color={stylesVar.color.green}
                    size={stylesVar.iconTiny}
                    buttonStyle={style.button}
                    legend={'C'}
                />

                <CheckButton
                    onPress={() => setText('By')}
                    fill={stylesVar.color.black}
                    color={stylesVar.color.orange}
                    size={stylesVar.iconTiny}
                    buttonStyle={style.button}
                    legend={'R'}
                />

                <CheckButton
                    onPress={() => setText('By')}
                    fill={stylesVar.color.black}
                    color={stylesVar.color.white}
                    size={stylesVar.iconTiny}
                    buttonStyle={style.button}
                    legend={'U'}
                />

                <CheckButton
                    onPress={() => setText('By')}
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