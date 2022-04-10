import { useState } from 'react'
import { View, Image, Text, TextInput } from 'react-native'

import CheckButton from '../../Components/Button'


import stylesVar from '../../Components/StyleSheetVars'


export default function CRUDexample() {
    const [ text , setText ] = useState('Hi')
    return (
        <View>
            <Text>{text}</Text>
            <CheckButton
                onPress={() => setText('By')}
                fill={stylesVar.color.black}
                color={stylesVar.color.green}
                size={stylesVar.icon}
            />
        </View>
    )
}