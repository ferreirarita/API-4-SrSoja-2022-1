import React from 'react';
import { View, Text, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native';
//import Paginas from './pages';
import { Button } from "react-native-paper";
import light from './styles/light';
// arrumar as dependencias do expo rodar: expo doctor --fix-dependencies
export default function App () {
  return (<>
    <StatusBar barStyle="light-content" backgroundColor="#222222"/>
    <SafeAreaView style={{flex:1, alignItems: 'center', justifyContent: 'space-around', backgroundColor: '#EE8600'}}>
      <View>
        <Text style={{fontSize:30, fontWeight: 'bold'}}>Seja Bem-Vindo</Text>
        <View style={{alignItems: 'center'}}>  
        <Text style={{fontSize:30, fontWeight: 'bold'}}>Sr(a)</Text>
        </View>
      </View>
      <TouchableOpacity style={{backgroundColor: '#343434',borderWidth: 1, padding:5, width:'85%', borderRadius:5, flexDirection:'row',justifyContent:'space-between', alignItems: 'center'}}>
        <Text style={{left:60, fontSize:20, fontWeight:'bold', color: "#EE8600"}}>Vamos começar</Text>
        <Button labelStyle={light.iconOpen} icon="arrow-right-bold-outline" />
      </TouchableOpacity>
    </SafeAreaView>
  </>
  )};