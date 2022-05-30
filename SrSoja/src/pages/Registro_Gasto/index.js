import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import styles from './styles'
import LoadingScreen from '../../components/LoadingScreen'
import { AddButton } from '../../components/Button'

import getContext from '../../hooks'
import { addGasto, upGasto, getGasto, delGasto } from '../../services/database/controllers/Gasto'
import { getProdutor } from '../../services/database/controllers/Produtor'

export default function Registro_Gasto() {
    const { database, dataResult, setResult, user } = getContext()
    const [ loading, setLoading ] = useState(false)

    const [ itens, setItens ] = useState([])

    
    
    useEffect(() => {
        //console.log('-->',dataResult)
        if(dataResult !== null) {
            setItens(JSON.parse(dataResult))
            //console.log(dataResult)
        }
        
    },[dataResult])
    

    useEffect(() => {
        setLoading(true)
        /* */
        getGasto(database,{prd_id:3},setResult)
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

    let date = new Date()
    console.log(date.getDate())
    
    const Gastos = () => {
        return (
            typeof itens !== 'null' && 'undefined' ? 
            
            <View>
                {
                    itens.map((item,index) => {
                        let date = new Date(item.hg_data)
                        return (
                            <View key={index} style={styles.item}>
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
                        )
                    })
                }
            </View>
            :
            <Text style={styles.title}>
                Nenhum item salvo
            </Text>
        )
    }

    return (
        !loading ?
        <ScrollView>
            <View style={styles.table}>
                <Gastos />
            </View>
        </ScrollView>
        :
        <LoadingScreen />
    )
}