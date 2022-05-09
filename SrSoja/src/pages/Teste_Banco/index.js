import React, { useCallback, useEffect, useState } from 'react'
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native'
import style from './styles'

import { CheckButton } from '../../components/Button'
import Check from '../../assets/check'

//import * as SQLite from 'expo-sqlite'
import Database from '../../services/database'


function connect() {
    /*
    const database = SQLite.openDatabase('SrSoja.db')

    database.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
        console.log('Temos estrangeiros')
    )

    database.transaction(tx => {
        tx.executeSql(`
            CREATE TABLE IF NOT EXISTS produtor (
                prd_id INTEGER PRIMARY KEY AUTOINCREMENT,
                prd_nome TEXT NOT NULL,
                prd_email TEXT NOT NULL,
                prd_senha TEXT NOT NULL
            )
        `)
    })

    return database
    */
}


export default function Teste_Banco() {
    const [teste, setTeste] = useState('vazio')
    const [ text , setText ] = useState('oi')

    //ProdutorController.getProdutor(1).then(e => setTeste(e))

    
    

    /*
    const x = () => {
        const database = connect()

        /
        database.transaction(tx => {
            tx.executeSql(
                `INSERT INTO produtor (prd_nome,prd_email,prd_senha) VALUES (?,?,?)`,
                ['Robson','robson@email.com','123456'],
                (_,resultSet) => {
                    console.log(`Robson nº${resultSet.insertId} adicionado`)
                },
                error => console.log(`Erro ao criar o Robson: ${error}`)
            )
        })
        

        database.transaction(tx => {
            tx.executeSql(
                `SELECT * FROM produtor WHERE prd_nome = ?`,
                ['Robson'],
                (_,{ rows: { _array } }) => {
                    console.log(`--select: ${JSON.stringify(_array)}`)
                    setTeste(JSON.stringify(_array))
                }
            )
        })
        *

    }
    */

    useEffect(() => {
        //x()
        try {
            const produtor = new Database.produtor
            /*
            const result = produtor.getProdutor(1)
            setTeste(JSON.stringify(result))
            */
           //produtor.getProdutor(1).then(e => setTeste(e))
           
           produtor.getProdutor(1).then(e => console.log(e))
           //console.log(produtor.getProdutor(1))
        }
        catch (error) {
            console.log(error)
        }
    },[])

    //console.log(teste)

    return (
        <View>
            <Text style={style.textT}>{teste}</Text>
            <Text style={style.textT}>{typeof teste}</Text>
            <Text style={style.textS}>{text}</Text>
            <View style={style.row}>
                <CheckButton
                    onPress={() => setText('C')}
                    fill='#000'
                    color='#0f0'
                    size='64'
                    buttonStyle={style.button}
                    legend={'C'}
                />

                <CheckButton
                    onPress={() => setText('R')}
                    fill='#000'
                    color='#ffa500'
                    size='64'
                    buttonStyle={style.button}
                    legend={'R'}
                />

                <CheckButton
                    onPress={() => setText('U')}
                    fill='#000'
                    color='#fff'
                    size='64'
                    buttonStyle={style.button}
                    legend={'U'}
                />

                <CheckButton
                    onPress={() => setText('D')}
                    fill='#000'
                    color='#f00'
                    size='64'
                    buttonStyle={style.button}
                    legend={'D'}
                />
            </View>
        </View>
    )
}