import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';

export default props => {
    <View style={styles.container}>
        <Text style={styles.text}>Tela Login</Text>
        <Button title='Efetuar Login' onPress={() => props.navigation.navigate('Home')} />
    </View>
}