import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Previsao_Tempo () { 
        return (
            <SafeAreaView style={{flex:1}}>
                <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
                    <Text>Tela de Custos de Previsão</Text>
                    <TouchableOpacity style={{marginTop:20}} onPress={() => navigation.navigate('Previsão')}>
                        <Text>Ver a Previsão</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
