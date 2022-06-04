import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, SafeAreaView, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { AddButton, CancelButton, NextButton } from '../../components/Button'
import LoadingScreen from '../../components/LoadingScreen'
import { addVenda, upVenda, getVenda, delVenda } from '../../services/database/controllers/Venda'
import styles from './styles'
import getContext from '../../hooks'

export default function Venda() {
    const { database, dataResult, setResult, user } = getContext()
    const [ loading, setLoading ] = useState(false)

    const [ itens, setItens ] = useState([])
    const [ selectedItem, setSelectedItem ] = useState()

    const update = () => {
        getVenda(
            database,
            {
                prd_id: user?.prd_id
            },
            setResult
        )
        setSelectedItem()
    }

    useEffect(() => {
        if(loading) {
            // console.log(typeof dataResult,dataResult)
            if(dataResult !== null && []) {
                setItens(dataResult?.reverse())
                setLoading(false)
            }
        }
        
    },[dataResult])
    

    useEffect(() => {
        setLoading(true)
        update()
    },[])
    
    const RenderOne = () => {
        const index = selectedItem?.index ?? -1
        const item = selectedItem?.item ?? {
            hv_nome: '', hv_valor: '', hv_quant: '', hv_descr: '',
            hv_data: new Date()
        }
        let date = new Date(item.hv_data)

        const [ nome, setNome ] = useState(item.hv_nome)
        const [ valor, setValor ] = useState(item.hv_valor)
        const [ quant, setQuant ] = useState(item.hv_quant)
        const [ descr, setDescr ] = useState(item.hv_descr)

        return(
            <View style={{flex: 1}}>
                <ScrollView>
                    <View style={styles.table}>
                        <View style={styles.item}>
                            <View style={styles.headerItem}>
                                <Text style={styles.headerTag}>
                                    #{index + 1}
                                </Text>
                                <TextInput 
                                    style={styles.inputItemName}
                                    placeholder='Título'
                                    value={nome}
                                    onChangeText={setNome}
                                    multiline={true}
                                />
                            </View>
                            <View style={styles.subItem}>
                                <Text style={styles.subName}>
                                    {
                                        `${date.getDate()}/${date.getMonth() +1}/${date.getFullYear()} -`+
                                        ` ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
                                    }
                                </Text>

                                <View style={styles.groupSubItem}>
                                    <Text style={styles.groupSubName}>
                                        R$
                                    </Text>
                                    <TextInput 
                                        style={styles.inputItemName}
                                        placeholder='000.00'
                                        value={`${valor}`}
                                        onChangeText={setValor}
                                        keyboardType='decimal-pad'
                                    />
                                </View>

                                <View style={styles.groupSubItem}>
                                    <Text style={styles.groupSubName}>
                                        Quantidade
                                    </Text>
                                    <TextInput 
                                        style={styles.inputItemName}
                                        placeholder='0'
                                        value={`${quant}`}
                                        onChangeText={setQuant}
                                        keyboardType='decimal-pad'
                                    />
                                </View>

                                <View style={styles.groupSubItem}>
                                    <TextInput 
                                        style={{...styles.inputItemName,marginLeft: 20}}
                                        placeholder='Descrição'
                                        value={descr}
                                        onChangeText={setDescr}
                                        multiline={true}
                                    />
                                </View>

                            </View>
                        </View>
                    </View>
                </ScrollView>

                <AddButton 
                    onPress={()=>{
                        Alert.alert(
                            null,
                            `Salvar o item '${nome}'?`,
                            [
                                {
                                    text: "Sim",
                                    onPress: () => {
                                        index == -1 ?
                                        addItem({
                                            prd_id: user.prd_id,
                                            hv_nome: nome,
                                            hv_valor: valor === '' ? 0 : valor,
                                            hv_quant: quant === '' ? 0 : quant,
                                            hv_descr: descr
                                        })
                                        :
                                        upItem({
                                            hv_data: date.toISOString().split('.')[0],
                                            prd_id: user.prd_id,
                                            hv_nome: nome,
                                            hv_valor: valor === '' ? 0 : valor,
                                            hv_quant: quant === '' ? 0 : quant,
                                            hv_descr: descr
                                        })
                                    },
                                },
                                {
                                    text: "Não",
                                }
                            ]
                        )
                    }}
                    buttonStyle={styles.buttonRight}
                    size={64}
                />
                <CancelButton 
                    onPress={()=>{
                        Alert.alert(
                            null,
                            `Excluir o item '${nome}'?`,
                            [
                                {
                                    text: "Sim",
                                    onPress: () => {
                                        index == -1 ?
                                        setSelectedItem()
                                        :
                                        removeItem({
                                            hv_data: date.toISOString().split('.')[0],
                                            prd_id: user.prd_id
                                        })
                                        
                                    },
                                },
                                {
                                    text: "Não",
                                }
                            ]
                        )
                        
                        
                    }}
                    buttonStyle={styles.button}
                    size={64}
                />
                <NextButton 
                    onPress={()=>{
                        index == -1 ||
                        nome !== item.hv_nome || valor !== item.hv_valor || quant !== item.hv_quant || descr !== item.hv_descr ?
                        Alert.alert(
                            null,
                            `Deseja retornar à lista?\nAs informações deste item não serão salvas.`,
                            [
                                {
                                    text: "Sim",
                                    onPress: () => setSelectedItem()
                                },
                                {
                                    text: "Não",
                                }
                            ]
                        )
                        :
                        setSelectedItem()
                    }}
                    buttonStyle={styles.buttonLeft}
                    size={64}
                />
            </View>
        )
    }

    const addItem = (item) => {
        setLoading(true)
        addVenda(
            database,
            item,
            setResult
        )
        .finally(()=>{
            update()
        })
    }

    const upItem = (item) => {
        setLoading(true)
        upVenda(
            database,
            item,
            setResult
        )
        .finally(()=>{
            update()
        })
    }

    const removeItem = (item) => {
        setLoading(true)
        delVenda(
            database,
            item,
            setResult
        )
        .finally(()=>{
            update()
        })
    }

    const RenderList = () => {
        return (
            typeof itens !== 'null' && itens[0]?.hv_data ? 
            
            <ScrollView>
                <View style={styles.table}>
                    {
                        itens.map((item,index) => {
                            let date = new Date(item.hv_data)
                            return (
                                <TouchableOpacity key={index} onPress={()=>{
                                    setSelectedItem({index,item})
                                }}>
                                    <View  style={styles.item}>
                                        <View style={styles.headerItem}>
                                            <Text style={styles.headerTag}>
                                                #{index + 1}
                                            </Text>
                                            <Text style={styles.itemName}>
                                                {item.hv_nome}
                                            </Text>
                                        </View>
                                        <View style={styles.subItem}>
                                            <Text style={styles.subName}>
                                                {
                                                    `${date.getDate()}/${date.getMonth() +1}/${date.getFullYear()} -`+
                                                    ` ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
                                                }
                                            </Text>
                                            <Text style={styles.subName}>
                                                R$ {item.hv_valor}
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>

            </ScrollView>
            :
            <View style={{flex:1,justifyContent:'center', alignItems: 'center'}}>
                <Text style={styles.title}>
                    Nenhum item salvo
                </Text>
            </View>
        )
    }

    return (
        !loading ?
        !selectedItem ?
        <SafeAreaView style={{flex:1}}>
            <RenderList />
            <AddButton 
                onPress={()=>setSelectedItem({})}
                buttonStyle={styles.buttonRight}
                size={64}
            />
        </SafeAreaView>
        :
        <SafeAreaView style={{flex:1}}>
            <RenderOne />
        </SafeAreaView>
        :
        <LoadingScreen />
    )
}