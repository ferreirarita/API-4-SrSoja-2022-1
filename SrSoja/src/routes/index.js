import React, {useState} from 'react';
import { SafeAreaView, StatusBar } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import CustomDrawer from './Drawer_Navigation/styles';
import stylesVar from '../styles/stylesVar';
//Screens
import App_Open         from '../pages/App_Open';
import Cadastro_Usuario from '../pages/Cadastro_Usuario';
import Login            from '../pages/Login';
import Home             from '../pages/Home';
import Cotacao_Soja     from '../pages/Cotacao_Soja';
import Previsao_Tempo   from '../pages/Previsao_Tempo';
import Mapa             from '../pages/Mapa';

/** Testes */
import Teste_Banco from '../pages/Teste_Banco'
/** */

import { Fazenda, Talhao, Listagem } from '../pages/Cadastro_Fazenda_Talhao'
import { Area, Previsao, Calculo } from '../pages/Relatorios_Produtividade'
import { Sementes, Fertilizantes, Agrotoxicos} from '../pages/Custos_Producao'
import { Compra, Venda } from '../pages/Historico_Compra_Venda'

//icons
import PainelIcon     from '../assets/Icons/house-door-fill'
import CadastrosIcon  from '../assets/Icons/map-fill'
import RelatoriosIcon from '../assets/Icons/clipboard-data-fill'
import CotacaoIcon    from '../assets/Icons/currency-exchange'
import CustosIcon     from '../assets/Icons/cart4'
import PrevisaoIcon   from '../assets/Icons/cloud-lightning-rain-fill'


const Drawer = createDrawerNavigator();

function Drawer_Navigation () {
  return (
    <Drawer.Navigator 
      drawerContent={props => <CustomDrawer {...props}/>} 
      screenOptions={{
        headerShown: true,
        headerStyle:{backgroundColor:'#F7BB26'}, headerTitleAlign: 'center',
        drawerActiveBackgroundColor: '#DF9900', drawerActiveTintColor: '#343434',
        drawerInactiveBackgroundColor: '#EFAF23', drawerInactiveTintColor: '#343434', 
        drawerLabelStyle: {marginLeft: -22, fontSize: 19}
        }}>
      <Drawer.Screen name="Home" component={Home} options={{title:'Painel Inicial', drawerIcon: ({color}) => ( 
        <PainelIcon size={24} fill='#343434' /> 
        ) 
      }} />
      <Drawer.Screen name="Cadastro_Fazenda_Talhao" component={TabCadastro_Fazenda_Talhao} options={{title:'Cadastros', drawerIcon: ({color}) => ( 
        <CadastrosIcon size={24} fill='#343434' /> 
        ) 
      }} />
      <Drawer.Screen name="Relatorios_Produtividade" component={TabRelatorios_Produtividade} options={{title:'Relatórios', drawerIcon: ({color}) => ( 
        <RelatoriosIcon size={24} fill='#343434' /> 
        ) 
      }} />
      <Drawer.Screen name="Cotacao_Soja" component={Cotacao_Soja} options={{title:'Cotação', drawerIcon: ({color}) => ( 
        <CotacaoIcon size={24} fill='#343434' /> 
        ) 
      }} />
      <Drawer.Screen name="Custos_Producao" component={TabCustos_Producao} options={{title:'Custos de Produção', drawerIcon: ({color}) => ( 
        <CustosIcon size={24} fill='#343434' /> 
        ) 
      }} />
      <Drawer.Screen name="Previsao_Tempo" component={Previsao_Tempo} options={{title:'Previsão do Tempo', drawerIcon: ({color}) => ( 
        <PrevisaoIcon size={24} fill='#343434' /> 
        ) 
      }} />
      <Drawer.Screen name='Teste do Banco' component={Teste_Banco} options={{title: 'Teste do Banco', drawerIcon: () => <PainelIcon size={24} fill='#f00' />}} />
    </Drawer.Navigator>
  );
}


const TabCadastro = createMaterialTopTabNavigator();

function TabCadastro_Fazenda_Talhao() {
  const[name,setName]=useState('Teste')

  return(
      <TabCadastro.Navigator>
        <TabCadastro.Screen name="Fazenda" component={Fazenda} talhao_name='teste'/>
        <TabCadastro.Screen talhao_name={name} name="Talhão" component={Talhao} />
        <TabCadastro.Screen name="Listagem" component={Listagem} />
      </TabCadastro.Navigator>
  )
}
const TabRelatorio = createMaterialTopTabNavigator();

function TabRelatorios_Produtividade() {
  return(
      <TabRelatorio.Navigator>
        <TabRelatorio.Screen name="Area" component={Area} options={{title:'Área'}} />
        <TabRelatorio.Screen name="Previsao" component={Previsao} options={{title:'Previsão'}} />
        <TabRelatorio.Screen name="Calculo" component={Calculo} options={{title:'Cálculo'}} />
      </TabRelatorio.Navigator>
  )
}
const TabCustos = createMaterialTopTabNavigator();

function TabCustos_Producao() {
    return (
      <TabCustos.Navigator>
        <TabCustos.Screen name="Sementes" component={Sementes} />
        <TabCustos.Screen name="Fertilizantes" component={Fertilizantes} />
        <TabCustos.Screen name="Agrotóxicos" component={Agrotoxicos} />
      </TabCustos.Navigator>
    );
  }

  const TabHistorico = createMaterialTopTabNavigator();

  function TabHistorico_Compra_Venda() {
      return (
        <TabHistorico.Navigator>
          <TabHistorico.Screen name="Compra" component={Compra} />
          <TabHistorico.Screen name="Venda" component={Venda} />
        </TabHistorico.Navigator>
      );
    }

const Stack = createNativeStackNavigator();


const Routes = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="App_Open" screenOptions={{
            headerShown: false, headerStyle:{...stylesVar.toolbar}, headerTitleAlign: 'center'
            }}>
          <Stack.Screen name="App_Open"                 component={App_Open} />
          <Stack.Screen name="Login"                    component={Login} options={{}}/>
          <Stack.Screen name="Cadastro_Usuario"         component={Drawer_Navigation} options={{title:'Cadastrar-se'}}/>
          
          <Stack.Screen name="Mapa"                     component={Mapa} options={{title:'Marcar Talhão', headerShown:true}}/>
          <Stack.Screen name="HomeDrawer"               component={Drawer_Navigation} options={{title:'Painel Inicial'}}/>
          <Stack.Screen name="Cadastro_Fazenda_Talhao"  component={Drawer_Navigation} options={{title:'Cadastros'}}/>
          <Stack.Screen name="Cotacao_Soja"             component={Drawer_Navigation} options={{title:'Cotações da Soja'}}/>
          <Stack.Screen name="Custos_Producao"          component={Drawer_Navigation} options={{title:'Custos de Produção'}}/>
          <Stack.Screen name="Relatorios_Produtividade" component={Drawer_Navigation} options={{title:'Relatórios'}}/>
          <Stack.Screen name="Previsao_Tempo"           component={Drawer_Navigation} options={{title:'Previsão do Tempo'}}/>
          <Stack.Screen name="Historico_Compra_venda"   component={TabHistorico_Compra_Venda} options={{title:'Históricos'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
}
export default Routes