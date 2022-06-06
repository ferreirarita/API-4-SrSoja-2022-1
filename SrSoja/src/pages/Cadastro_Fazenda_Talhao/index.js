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

/* 
useEffect(() => {
    if(loading) {
      // console.log(typeof dataResult,dataResult)
      if(dataResult !== null && []) {
        setItens(dataResult?.reverse())
        setLoading(false)
      }
    }
    
  },[dataResult])
*/


const Fazenda = ({navigation, route}) => {
  const { database, dataResult, setResult, user } = getContext();
  const [ loading, setLoading ] = useState(false)
  const [ save, setSave ] = useState(false)
  // mudar depois
  const [ selectedFzd, setSelectedFzd ] = useState(route.params?.fazenda ?? {
    fzd_id: undefined, prd_id: user.prd_id, fzd_nome: '', fzd_cep: ''
  })

  const [fazenda, setFazenda] = useState(selectedFzd.fzd_nome);
  const [cep, setCep] = useState(selectedFzd.fzd_cep);
  /*    cep = cep.replace('-', '')
  */
  const [uf, setUf] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [coord,setCoord] = useState({})

  /** */
  /* useEffect(()=>{
    getFazenda(
      database,
      {
        prd_id: user.prd_id
      },
      setResult
    )
  },[]) */

  useEffect(()=>{
    setSave(false)
  },[fazenda,cep])

  let coordResult = route.params?.coordenadas
  useEffect(() => {
      /* if(coordResult === undefined || coordResult=== ''){}
      else{
        setCoord(coordResult)
      } */
      if(coordResult !== undefined && coordResult !== ''){
        setCoord(coordResult)
      }
    },[coordResult]
  )

  useEffect(()=>{
    if(coord !== {}) {
      setCep(coord.cep)
      setMunicipio(coord.subregion)
      setLogradouro(coord.street)
      setBairro(coord.district)
      setUf(coord.region)
    }
  },[coord])

  // console.log(coord)

  useEffect(()=>{
    if(loading) {
      // console.log(typeof dataResult,dataResult)
      if(dataResult !== null && {}) {
        setSelectedFzd(dataResult)
        setLoading(false)
        setSave(true)
      }
    }
    // console.log('->',dataResult)
  },[dataResult]);

  async function searchCEP(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      setUf(res.uf);
      setMunicipio(res.localidade);
      setLogradouro(res.logradouro);
      setBairro(res.bairro);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(()=>setLoading(false));
  }

  return (
    !loading ?
    <SafeAreaView style={stylesFazenda.container}>
      <ScrollView>
        <View style={stylesFazenda.body}>
          <View style={stylesFazenda.bodyColumn}>
            <Text style={stylesFazenda.bodyTitle}>Nome da Fazenda</Text>
            <TextInput
              style={stylesFazenda.bodyInputBox}
              placeholder="Inserir nome..."
              keyboardType="default"
              onChangeText={setFazenda}
              value={fazenda}
            />
          </View>

          <View style={stylesFazenda.bodyRowCEP}>
            <View style={stylesFazenda.bodyColumn}>
              <Text style={stylesFazenda.bodyTitle}>CEP</Text>
              <TextInput
                style={stylesFazenda.bodyInputBox}
                maxlength={8}
                placeholder="00000-000"
                keyboardType="numeric"
                onChangeText={setCep}
                value={cep}
              />
            </View>
          </View>

          <View style={stylesFazenda.bodyRowCEP}>
            <View style={stylesFazenda.bodyColumn}>
              <TouchableOpacity
                style={stylesFazenda.bodyButton}
                onPress={() => {
                  setLoading(true)
                  searchCEP(cep)
                }}
              >
                <SearchIcon size={28} />
                <Text style={stylesFazenda.bodyTitleSearch}>Pesquisar CEP</Text>
              </TouchableOpacity>
            </View>

            <Text style={stylesFazenda.bodyTitle}>Ou</Text>

            <View style={stylesFazenda.bodyColumn}>
              <TouchableOpacity
                style={stylesFazenda.bodyButton}
                onPress={() => {
                  navigation.navigate({
                    name: 'Mapa',
                    params: {
                      name: fazenda,
                      idPage: route.name
                    },
                  })
                }}>
                <MapIcon size={28} fill="#343434" />
                <Text style={stylesFazenda.bodyTitleSearch}>
                  Obter localização atual
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          

          <View style={stylesFazenda.bodyColumn}>
            <Text style={stylesFazenda.bodyTitle}>Estado</Text>
            <Text style={stylesFazenda.bodyInputBoxEstado}>{uf}</Text>
          </View>

          <View style={stylesFazenda.bodyColumn}>
            <Text style={stylesFazenda.bodyTitle}>Municipio</Text>
            <Text style={stylesFazenda.bodyInputBox}>{municipio}</Text>
          </View>

          <View style={stylesFazenda.bodyColumn}>
            <Text style={stylesFazenda.bodyTitle}>Logradouro</Text>
            <Text style={stylesFazenda.bodyInputBox}>{logradouro}</Text>
          </View>

          <View style={stylesFazenda.bodyColumn}>
            <Text style={stylesFazenda.bodyTitle}>Bairro</Text>
            <Text style={stylesFazenda.bodyInputBox}>{bairro}</Text>
          </View>
        </View>
      </ScrollView>

      <View style={stylesFazenda.footer}>
        <View style={stylesFazenda.footerRow}>
          <View style={stylesFazenda.footerButtonCenter}>
            <View style={stylesFazenda.footerButtonCancel}>
              <CancelButton
                size={48}
                onPress={() => {
                  // mudar depois
                  const clear = () => {
                    setFazenda("")
                    setCep("")
                    setUf("")
                    setMunicipio("")
                    setLogradouro("")
                    setBairro("")
                    setCoord("")
                  }

                  fazenda !== '' || cep !== '' ?
                  Alert.alert(
                    null,
                    `Excluir a fazenda '${fazenda}'?`,
                    [
                      {
                        text: "Sim",
                        onPress: () => {
                          clear()
                          setSave(false)
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
            <View style={stylesFazenda.footerButtonCheck}>
              <CheckButton
                size={48}
                onPress={() => {
                  Alert.alert(
                    null,
                    `Salvar a fazenda '${fazenda}'?`,
                    [
                      {
                        text: "Sim",
                        onPress: () => {
                          setLoading(true)
                          // mudar depois
                          addFazenda(
                            database,
                            {
                              prd_id: selectedFzd.prd_id,
                              fzd_nome: fazenda,
                              fzd_cep: cep
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
          <View style={stylesFazenda.footerButtonRight}>
            <View style={stylesFazenda.footerButtonNext}>
              <NextButton
                size={48}
                onPress={() => {
                  save ?
                  navigation.navigate({
                    name: "Talhão",
                    params: {
                      fzd_id: selectedFzd.fzd_id ?? undefined
                    }
                  })
                  :
                  Alert.alert(
                    null,
                    'Salve suas alterações da fazenda antes de cadastrar um talhão',
                    [
                      {
                        text: "Ok",
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
};

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
    const [saude, setSaude] = useState(["Saudável", "Doente"]); //mudar depois?
    const [selectedSaude, setSelectedSaude] = useState(talhao.tlh_saude);

    const [coord,setCoord ] = useState({
      latitude: talhao.latitude,
      longitude: talhao.longitude
    })

    /* useEffect(()=>{
      
      getTalhao(
        database,
        {
          fzd_id: fazenda
        },
        setResult
      )
    },[]) */

    /* useEffect(()=>{
      setSelectedFazenda(fazendas[0])
    },[fazendas]) */
    
    
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
          setTalhao(dataResult)
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

const Listagem =({navigation, route})=>{
  const { database, dataResult, setResult, user } = getContext()
  const [ loading, setLoading ] = useState(false)

  const [ fazendas, setFazendas ] = useState(null)
  const [ talhoes, setTalhoes ] = useState(null)

  // mudar depois
  const [ lista, setLista ] = useState([])

  useEffect(()=>{
    setLoading(true)
    getFazenda(
      database,
      {
        prd_id: user.prd_id
      },
      setFazendas
    )
    getTalhao(
      database,
      {
        fzd_id: [1,2]
      },
      setTalhoes
    )
  },[])

  useEffect(()=>{
    // if(dataResult !== undefined)
    if(fazendas !== null && talhoes !== null){
      console.log('----------------------------------------------------------')
      console.log('Fazendas:',fazendas)
      console.log('Talhões:',talhoes)

      let x = []
      fazendas.map((item,index) => {
        let aux = [];
        talhoes.map((subitem,subindex) => {
          if(subitem.fzd_id == index + 1)
            aux.push(subitem)
        })
        // console.log('-->',aux)

        x.splice(index,0,{...item,talhoes:aux})
      })

      setLista(x)
      setLoading(false)
    }
  },[fazendas,talhoes])
  
  const renderSubList = ({ item }) => {
    return (
      <TouchableOpacity
          onPress={()=>{console.log('me clickaram:',item.tlh_apelido)}}
        >
        <View style={{...stylesListagem.bodyButton, ...stylesListagem.buttonItem}}>
          
          <Text style={{
            fontSize: 18,
            padding: 10,
          }}>
            {item.tlh_apelido}
          </Text>
          
        </View>
      </TouchableOpacity>
    )
  }

  const renderList = ({ item }) => {
    return (
    <View style={stylesListagem.bodyRowBox}>
      <TouchableOpacity
          onPress={()=>{
            // console.log('me clickaram:',item.fzd_nome)
            navigation.navigate({
              name: "Talhão",
              params: {
                fazenda: item.fzd_id
              }
            })
          }}
        >
        <View style={{...stylesListagem.bodyButton, ...stylesListagem.buttonTitle}}>
          
          <Text style={stylesListagem.bodyTitle}>
            {item.fzd_nome}
          </Text>
          <Text style={stylesListagem.bodySubTitle}>
            CEP: {item.fzd_cep}
          </Text>
          
        </View>
      </TouchableOpacity>

      <View style={stylesListagem.bodyList}>
        <FlatList 
          data={item.talhoes}
          renderItem={renderSubList}
          keyExtractor={item => item.tlh_id}
        />
      </View>

    </View>
    )
  }

  // console.log(lista)
  return (
    !loading ?
    <View style={stylesListagem.container}>
      
      <View style={stylesListagem.body}>
        <FlatList
          data={lista}
          renderItem={renderList}
          keyExtractor={item => item.fzd_id}
        />
      </View>

      <View style={stylesListagem.footer}>
        <View style={stylesListagem.footerRow}>
          <View style={stylesListagem.footerButtonCenter}>
            <View style={stylesListagem.footerButtonCancel}>
              <CancelButton
                size={48}
                onPress={() => {

                }}
              />
            </View>
            <View style={stylesListagem.footerButtonCheck}>
              <CheckButton size={48} />
            </View>
          </View>
          <View style={stylesListagem.footerButtonRight}>
            <View style={stylesListagem.footerButtonAdd}>
              <AddButton
                size={48}
                onPress={() => {
                  navigation.navigate("Talhão");
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </View> 
    :
    <LoadingScreen/>
  );
}; 


export { Fazenda, Talhao, Listagem };
