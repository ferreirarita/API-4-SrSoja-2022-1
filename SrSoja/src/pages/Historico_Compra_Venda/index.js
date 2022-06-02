import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import LoadingScreen from '../../components/LoadingScreen'
import { AddButton, CancelButton, NextButton } from '../../components/Button'

import getContext from '../../hooks'
import { addGasto, upGasto, getGasto, delGasto } from '../../services/database/controllers/Gasto'


const Compra = () => {
    const { database, dataResult, setResult, user } = getContext()
    const [ loading, setLoading ] = useState(false)

    const [ itens, setItens ] = useState([])
    const [ selectedItem, setSelectedItem ] = useState()

    useEffect(() => {
        //console.log('-->',dataResult)
        if(dataResult !== null) {
            //setItens(JSON.parse(dataResult))
            setItens([
                {
                    hg_data: 1654107622934, 
                    hg_nome: 'Gasto super ultra mega desnecessário',
                    hg_valor: 30.50
                },
                {
                    hg_data: 1654107655555, 
                    hg_nome: 'um gasto ai',
                    hg_valor: 10
                },
                {
                    hg_data: 1654107621234, 
                    hg_nome: 'drogas',
                    hg_valor: 99.99
                },
                {
                    hg_data: 1654107629243, 
                    hg_nome: 'outro gasto aqui',
                    hg_valor: 100.01
                },
                {
                    hg_data: 1654107643922, 
                    hg_nome: '...',
                    hg_valor: 0
                }
            ])
            //console.log(dataResult)
        }
        
    },[dataResult])
    

    useEffect(() => {
        setLoading(true)
        /* */
        getGasto(database,{prd_id:user?.prd_id},setResult)
        setLoading(false)

        /*
        let date = new Date()
        date.toLocaleString

        /*
        addGasto(
            database,{
                prd_id: user.prd_id,
                hg_nome: `Gasto #2`,
                hg_valor: 55.5,
                hg_descr: `Estou descrevendo este item`
            },
            setResult
        )
        /*
        upGasto(
            database,{
                hg_data: '2022-05-30T17:53:08',
                prd_id: user.prd_id,
                hg_nome: 'Um Novo Super Ultra Mega Plus Nome!',
                hg_valor: 190.0,
                hg_descr: `Decrição mais do que descrita`
            },
            setResult
        )
        /*
        getGasto(
            database,{
                prd_id: user.prd_id
            },
            setResult
        )

        getGasto(
            database,{
                hg_data: '2022-05-30T18:02:22',
                prd_id: user.prd_id
            },
            setResult
        )
        /*
        delGasto(
            database,{
                hg_data: '2022-05-30T18:02:22',
                prd_id: user.prd_id
            },
            setResult
        )
        /**/
        
    },[])
    
    const RenderOne = () => {
        const index = selectedItem?.index ?? -1
        const item = selectedItem?.item ?? {
            hg_nome: '', hg_valor: '', hg_descr: '',
            hg_data: new Date().toISOString().split('.')[0]
        }
        let date = new Date(item.hg_data)

        const [ nome, setNome ] = useState(item.hg_nome)
        const [ valor, setValor ] = useState(item.hg_valor)
        const [ descr, setDescr ] = useState(item.hg_descr)

        return(
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
                                    `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} -`+
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
        )
    }

    const addItem = () => {
        /*
        adiciona o item ao banco
        */
        console.log('eu não faço nada \'-\'')
    }

    const removeItem = () => {
        /*
        remove o item do banco
        */
       console.log('eu não faço nada \'-\'')
    }

    const RenderList = () => {
        return (
            typeof itens !== 'null' && itens[0]?.hg_data ? 
            
            <ScrollView>
                <View style={styles.table}>
                    {
                        itens.map((item,index) => {
                            let date = new Date(item.hg_data)
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
                                                {item.hg_nome}
                                            </Text>
                                        </View>
                                        <View style={styles.subItem}>
                                            <Text style={styles.subName}>
                                                {
                                                    `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} -`+
                                                    ` ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
                                                }
                                            </Text>
                                            <Text style={styles.subName}>
                                                R$ {item.hg_valor}
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
            <AddButton 
                onPress={()=>addItem()}
                buttonStyle={styles.buttonRight}
                size={64}
            />
            <CancelButton 
                onPress={()=>removeItem()}
                buttonStyle={styles.button}
                size={64}
            />
            <NextButton 
                onPress={()=>setSelectedItem()}
                buttonStyle={styles.buttonLeft}
                size={64}
            />
        </SafeAreaView>
        :
        <LoadingScreen />
    )

    // const navigation = useNavigation();
    // return (
    //     <SafeAreaView style={{flex:1}}>
    //         <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
    //             <Text>Tela de Histórico de Compra</Text>
    //             <TouchableOpacity style={{marginTop:20}} onPress={() => navigation.navigate('Home')}>
    //                 <Text>Visualizar</Text>
    //             </TouchableOpacity>
    //         </View>
    //     </SafeAreaView>
    // );
}

const Venda = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
                <Text>Tela de Histórico de Venda</Text>
                <TouchableOpacity style={{marginTop:20}} onPress={() => navigation.navigate('Home')}>
                    <Text>Visualizar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
export { Compra, Venda }