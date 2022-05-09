
import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';


const Fazenda = () => {
  const navigation = useNavigation();
  return (
      <SafeAreaView style={{flex:1}}>
          <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
              <Text>Tela de Sementes</Text>
              <TouchableOpacity style={{marginTop:20}} onPress={() => navigation.navigate('HomeDrawer')}>
                  <Text>Visualizar</Text>
              </TouchableOpacity>
          </View>
      </SafeAreaView>
  );
}

const Talhao = () => {
  const navigation = useNavigation();
  return (
      <SafeAreaView style={{flex:1}}>
          <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
              <Text>Tela de Fertilizantes</Text>
              <TouchableOpacity style={{marginTop:20}} onPress={() => navigation.navigate('HomeDrawer')}>
                  <Text>Visualizar</Text>
              </TouchableOpacity>
          </View>
      </SafeAreaView>
  );
}
const Listagem = () => {
  const navigation = useNavigation();
  return (
      <SafeAreaView style={{flex:1}}>
          <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
              <Text>Tela de Agrotóxicos</Text>
              <TouchableOpacity style={{marginTop:20}} onPress={() => navigation.navigate('Cadastro_Fazenda_Talhao')}>
                  <Text>Visualizar</Text>
              </TouchableOpacity>
          </View>
      </SafeAreaView>
  );
}

export { Fazenda, Talhao, Listagem }