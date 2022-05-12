/* CADASTRO EXEMPLO

import React, {useState} from 'react';
import { Text, View, TouchableOpacity, StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import styles from './styles';

export default function Cadastro(props){
  const [coord,setCoord] = useState ({longitude: -45, latitude: -23});

  return( 
    <View style={styles.container}>
      <Text>Tela Cadastro {JSON.stringify(coord)}</Text>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => props.navigation.navigate('Mapa', {setCoord})}>
        <Text style={styles.rotuloBotao}>Ir para a tela B</Text>
      </TouchableOpacity>
    </View>
  );
} */

/* STYLES CADASTRO EXEMPLO

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  botao: {
    alignItems: 'center',
    backgroundColor: 'gray',
    marginTop: 5,
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  rotuloBotao: {
    color: 'white',
    fontWeight: 'bold',
  },
}); */
