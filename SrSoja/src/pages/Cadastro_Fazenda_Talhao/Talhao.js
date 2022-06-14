import React, { useState, useEffect } from "react";
import {View,Text,TextInput,SafeAreaView,TouchableOpacity,ScrollView,Alert,FlatList} from "react-native";
import LoadingScreen from "../../components/LoadingScreen";
import {  stylesFazenda, stylesTalhao, stylesListagem, styles } from "./styles";
import { Picker } from "@react-native-picker/picker";
import getContext from '../../hooks'
import { addFazenda, getFazenda, listAll } from "../../services/database/controllers/Fazenda";
import { addTalhao, getTalhao } from "../../services/database/controllers/Talhao";
//Icon
import MapIcon from "../../assets/Icons/map-fill";
import TrashIcon from "../../assets/Icons/trash3-fill";
import EditIcon from "../../assets/Icons/pencil-square";
import SearchIcon from "../../assets/Icons/search";
//buttons
import {CheckButton, CancelButton, AddButton, NextButton} from "../../components/Button";

const Talhao = ({ navigation, route}) => {
    const { database, dataResult, setResult} = getContext();
    const fazenda = route.params?.fazenda
  
  
    const OpenTalhao = ({fazenda}) => {
      
      const [ loading, setLoading ] = useState(false)
  
      
      const [ talhao, setTalhao ] = useState(route.params?.talhao ?? {
        tlh_apelido: '', tlh_media_producao: 0, tlh_tamanho: '', tlh_saude: 'Saudável',
        latitude: 0, longitude: 0
      })
      const [apelido, setApelido] = useState(talhao.tlh_apelido);
      const [ tamanho, setTamanho ] = useState(talhao.tlh_tamanho)
  
      //Picker
      const [saude, setSaude] = useState(["Saudável", "Doente"]); 
      const [selectedSaude, setSelectedSaude] = useState(talhao.tlh_saude);
  
      const [coord,setCoord ] = useState({
        latitude: talhao.latitude,
        longitude: talhao.longitude
      })
      
      
      let coordResult = route.params?.coordenadas
      useEffect(() => {
        if(coordResult !== undefined && coordResult !== ''){
          setCoord(coordResult)
        }
        },[coordResult]
      )
  
      useEffect(()=>{
        if(loading) {
          // console.log(typeof dataResult,dataResult)
          if(dataResult !== null && {}) {
            // setTalhao(dataResult)
            setLoading(false)
          } 
        }
      },[dataResult])
  
      // console.log(fazendas)
  
      const [ exibirMapa, setExibirMapa ] = useState(false) // tem utilidade?
  
  
      return (
        !loading ?
        <SafeAreaView style={stylesTalhao.container}>
          <ScrollView>
            <View style={stylesTalhao.body}>
            
              <View style={stylesTalhao.bodyRow}>
                <Text style={stylesTalhao.bodyTitle}>Apelido do Talhão</Text>
                <TextInput
                  style={stylesTalhao.bodyInputBox}
                  placeholder="Inserir nome..."
                  keyboardType="default"
                  onChangeText={setApelido}
                  value={apelido}
                />
              </View>
  
              <View style={stylesTalhao.bodyRow}>
                <Text style={stylesTalhao.bodyTitle}>Tamanho (km²)</Text>
                <TextInput
                  style={stylesTalhao.bodyInputBox}
                  placeholder="Inserir o tamanho d talhão"
                  keyboardType="number-pad"
                  onChangeText={setTamanho}
                  value={tamanho}
                />
              </View>
  
              <View style={stylesTalhao.bodyRow}>
                <Text style={stylesTalhao.bodyTitle}>Saúde atual do Talhão</Text>
  
                <Picker
                  style={{ flex: 1, flexWrap: "nowrap" }}
                  selectedValue={selectedSaude}
                  onValueChange={(itemValue, index) =>
                    setSelectedSaude(itemValue, index)
                  }
                >
                  {saude.map((sd, index) => {
                    return (
                      <Picker
                        style={{ flex: 1 }}
                        label={sd}
                        value={sd}
                        key={index}
                      />
                    );
                  })}
                </Picker>
                <View style={{ borderBottomWidth: 1 }} />
              </View>
              <View style={stylesTalhao.bodyRow}>
                <Text style={stylesTalhao.bodyTitle}>Selecionar área</Text>
                
                <TouchableOpacity style={stylesTalhao.bodyRowMap}
                  onPress={() => {
                    setExibirMapa(true)
                    navigation.navigate({
                      name: 'Mapa',
                      params: {
                        name: apelido,
                        idPage: route.name,
                      }
                    })
                  }}>
                  <View style={stylesTalhao.bodyMap}>
                    <MapIcon size={50} fill="#343434" />
                    <Text style={stylesTalhao.bodyTextMap}>Abrir Mapa</Text>
                  </View>
                </TouchableOpacity>
                
                <View style={stylesTalhao.bodyLine} />
              </View>
            </View>
          </ScrollView>
  
          <View style={stylesTalhao.footer}>
            <View style={stylesTalhao.footerRow}>
              <View style={stylesTalhao.footerRowCenterButtons}>
                <View style={stylesTalhao.footerButtonCancel}>
                  <CancelButton
                    size={48}
                    onPress={() => {
                      const clear = () => {
                        setApelido("")
                        setCoord("")
                        setExibirMapa(false)
                        setSelectedSaude(talhao.tlh_saude ?? 'Saudável')
                      }
  
                      apelido !== '' || cep !== '' ?
                      Alert.alert(
                        null,
                        `Excluir a fazenda '${nome}'?`,
                        [
                          {
                            text: "Sim",
                            onPress: () => {
                              clear()
                            }
                          },
                          {
                            text: "Não",
                          }
                        ]
                      )
                      :
                      clear()
                    }}
                  />
                </View>
                <View style={stylesTalhao.footerButtonCheck}>
                  <CheckButton
                    size={48}
                    onPress={() => {
                      Alert.alert(
                        null,
                        `Salvar o talhão '${apelido}'?`,
                        [
                          {
                            text: "Sim",
                            onPress: () => {
                              setLoading(true)
                              addTalhao(
                                database,
                                {
                                  tlh_id: talhao.tlh_id ?? undefined,
                                  fzd_id: fazenda,
                                  tlh_apelido: apelido,
                                  tlh_media_producao: talhao.tlh_media_producao,
                                  tlh_tamanho: tamanho == '' ? '0' : tamanho,
                                  tlh_saude: selectedSaude, 
                                  /* latitude: coord?.latitude,
                                  longitude: coord?.longitude */
                                },
                                setResult
                              );
                            },
                          },
                          {
                            text: "Não",
                          }
                        ]
                      )
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </SafeAreaView>
        :
        <LoadingScreen/>
      );
    }
    
    return (
      route.params?.fazenda ?
      <OpenTalhao fazenda={fazenda} />
      :
      <View style={{flex:1,justifyContent:'center', alignItems: 'center'}}>
        <Text>Nenhuma fazenda selecionada</Text>
      </View>
    )
};

export default Talhao