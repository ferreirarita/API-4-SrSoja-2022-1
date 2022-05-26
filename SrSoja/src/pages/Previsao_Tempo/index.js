import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons' 
import styles from './styles'


export default function Previsao_Tempo () {

    const [currentTemperature,setCurrentTemperature] = useState('25') //currentTemperature = temperatura atual;

        return (
                <View style={styles.container}>
                <Feather name="sun" style={{marginTop:50}} size={40} color="black" /> 
                <View>
                    <Text style={styles.temperature}></Text>
                    <TextInput style={styles.texto}></TextInput>
                </View>
                </View>


        );
}