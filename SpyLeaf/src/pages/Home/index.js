import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import estilos from './styles';
import { Button } from "react-native-paper";
import light from '../../styles/light';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Screens imports navigation
import Login    from '../Login';
import Home     from '../Home';
import Cadastro from '../Cadastro_faz_talhao';
import Cotacao  from '../Cotacao_soja';
import Custos   from '../Custo_producao';
import Relatorio from '../Relatorio_produtividade';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Main" component={Tela_Inicial}  options={{ HeaderShown: false }} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Cotação" component={Cotacao} />
        <Stack.Screen name="Custos" component={Custos} />
        <Stack.Screen name="Relatorio" component={Relatorio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Tela_Inicial = (navigation) => {
    return (
        <View style={estilos.corpo}>

            <View style={estilos.bloco}>
                <Text style={estilos.titulo}>Utilidades</Text>
                <Text style={{left:60, fontSize:20, fontWeight:'bold', color: "#EE8600"}}>Cadastro do Talhão</Text>
                <TouchableOpacity
                     onPress={() => navigation.navigate('Cadastro')}
                    style={estilos.button3}>
                    <Text style={estilos.titulo_ico}>Cadastro</Text>
                </TouchableOpacity>
                <Text style={{left:60, fontSize:20, fontWeight:'bold', color: "#EE8600"}}>Cotações da Soja</Text>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Relatorio')}
                    style={estilos.button3}>

        <Text style={{left:60, fontSize:20, fontWeight:'bold', color: "#EE8600"}}>Relatorio</Text>

                </TouchableOpacity>

                <TouchableOpacity
                 onPress={() => navigation.navigate('Custos')}
                    style={estilos.button3}>

                    <Text style={estilos.titulo_ico}>Custos de produção</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}
export default App;