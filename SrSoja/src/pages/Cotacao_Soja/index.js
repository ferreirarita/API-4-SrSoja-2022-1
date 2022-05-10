import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Previsao_Tempo () { 
        return (
            <SafeAreaView style={{flex:1}}>
                <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
                    <Text>Tela de Cotação</Text>
                    <TouchableOpacity style={{marginTop:20}} onPress={() => navigation.navigate('Previsão')}>
                        <Text>Ver cotação</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
