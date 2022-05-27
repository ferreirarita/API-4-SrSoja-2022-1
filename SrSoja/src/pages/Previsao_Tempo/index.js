import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons' 
import styles from './styles'

export default function Previsao_Tempo () {

    const [currentTemperature,setCurrentTemperature] = useState('25') //currentTemperature = temperatura atual;

        return (
                <View style={styles.container}>

                    <View style={styles.texto}>
                    <TextInput> Pesquise sua Cidade</TextInput>
                    <Text>27/05/2022</Text>
                    </View>
                    

                <View style={styles.icone}>
                    <Feather name="sun" style={{marginTop:50}} size={40} color="orange" /> 
                </View>
                </View>


        );
}