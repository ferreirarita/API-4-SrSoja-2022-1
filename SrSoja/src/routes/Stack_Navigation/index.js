import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import stylesVar from '../styles/stylesVar';
//Screens
import App_Open         from '../pages/App_Open';
import Cadastro_Usuario from '../pages/Cadastro_Usuario';
import Login            from '../pages/Login';
import Mapa             from '../pages/Mapa';


const Stack = createNativeStackNavigator();

const Stack_Navigator = () => {
  return (
        <Stack.Navigator initialRouteName="App_Open" screenOptions={{
            headerShown: false, headerStyle:{...stylesVar.toolbar}, headerTitleAlign: 'center', headerTitleStyle:{fontWeight: 'bold'}
        }}>
          <Stack.Screen name="App_Open" component={App_Open} />
          <Stack.Screen name="Login" component={Login} options={{ title:'Marcar Talhão', headerShown:true}} />
          <Stack.Screen name="Cadastro_Usuario" component={Cadastro_Usuario} options={{ title:'Cadastrar-se', headerShown:true}} />
          <Stack.Screen name="Mapa" component={Mapa} options={{ title:'Marcar Talhão', headerShown:true}} />
        </Stack.Navigator>
    );
}
export default Stack_Navigator