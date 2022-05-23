import React, { createContext, useState, useEffect } from "react"
import openDatabase from '../services/database/config'
import { addProdutor, login } from '../services/database/controllers/Produtor'
import * as Store from 'expo-secure-store'
import { Alert } from "react-native"

const ThisContext = createContext()

const Context = ({ children }) => {

    // Database
    const [ database, setDatabase ] = useState(null)
    const [ dataResult, setResult ] = useState(null)

    // Login data
    const [ user, setUser ] = useState({})

    useEffect(() => {
        async function loadStorageData() {
            const storageUser = await Store.getItemAsync('user')
            if(storageUser) {
                setUser(JSON.parse(storageUser))
            }
        }

        loadStorageData()
        openDatabase().then(r => setDatabase(r))
        
    }, [])

    

    /*
    useEffect(() => {
        async function loadStorageData() {
            const storageToken = await Store.getItemAsync('token')
            if(storageToken)
                setToken(storageToken)
        }

        loadStorageData()
    }, [database])
    */

    /*
    useEffect(async () => {
        console.log('Eu sou o token:',token)
        //await Store.setItemAsync('token', `${token}`)    
        
    }, [token])
    */

    async function defToken(token) {
        console.log('Olha o token:',token)
        setToken(token)
        await Store.setItemAsync('token', `${token}`)
    }

    useEffect(async () => {
        if(user?.error)
            console.log(user.error)
        else if(user?.prd_id !== undefined) {
            console.log('@chegou um usuario:',user?.prd_id,'@')
            await Store.setItemAsync('user',JSON.stringify(user))
        }
            
        /*
        setToken(user?.prd_id)
        await Store.setItemAsync('token', 'teste')
        */
    },[user])

    async function logIn(email, password) {
        if(email === '') {
            //Alert.alert('Informe um e-mail')
            setUser({ error: 'Informe um e-mail' })
        }
        else if(password === ''){
            //Alert.alert('Informe a senha')
            setUser({ error: 'Informe a senha' })
        }

        else try {
            login(
                database,
                {
                    email,
                    password
                },
                setUser
            )

        } catch (e) {
            console.error(`Erro: ${e}`)
        }
    }

    /** */
    async function singOut() {
        setUser({})
        await Store.deleteItemAsync('token')
    }
    /** */
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
            { database, dataResult, setResult, user, setUser, logIn, singOut, singUp }
        }>
            { children }
        </ThisContext.Provider>
    )
}

export {
    ThisContext,
    Context
}