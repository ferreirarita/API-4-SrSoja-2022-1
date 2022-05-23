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
