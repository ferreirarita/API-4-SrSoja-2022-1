import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';


const Sementes = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
                <Text>Tela de Sementes</Text>
                <TouchableOpacity style={{marginTop:20}} onPress={() => navigation.navigate('Home')}>
                    <Text>Visualizar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const Fertilizantes = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
                <Text>Tela de Fertilizantes</Text>
                <TouchableOpacity style={{marginTop:20}} onPress={() => navigation.navigate('Home')}>
                    <Text>Visualizar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
const Agrotoxicos = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
                <Text>Tela de Agrotóxicos</Text>
                <TouchableOpacity style={{marginTop:20}} onPress={() => navigation.navigate('Cadastros')}>
                    <Text>Visualizar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export {Sementes, Fertilizantes, Agrotoxicos}