//import * as SQLite from 'expo-sqlite'
import React from "react"
import openDatabase from "../config"

export default class ProdutorController extends React.Component {
    /**
     * Problemas em usar o this.state
     * 
     * Erro: 
     * undefined is not an object (evaluating '_this.state = {
     *     data: []
     * }')
     */
    constructor() {
        this.state = {
            data: []
        }
        this.getProdutor.bind(this.state)
    }

    async addProdutor(args) {
        const database = openDatabase()
        let { prd_id, prd_nome, prd_email, prd_senha } = args
        if(typeof prd_id === 'undefined' || prd_id == 0) {
            database.transaction(
                tx => {
                    tx.executeSql(
                        `INSERT INTO produtor (prd_nome,prd_email,prd_senha) VALUES (?,?,?)`,
                        [prd_nome,prd_email,prd_senha],
                        (_,resultSet) => {
                            //teste
                            console.log('resultSet.insertId: ' + resultSet.insertId)

                            return `Novo Produtor '${prd_nome}'`
                        },
                        error => console.error(`Erro ao adicionar: ${error}`)
                    )
                },
                error => console.log(`Erro: ${error}`)
            )
        } else {
            database.transaction(
                tx => {
                    tx.executeSql(
                        `UPDATE Produtor SET
                        prd_nome = ?,
                        prd_email = ?,
                        prd_senha = ?
                        WHERE prd_id = ?`,
                        [prd_nome,prd_email,prd_senha,prd_id],
                        (_,resultSet) => {
                            //teste
                            console.log(`resultSet.rowsAffected: ${resultSet.rowsAffected}`)

                            return `Produtor atualizado: ${resultSet.rowsAffected}x`
                        },
                        error => console.log(`Erro ao atualizar: ${error}`)
                    )
                },
                error => console.log(`Erro: ${error}`)
            )
        }
    }

    async getProdutor(prd_id) {
        
        try {
            
            openDatabase().then(database => {
                if(typeof prd_id !== 'undefined' && prd_id != 0) {
                    database.transaction(
                        tx => {
                            tx.executeSql(
                                `SELECT prd_nome,prd_email,prd_senha FROM produtor
                                WHERE prd_id = ?`,
                                [prd_id],
                                (_,{ rows: { _array } }) => {
                                    //teste
                                    console.log(JSON.stringify(_array))

                                    this.setState({ data: JSON.stringify(_array) })
                                    console.log(`1º: ${this?.state}`)

                                    /*
                                    result = JSON.stringify(_array)
                                    console.log('->'+result)
                                    */
                                },
                                error => console.log(`Erro ao obter: ${error}`)
                            )
                        },
                        error => console.log(error)
                    )

                    console.log(`2º: ${this?.state}`)

                } else {
                    database.transaction(
                        tx => {
                            tx.executeSql(
                                `SELECT prd_nome,prd_email,prd_senha FROM produtor`,
                                [],
                                (_,{ rows: { _array } }) => {
                                    //teste
                                    console.log(JSON.stringify(_array))

                                    result = JSON.stringify(_array)
                                },
                                error => console.log(`Erro ao obter: ${error}`)
                            )
                        },
                        error => console.log(error)
                    )
                }

            }).then((e) => {console.log(e)})

            
        }
        catch (error) { 
            console.log(`Erro no banco: ${error}`)
            return error
        }

        /*
        try {
            const database = openDatabase()

            if(typeof prd_id !== 'undefined' && prd_id != 0) {
                database.transaction(
                    tx => {
                        tx.executeSql(
                            `SELECT prd_nome,prd_email,prd_senha FROM produtor
                            WHERE prd_id = ?`,
                            [prd_id],
                            (_,{ rows: { _array } }) => {
                                //teste
                                console.log(JSON.stringify(_array))

                                return JSON.stringify(_array)
                            },
                            error => console.log(`Erro ao obter: ${error}`)
                        )
                    },
                    error => console.log(error)
                )

            } else {
                database.transaction(
                    tx => {
                        tx.executeSql(
                            `SELECT prd_nome,prd_email,prd_senha FROM produtor`,
                            [],
                            (_,{ rows: { _array } }) => {
                                //teste
                                console.log(JSON.stringify(_array))

                                return JSON.stringify(_array)
                            },
                            error => console.log(`Erro ao obter: ${error}`)
                        )
                    },
                    error => console.log(error)
                )
            }

        }
        catch (error) { 
            console.log(`Erro no banco: ${error}`)
            return error
        }
        */
    }
}