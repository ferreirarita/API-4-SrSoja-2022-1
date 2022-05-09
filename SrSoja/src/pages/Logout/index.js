import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Logout () {
        return (
            <SafeAreaView style={{flex:1}}>
                <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
                    <Text>Tela Logout da Conta</Text>
                    <TouchableOpacity style={{marginTop:20}} onPress={() => navigation.navigate('Logout')}>
                        <Text>Obrigado senhor(a), até a próxima.</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }