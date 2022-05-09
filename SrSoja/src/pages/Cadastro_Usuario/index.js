import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Cadastro_Usuario () {
        return (
            <SafeAreaView style={{flex:1}}>
                <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
                    <Text>Tela de Cadastro do Usuário</Text>
                    <TouchableOpacity style={{marginTop:20}} onPress={() => navigation.navigate('Home')}>
                        <Text>Efetuar Cadastro</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }