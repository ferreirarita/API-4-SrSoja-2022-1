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

const Listagem =({navigation, route})=>{
    const { database, dataResult, setResult, user } = getContext()
    const [ loading, setLoading ] = useState(false)
  
    const [ fazendas, setFazendas ] = useState(null)
    const [ talhoes, setTalhoes ] = useState(null)
  
    // mudar depois
    const [ lista, setLista ] = useState([])

    const update = () => {
        if(user){
            getFazenda(
                database,
                {
                    prd_id: user.prd_id
                },
                setFazendas
            )
            .finally(() => {
                updateTalhao()
            })
        }
    }

    const updateTalhao = () => {
        if(fazendas!==null){
            getTalhao(
                database,
                {
                    fzd_id: fazendas.map(({fzd_id}) => fzd_id)
                },
                setTalhoes
            )
            .finally(() => {
                updateLista()
            })
        }
    }

    const updateLista = () => {
        if(fazendas && talhoes){
            console.log('Fazendas:',fazendas)
            console.log('Talhões:',talhoes)

            let list = []
            fazendas.map((item,index) => {
                let aux = [];
                talhoes.map((subitem,subindex) => {
                    if(subitem.fzd_id == index + 1)
                        aux.push(subitem)
                })
            
                list.splice(index,0,{...item,talhoes:aux})
            })

            setLista(list)
            setLoading(false)
        }
        
    }

    useEffect(async ()=>{
        setLoading(true)
        listAll(
            database,
            {prd_id:user.prd_id},
            setResult
        )
    },[])

    useEffect(() => {
        if(dataResult !== null){
            dataResult?.length ?
            setLista(dataResult)
            : typeof dataResult === 'object' ?

            setLista(lista.concat(dataResult))
            : console.log(dataResult)
            setLoading(false) 
        }
    },[dataResult])

    // console.log('eu sou:',lista)
    
    const renderSubList = ({ item }) => {
      return (
        <TouchableOpacity
            onPress={()=>{
              navigation.navigate({
                name: "Fazenda",
                params: {
                  fazenda: item.fzd_id
                }
              })
            }}
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
      <View style={{...stylesListagem.bodyRowBox,borderRadius: 5}}>
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
          { item.talhoes &&
            <FlatList 
                data={item.talhoes}
                renderItem={renderSubList}
                keyExtractor={item => item.tlh_id}
            />
        }
        </View>
  
      </View>
      )
    }
  
    // console.log(lista)
    return (
      !loading ?
      <View style={stylesListagem.container}>
        
        <View style={stylesListagem.body}>
          {lista &&
            <FlatList
            data={lista}
            renderItem={renderList}
            keyExtractor={item => item.fzd_id}
          />}
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

export default Listagem