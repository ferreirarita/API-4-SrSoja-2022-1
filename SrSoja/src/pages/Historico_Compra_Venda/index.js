import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';


const Compra = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
                <Text>Tela de Histórico de Compra</Text>
                <TouchableOpacity style={{marginTop:20}} onPress={() => navigation.navigate('Home')}>
                    <Text>Visualizar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const Venda = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
                <Text>Tela de Histórico de Venda</Text>
                <TouchableOpacity style={{marginTop:20}} onPress={() => navigation.navigate('Home')}>
                    <Text>Visualizar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
export { Compra, Venda }