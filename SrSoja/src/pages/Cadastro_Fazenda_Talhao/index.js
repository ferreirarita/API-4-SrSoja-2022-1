
import React,{useState} from 'react'
import { View, Text, TextInput , SafeAreaView, TouchableOpacity, ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { stylesFazenda, stylesTalhao, stylesListagem } from './styles'
//Icon
import MapIcon from '../../assets/Icons/map-fill'
import TrashIcon from '../../assets/Icons/trash3-fill'
import EditIcon from '../../assets/Icons/pencil-square'

const Fazenda = () => {
  const navigation = useNavigation();
    //const [Fazenda, setFazenda] = useState('Caldas Novas')
    //const [CEP, setCEP] = useState('12247-004')
    //const [Estado, setEstado] = useState('SP')
    //const [Municipio, setMunicipio] = useState('São José dos Campos')

  return (
      <SafeAreaView style={stylesFazenda.container}>
        <ScrollView>
          <View style={stylesFazenda.body}>
            <View style={stylesFazenda.bodyRow}>
              <Text style={stylesFazenda.bodyTitle}>Nome da Fazenda</Text>
              <TextInput style={stylesFazenda.bodyInputBox} placeholder="Inserir nome..."></TextInput>
            </View>
            <View style={stylesFazenda.bodyRow}>
                <Text style={stylesFazenda.bodyTitle}>CEP</Text>
                <TextInput style={stylesFazenda.bodyInputBox} placeholder="00000-000"></TextInput>
            </View>
            <View style={stylesFazenda.bodyRow}>
              <Text style={stylesFazenda.bodyTitle}>Estado</Text>
              <TextInput style={stylesFazenda.bodyInputBoxEstado} placeholder="Inserir estado"></TextInput>
            </View>
            <View style={stylesFazenda.bodyRow}>
              <Text style={stylesFazenda.bodyTitle}>Municipio</Text>
              <TextInput style={stylesFazenda.bodyInputBox} placeholder="Inserir o município"></TextInput>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
  );
}

const Talhao = (props) => {
    const [coord,setCoord] = useState ({longitude: -45, latitude: -23});
    const navigation = useNavigation();
  return (
      <SafeAreaView style={stylesTalhao.container}>
        <ScrollView>
          <View style={stylesTalhao.body}>
            <View style={stylesTalhao.bodyRow}>
              <Text style={stylesTalhao.bodyTitle}>Apelido do Talhão</Text>
              <TextInput style={stylesTalhao.bodyInputBox} placeholder="Inserir nome..."></TextInput>
            </View>
            <View style={stylesTalhao.bodyRow}>
                <Text style={stylesTalhao.bodyTitle}>Saúde do Talhão</Text>
                <TextInput style={stylesTalhao.bodyInputBox} placeholder="Saúdavel.."></TextInput>
            </View>
            <View style={stylesTalhao.bodyRow}>
              <Text style={stylesTalhao.bodyTitle}>Selecionar área</Text>
                <TouchableOpacity style={stylesTalhao.bodyRowMap}
                 onPress={() => props.navigation.navigate('Mapa', {setCoord})}>
                  <View style={stylesTalhao.bodyMap}>
                    <MapIcon size={50} fill='#343434' />
                    <Text style={stylesTalhao.bodyTextMap}>Abrir Mapa</Text>
                  </View>
                </TouchableOpacity>
              <View style={stylesTalhao.bodyLine} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
  );
}
const Listagem = () => {
  const navigation = useNavigation();
  return (
      <SafeAreaView style={stylesListagem.container}>
        <ScrollView>
          <View style={stylesListagem.body}>
            <View style={stylesListagem.bodyList}>
              <View style={stylesListagem.bodyRow}>
                <Text style={stylesListagem.bodyTitle}>Talhão: </Text>
                <Text style={stylesListagem.bodyTitle}>Lesta 01</Text>
              </View>
              <View style={stylesListagem.bodySubRow}>
                <Text style={stylesListagem.bodyTitle}>Saudável</Text>
                <View style={stylesListagem.bodyIcon}>
                  <EditIcon size={30} fill='#343434' />
                </View>
                <View style={stylesListagem.bodyIcon}>
                <TrashIcon size={30} fill='#343434' />
                </View>
              </View>
            </View>
            <View style={stylesListagem.bodyList}>
                <Text style={stylesListagem.bodyTitle}>CEP</Text>
                <TextInput style={stylesListagem.bodyRowBox} placeholder="00000-000"></TextInput>
            </View>
            <View style={stylesListagem.bodyList}>
              <Text style={stylesListagem.bodyTitle}>Estado</Text>
              <TextInput style={stylesListagem.bodyRowBox} placeholder="Inserir estado"></TextInput>
            </View>
            <View style={stylesListagem.bodyList}>
              <Text style={stylesListagem.bodyTitle}>Municipio</Text>
              <TextInput style={stylesListagem.bodyRowBox} placeholder="Inserir o município"></TextInput>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
  );
}

export { Fazenda, Talhao, Listagem }