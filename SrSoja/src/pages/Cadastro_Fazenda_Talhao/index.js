
import React from 'react'
import { View, Text, TextInput , SafeAreaView, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'


const Fazenda = () => {
  const navigation = useNavigation();
    //const [Fazenda, setFazenda] = useState('Caldas Novas')
    //const [CEP, setCEP] = useState('12247-004')
    //const [Estado, setEstado] = useState('SP')
    //const [Municipio, setMunicipio] = useState('São José dos Campos')

  return (
      <SafeAreaView style={styles.container}>
          <View style={styles.body}>
              <Text style={styles.bodyTitle}>Nome da Fazenda</Text>
              <TextInput style={styles.bodyInputBox}></TextInput>
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