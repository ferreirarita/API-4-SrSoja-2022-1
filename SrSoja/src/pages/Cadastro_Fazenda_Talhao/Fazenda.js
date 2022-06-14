import React, { useState, useEffect } from "react";
import {View,Text,TextInput,SafeAreaView,TouchableOpacity,ScrollView,Alert} from "react-native";
import LoadingScreen from "../../components/LoadingScreen";
import {  stylesFazenda } from "./styles";
import getContext from '../../hooks'
import { addFazenda } from "../../services/database/controllers/Fazenda";
//Icon
import MapIcon from "../../assets/Icons/map-fill";
import SearchIcon from "../../assets/Icons/search";
//buttons
import {CheckButton, CancelButton, AddButton, NextButton} from "../../components/Button";

const Fazenda = ({navigation, route}) => {
    const { database, dataResult, setResult, user } = getContext();
    const [ loading, setLoading ] = useState(false)
    const [ save, setSave ] = useState(false)
    // mudar depois
    const [ selectedFzd, setSelectedFzd ] = useState(route.params?.fazenda ?? {
        fzd_id: undefined, prd_id: user.prd_id, fzd_nome: '', fzd_cep: ''
    })

    const [fazenda, setFazenda] = useState(selectedFzd.fzd_nome);
    const [cep, setCep] = useState(selectedFzd.fzd_cep.replace('-', ''));
    const [uf, setUf] = useState("");
    const [municipio, setMunicipio] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [bairro, setBairro] = useState("");
    const [coord,setCoord] = useState({})

    useEffect(()=>{
        setSave(false)
    },[fazenda,cep])

    let coordResult = route.params?.coordenadas
    useEffect(() => {
        if(coordResult !== undefined && coordResult !== ''){
            setCoord(coordResult)
        }
    },[coordResult])

    useEffect(()=>{
        if(coord !== {}) {
        setCep(coord.cep)
        setMunicipio(coord.subregion)
        setLogradouro(coord.street)
        setBairro(coord.district)
        setUf(coord.region)
        }
    },[coord])

    useEffect(()=>{
        if(loading) {
            if(dataResult !== null && {}) {
                setSelectedFzd(dataResult)
                setLoading(false)
                setSave(true)
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
                                )
                                .then(() => navigation.navigate('Listagem'));
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
}

export default Fazenda