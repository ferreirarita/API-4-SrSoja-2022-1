import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//pages
import Home from '../Home';
import CotacaoSoja from '../Cotacao_soja';
import Rel_prod from '../Relatorio_produtividade';

const Stack = createNativeStackNavigator();

export default function Home_Dash() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen nome="Home" component={Home} />
                <Stack.Screen nome="CotacaoSoja" component={CotacaoSoja} />
                <Stack.Screen nome="Rel_prod" component={Rel_prod} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}