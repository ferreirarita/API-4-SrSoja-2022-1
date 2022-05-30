import React, {useState} from 'react'
import stylesVar from '../../styles/stylesVar'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
//bring the screens
import { Cadastro_Fazenda_Talhao } from '../pages'
//destructuring page to use functions inside the page to bring each screen
const { Fazenda, Talhao, Listagem } = Cadastro_Fazenda_Talhao
const { Area, Previsao, Calculo } = Relatorios_Produtividade
const { Sementes, Fertilizantes, Agrotoxicos} = Custos_Producao

const TabCadastro = createMaterialTopTabNavigator();

function TabCadastro_Fazenda_Talhao() {
  const[name,setName]=useState('Teste') 
  return(
      <TabCadastro.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          height: 2.5,
          ...stylesVar.toolbar
        },
      }}
      >
        <TabCadastro.Screen name="Fazenda" component={Fazenda} talhao_name='teste'/>
        <TabCadastro.Screen talhao_name={name} name="Talhão" component={Talhao} />
        <TabCadastro.Screen name="Listagem" component={Listagem} />
      </TabCadastro.Navigator>
  )
}

const TabRelatorio = createMaterialTopTabNavigator()

function TabRelatorios_Produtividade() {
  return(
      <TabRelatorio.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          height: 2.5,
          ...stylesVar.toolbar
        },
      }}
      >
        <TabRelatorio.Screen name="Area" component={Area} options={{title:'Área'}} />
        <TabRelatorio.Screen name="Previsao" component={Previsao} options={{title:'Previsão'}} />
        <TabRelatorio.Screen name="Calculo" component={Calculo} options={{title:'Cálculo'}} />
      </TabRelatorio.Navigator>
  )
}

const TabCustos = createMaterialTopTabNavigator()

function TabCustos_Producao() {
  return (
      <TabCustos.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          height: 2.5,
          ...stylesVar.toolbar
        },
      }}
      >
        <TabCustos.Screen name="Sementes" component={Sementes} />
        <TabCustos.Screen name="Fertilizantes" component={Fertilizantes} />
        <TabCustos.Screen name="Agrotóxicos" component={Agrotoxicos} />
      </TabCustos.Navigator>
  )
}

/*   const TabHistorico = createMaterialTopTabNavigator();

  function TabHistorico_Compra_Venda() {
      return (
        <TabHistorico.Navigator
              screenOptions={{
        tabBarIndicatorStyle: {
          height: 2.5,
          ...stylesVar.toolbar
        },
      }}
        >
          <TabHistorico.Screen name="Compra" component={Compra} />
          <TabHistorico.Screen name="Venda" component={Venda} />
        </TabHistorico.Navigator>
      );
    } */

export { TabCadastro_Fazenda_Talhao, TabRelatorios_Produtividade, TabCustos_Producao }