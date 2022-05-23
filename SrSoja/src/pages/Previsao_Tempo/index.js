import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';


export default function Previsao_Tempo () {
        return (
            <SafeAreaView style={{flex:1}}>
                <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
                    <Text>Tela Previsão do Tempo</Text>
                    <TouchableOpacity style={{marginTop:20}} onPress={() => navigation.navigate('Logout')}>
                        <Text>Obrigado senhor(a), até a próxima.</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }