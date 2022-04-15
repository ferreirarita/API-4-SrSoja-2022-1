import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import light from "../../styles/light"
import Header from "../../components/Header"
import localizacao from '../../assets/imagem localizacao.png';
import remover from '../../assets/x.png';
import validar from '../../assets/yep.png';
import adicionar from '../../assets/+.png';


import { CheckButton, XButton, AddButton } from '../../components/Button';
import stylesVar from '../../components/StyleSheetVars'
import style from '../../components/Button/styles';

//import { Title } from 'react-native-paper';
//import styles from './styles'

export default function App() {
  const [nome, setNome] = useState('')
  
  return (
  <>
    <View style={estilos.corpo}>
      <Header />
      <Text style={light.TitlePrimary}> {nome || 'Cadastro área de plantio'} </Text>
      <View style={estilos.bloco}>
        <View style={estilos.linhaBloco}>
          <View style={estilos.campo}>
            <Text style={estilos.texto}>Nome da fazenda</Text>
            <View style={estilos.insercao}>
              <TextInput 
                onChangeText={(nome) => setNome(nome)}
                placeholder='Fazenda' />
            </View>          
          </View>
        </View>
        <View style={estilos.linhaBloco}>
        <View style={estilos.campo3}>
            <Text style={estilos.cep}>CEP</Text>
            <View style={estilos.insercao}>
              <TextInput 
                placeholder='00000-000' />
            </View>          
          </View>

          <View style={estilos.campo3}>
            <Text style={estilos.estado}>Estado</Text>
            <View style={estilos.insercao}>
              <TextInput 
                placeholder='SP' />
            </View>          
          </View>

          <View style={estilos.campo3}>
            <Text style={estilos.municipio}>Município</Text>
            <View style={estilos.insercao}>
              <TextInput 
                placeholder='SJC' />
            </View>          
          </View>
        </View>
        <View style={estilos.linha}>
          <Text style={estilos.titulo}>Talhões</Text>
          <View style={estilos.linhaBloco2}>

          <View style={estilos.campo}>
            <Text style={estilos.bloco2}>Apelido do Talhão</Text>
            <View style={estilos.insercao}>
              <TextInput 
                placeholder='Apelido' />
                </View>

               <View style={estilos.campo}>
            <Text style={estilos.bloco2}>Média de Produção</Text>
            <View style={estilos.insercao}>
              <TextInput 
                placeholder='Média' />
            </View>          
          </View>  
        </View>      
        <Text style={estilos.bloco2}>Área</Text>
        <Image source={localizacao} style={estilos.localizacao }/>


        <View style={estilos.linhaBloco3}>

          <XButton
            onPress={() => {setNome('eu removo muito')}}
            buttonStyle={estilos.remover}
            color={stylesVar.color.red}
            fill={stylesVar.color.black}
            size={stylesVar.iconTiny}
          />

          <CheckButton 
            onPress={() => setNome('eu confirmo muito')}
            buttonStyle={estilos.remover}
            color={stylesVar.color.green}
            fill={stylesVar.color.black}
            size={stylesVar.iconTiny}
          />
          
          <AddButton 
            onPress={() => setNome('eu adiciono muito')}
            buttonStyle={estilos.remover}
            color={stylesVar.color.orange}
            fill={stylesVar.color.black}
            size={stylesVar.iconTiny}
          />

        </View>

      </View>
      </View>
    </View>
  </View>
  </>
  );
}



const estilos = {
 
  /*titulo:{
    textAlign: 'center',
    fontSize: '20px',
    color: '#000000',
    padding: 35,
  },*/

  bloco: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    textAlign: 'left',
    backgroundColor:'#DCDCDC',
    padding: 5,
    paddingTop: Constants.statusBarHeight,
    //top: '25px',
    width: '90%',
    margin: 17,
  },

  linhaBloco: {
    flexDirection: 'row',
    marginBottom: 15,
    padding: 2,
    backgroundColor: '#AED6F1 '
  },

  campo: {
    flexDirection: 'column',
    width: '100%'
  },

  campo3: {
    flexDirection: 'column',
    width: '33%'
  },

  linhaBloco2: {
    flexDirection: 'column',
    marginBottom: 15,
    padding: 2,
    backgroundColor: '#AED6F1 '
    
  },


  insercao: {
    backgroundColor: '#FFFFFF30',
    borderBottom: 1,
    borderColor: '#000'
  },

  texto: {
    fontSize: stylesVar.fontLow,
    color: stylesVar.textPrimaryColor,
  },

  nomedafazenda: {
    //width: '81px',
    //height: '13px',
    //top:'42px',
    //left: '16px',
    fontSize: 12,
    color: '#000000',
    //padding: '2px',

  },
  
  cep: {
    //width: '19px',
    //height: '13px',
    //top: '102px',
    //left: '12px',

  },

  estado: {
    //width: '32px',
    //height: '13px',
    //top: '102px',
    //left: '100px',
    
  },

  municipio: {
    //width: '46px',
    //height: '13px',
    //top: '102px',
    //left: '100px',
  },

  linha: {
    color: '#B0B0B0',
    border: '1px solid',
    left: 20,
    right: 20,
    top: 140,
    bottom: 0,
    position:'absolute',
  },

  titulo:{
    textAlign: 'center',
    fontSize: 20,
    color: '#000000',
    padding: 25,
    fontWeight: "bold",
  },

  bloco2: {
    /*flex: 1,
    padding: 5,
    paddingTop: Constants.statusBarHeight,
    justifyContent: 'left',
    textAlign: 'left',
    backgroundColor:'#DCDCDC',
    width: '300px',
    //margin: '10px',
    //paddingTop:'60%',*/
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    textAlign: 'left',
    backgroundColor:'#DCDCDC',
    padding: 5,
    paddingTop: Constants.statusBarHeight,
    //top: '25px',
    width: '90%',
    margin: 17,
    
  },
  
  apelido: {
    //width: '81px',
    //height: '13px',
    top: 42,
    left: 16,
    fontSize: 12,
    color: '#000000',
    //padding: '2px',
  },

  localizacao:{
    width: '100%', 
    height: '50%',
  },

  linhaBloco3: {
    flexDirection: 'row',
    marginBottom: 15,
    padding: 5,
    backgroundColor: '#AED6F1'
  },

 

  remover:{
    
    margin:0,
  },

  validar:{
    width: '20%', 
    height: '20%',
    margin:30,
  },

  adicionar:{
    width: '20%', 
    height: '20%',
    padding:30,
    left: 200,
    //right:'5px',
  },

}