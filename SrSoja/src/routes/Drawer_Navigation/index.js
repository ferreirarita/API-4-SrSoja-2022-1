import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './styles';
import stylesVar from '../../styles/stylesVar';
//Screens
import Home           from '../../pages/Home';
import Cotacao_Soja   from '../../pages/Cotacao_Soja';
import Previsao_Tempo from '../../pages/Previsao_Tempo';
import { 
  TabCadastro_Fazenda_Talhao,
  TabRelatorios_Produtividade,
  TabCustos_Producao,
  TabHistorico_Compra_Venda
 } from '../MaterialTopTab_Navigation' 

/** Testes */
import Teste_Banco    from '../../pages/Teste_Banco'
/** */

//icons
import PainelIcon     from '../../assets/Icons/house-door-fill'
import CadastrosIcon  from '../../assets/Icons/map-fill'
import RelatoriosIcon from '../../assets/Icons/clipboard-data-fill'
import CotacaoIcon    from '../../assets/Icons/currency-exchange'
import CustosIcon     from '../../assets/Icons/cart4'
import HistoricoIcon  from '../../assets/Icons/clock-history'
import PrevisaoIcon   from '../../assets/Icons/cloud-lightning-rain-fill'


const Drawer = createDrawerNavigator();

const Drawer_Navigation = () => {
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
      <Drawer.Screen name="Home" component={Home} 
      options={{
        title:'Painel Inicial', 
        drawerIcon: ({color}) => ( 
        <PainelIcon size={24} fill='#343434' /> 
        ) 
      }} 
      />

      <Drawer.Screen name="Cadastro_Fazenda_Talhao" component={TabCadastro_Fazenda_Talhao} 
      options={{
        title:'Cadastros',
        drawerIcon: ({color}) => ( 
        <CadastrosIcon size={24} fill='#343434' /> 
        ) 
      }} 
      />

      <Drawer.Screen name="Relatorios_Produtividade" component={TabRelatorios_Produtividade} 
      options={{
        title:'Relatórios', 
        drawerIcon: ({color}) => ( 
        <RelatoriosIcon size={24} fill='#343434' /> 
        ) 
      }} 
      />

      <Drawer.Screen name="Cotacao_Soja" component={Cotacao_Soja} 
      options={{
        title:'Cotação', 
        drawerIcon: ({color}) => ( 
        <CotacaoIcon size={24} fill='#343434' /> 
        ) 
      }} 
      />

      <Drawer.Screen name="Custos_Producao" component={TabCustos_Producao} 
      options={{
        title:'Custos de Produção', 
        drawerIcon: ({color}) => ( 
        <CustosIcon size={24} fill='#343434' /> 
        ) 
      }} 
      />

      <Drawer.Screen name="Previsao_Tempo" component={Previsao_Tempo} 
      options={{
        title:'Previsão do Tempo', 
        drawerIcon: ({color}) => ( 
        <PrevisaoIcon size={24} fill='#343434' /> 
        ) 
      }} 
      />
      <Drawer.Screen name="Historico_Compra_Venda" component={TabHistorico_Compra_Venda} 
      options={{
        title:'Historicos', 
        drawerIcon: ({color}) => ( 
        <HistoricoIcon size={24} fill='#343434' /> 
        ) 
      }} 
      />

      <Drawer.Screen name='Teste do Banco' component={Teste_Banco} 
      options={{
        title: 'Teste do Banco', 
        drawerIcon: () => 
        <PainelIcon size={24} fill='#f00' />
        }} 
        />
    </Drawer.Navigator>
  );
}

export default Drawer_Navigation