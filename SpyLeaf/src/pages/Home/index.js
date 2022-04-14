import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
//import { createAppContainer } from 'react-navigation';
//import { createDrawerNavigator } from 'react-navigation-drawer';

import Cadastro from '../../pages/Cadastro_faz_talhao';
import Cotacao from '../../pages/Cotacao_soja';
import Relatorio from '../../pages/Relatorio_produtividade';
import Custo from '../../pages/Custo_producao';

export default props => {
    <View style={styles.container}>
        <Text style={styles.text}>Tela Home</Text>
    </View>
}








/*const Routes = createAppContainer(
    createDrawerNavigator({
        
        Cadastro,
        Cotacao,
        Relatorio,
        Custo,
    }, {
        initialRouteName: "Relatorio"
    })
);

export default Routes;*/