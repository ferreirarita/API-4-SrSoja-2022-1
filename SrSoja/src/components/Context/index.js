import React, { createContext, useState, useEffect } from "react"
import openDatabase from '../../services/database/config'
import { addProdutor, login } from '../../services/database/controllers/Produtor'
import * as Store from 'expo-secure-store'

const ThisContext = createContext()

const Context = ({ children }) => {

    // Database
    const [ database, setDatabase ] = useState(null)
    const [ dataResult, setResult ] = useState(null)

    // Login data
    // Obs.: token === Produtor.prd_id
    const [ token, setToken ] = useState(null)
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        openDatabase().then(r => setDatabase(r))
    }, [])

    useEffect(() => {
        async function loadStorageData() {
            const storageToken = await SecureStore.getItemAsync('token')
            if(storageToken)
                setToken(storageToken)
            setLoading(false)
        }

        loadStorageData()
    }, [database])

    async function defToken() {
        setToken(dataResult)
        await SecureStore.setItemAsync('token', token)
        setLoading(false)
    }

    async function singIn(email, password) {
        if(email === '') {
            Alert.alert('Informe um e-mail')
            return false
        }
        else if(password === ''){
            Alert.alert('Informe a senha')
            return false
        }

        try {
            login(
                database,
                {
                    email,
                    password
                },
                setResult
            )
        } catch (e) {
            console.error(`Erro: ${e}`)
        }
        

        useEffect(() => {
            if(dataResult !== null) 
                defToken()
        }, [dataResult])

    }

    async function singOut() {
        setToken(null)
        await SecureStore.deleteItemAsync('token')
    }

    async function singUp(name, email, password) {
        if(name === '') {
            Alert.alert('Informe um nome')
            return false
        }
        else if(email === '') {
            Alert.alert('Informe um e-mail')
            return false
        }
        else if(password === ''){
            Alert.alert('Informe a senha')
            return false
        }
        
        addProdutor(
            database,
            {
                prd_nome: name,
                prd_email: email,
                prd_senha: password
            },
            setResult
        )

        useEffect(() => {
            if(dataResult !== null) 
                defToken()
        }, [dataResult])
    }

    return (
        <ThisContext.Provider value={
            { database, dataResult, setResult, token, loading, singIn, singOut, singUp }
        }>
            { children }
        </ThisContext.Provider>
    )
}

export default createContext()