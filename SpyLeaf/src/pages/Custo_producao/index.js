import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';

export default function Custo_producao ({navigation}){
    return (
    <View style={styles.container}>
        <Text style={styles.text}>Tela Login</Text>
        <Button title='Efetuar Login' onPress={() => navigation.navigate('Home')} />
    </View>
    )
}