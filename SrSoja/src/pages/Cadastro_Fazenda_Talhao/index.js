import React, { useState, useEffect } from "react";
import {View,Text,TextInput,SafeAreaView,TouchableOpacity,ScrollView,Alert,FlatList} from "react-native";
import LoadingScreen from "../../components/LoadingScreen";
import {  stylesFazenda, stylesTalhao, stylesListagem, styles } from "./styles";
import { Picker } from "@react-native-picker/picker";
import getContext from '../../hooks'
import { addFazenda } from "../../services/database/controllers/Fazenda";
import { addTalhao } from "../../services/database/controllers/Talhao";
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

  let coordResult = route.params?.coordenadas
  useEffect(() => {
      /* if(coordResult === undefined || coordResult=== ''){}
      else{
        setCoord(coordResult)
      } */
      if(coordResult !== undefined && coordResult !== ''){
        setCoord(coordResult)
        setMunicipio(coord.subregion)
        setLogradouro(coord.street)
        setBairro(coord.district)
        setUf(coord.region)
      }
    },[coordResult]
  )
  console.log(coord)

  useEffect(()=>{
    if(loading) {
      // console.log(typeof dataResult,dataResult)
      if(dataResult !== null && {}) {
        setSelectedFzd(dataResult)
        setLoading(false)
      }
    }
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
                  navigation.navigate({
                    name: "Talhão",
                    params: {
                      fzd_id: selectedFzd.fzd_id ?? undefined
                    }
                  });
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

  const { database, dataResult, setResult } = getContext();
  const [ loading, setLoading ] = useState(false)

  const fazenda = route.params?.fzd_id
  const [ talhao, setTalhao ] = useState(route.params?.talhao ?? {
    tlh_apelido: '', tlh_media_producao: 0, tlh_saude: 'Saudável',
    latitude: 0, longitude: 0
  })
  const [apelido, setApelido] = useState(talhao.tlh_apelido);

  //Picker
  const [saude, setSaude] = useState(["Saudável", "Doente"]); //mudar depois?
  const [selectedSaude, setSelectedSaude] = useState(talhao.tlh_saude);

  const [coord,setCoord ] = useState({
    latitude: talhao.latitude,
    longitude: talhao.longitude
  })
  
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
    if(loading) {
      // console.log(typeof dataResult,dataResult)
      if(dataResult !== null && {}) {
        setTalhao(dataResult)
        setLoading(false)
      }
    }
  },[dataResult]);

  
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
                              tlh_saude: selectedSaude, 
                              latitude: coord?.latitude,
                              longitude: coord?.longitude
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
                  
                  /* navigation.navigate({
                    name: 'Listagem',
                    params: {
                      apelido: apelido,
                      saude: selectedSaude
                    }
                  }); */
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


const Listagem =({navigation, route})=>{
  const [ loading, setLoading ] = useState(false)
  // mudar depois
  const [ lista, setLista ] = useState([
    {
      fzd_id: 1,
      prd_id: 1,
      fzd_nome: '',
      fzd_cep: '',
      talhoes: [
        {
          tlh_apelido: '',
          tlh_media_producao: 0,
          tlh_saude: 'Saudável',
          latitude: 0,
          longitude: 0
        },
        {
          tlh_apelido: '',
          tlh_media_producao: 0,
          tlh_saude: 'Saudável',
          latitude: 0,
          longitude: 0
        },
      ]
    },
    {
      fzd_id: 2,
      prd_id: 1,
      fzd_nome: '',
      fzd_cep: '',
      talhoes: [
        {
          tlh_apelido: '',
          tlh_media_producao: 0,
          tlh_saude: 'Saudável',
          latitude: 0,
          longitude: 0
        },
        {
          tlh_apelido: '',
          tlh_media_producao: 0,
          tlh_saude: 'Saudável',
          latitude: 0,
          longitude: 0
        },
      ]
    }
  ])

  return (
    !loading ?
    <View style={stylesListagem.container}>
      <Text style={{fontSize:16, color:'black'}}></Text>

      <ScrollView>
        <View>
          {
            lista.map((fazenda,fzd_index) => {

              return (
                <View style={{flexDirection: 'column'}} key={fzd_index}>
                  <Text>
                    {fazenda.fzd_nome}
                  </Text>
                  <Text>
                    {fazenda.fzd_cep}
                  </Text>

                  <View>
                    {
                      fazenda.talhoes.map((talhao,tlh_index) => {
                        <View key={tlh_index}>
                          <Text>
                            {talhao.tlh_apelido}
                          </Text>
                        </View>
                      })
                    }
                  </View>

                </View>
              );
            })
          }
        </View>
      </ScrollView>

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


  /* 
  const [talhao,setTalhao]=useState({})
  const [prepared,setPrepared]=useState(false)
  let talhaoApelido = talhao.apelido
  let talhaoSaude = talhao.saude
  let talhaoInfo = route.params
  useEffect(() => {
    if(talhaoInfo !== undefined && talhaoInfo !== ''){
      setTalhao(talhaoInfo)
      setPrepared(true)
    }
    },[talhaoInfo]
  )
  const [list,setList]=useState([])
  let key = list.length

  useEffect(()=>{
    if(prepared){  
      list.push({name: talhaoApelido, key: ++key})
      setList([...list])
    }
  },[prepared])

      

  const dados = [
    {key: `${talhaoApelido}`}
  ]
  console.log(talhaoApelido)
  return (
    <View style={styles.container}>

    </View>
  );
   */
}; 


export { Fazenda, Talhao, Listagem };
