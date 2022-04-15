import React from 'react';
import { View, Text, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native';
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

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Main" component={Main}  options={{ HeaderShown: false }} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Cotação" component={Cotacao} />
        <Stack.Screen name="Custos" component={Custos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Main = ({navigation}) => {
  return (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#222222"/>
    <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'space-around', backgroundColor: '#EE8600'}}>
      <View>
        <Text style={{fontSize:30, fontWeight: 'bold'}}>Seja Bem-Vindo</Text>
        <View style={{alignItems: 'center'}}>  
        <Text style={{fontSize:30, fontWeight: 'bold'}}>Sr(a)</Text>
        </View>
      </View>
      <TouchableOpacity 
        onPress={() => navigation.navigate('Home')}
        style={{backgroundColor: '#343434',borderWidth: 1, padding:5, width:'85%', borderRadius:5, flexDirection:'row',justifyContent:'space-between', alignItems: 'center'}}>
        <Text style={{left:60, fontSize:20, fontWeight:'bold', color: "#EE8600"}}>Vamos começar</Text>
        <Button labelStyle={light.iconOpen} icon="arrow-right-bold-outline" />
      </TouchableOpacity>
    </SafeAreaView>
  </>
  )};
  export default App;
