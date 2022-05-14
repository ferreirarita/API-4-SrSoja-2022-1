import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Cotacao_Soja () { 
        return (
            <SafeAreaView style={{flex:1}}>
                <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
                    <Text>Tela de Cotação</Text>
                    <TouchableOpacity style={{marginTop:20}} onPress={() => navigation.navigate('Previsão')}>
                        <Text>Ver a cotação</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
