import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Login () {
        return (
            <SafeAreaView style={{flex:1}}>
                <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
                    <Text>Tela de Login da Conta</Text>
                    <TouchableOpacity style={{marginTop:20}} onPress={() => navigation.navigate('Login')}>
                        <Text>Efetuar Login</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }