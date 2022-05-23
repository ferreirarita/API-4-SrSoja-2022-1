import React, {useState} from 'react';
import { SafeAreaView, StatusBar } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Fazenda, Talhao, Listagem } from '../pages/Cadastro_Fazenda_Talhao'
import { Area, Previsao, Calculo } from '../pages/Relatorios_Produtividade'
import { Sementes, Fertilizantes, Agrotoxicos} from '../pages/Custos_Producao'
import { Compra, Venda } from '../pages/Historico_Compra_Venda'

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
