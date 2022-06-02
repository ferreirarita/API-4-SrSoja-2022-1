import React, { createContext, useState, useEffect } from "react"
import openDatabase from '../services/database/config'
import { addProdutor, login, getProdutor } from '../services/database/controllers/Produtor'
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

    useEffect(async () => {
        if(user?.error)
            console.log(user.error)
        else if(user?.prd_id !== undefined) {
            console.log('@chegou um usuario:',JSON.stringify(user),'@')
            await Store.setItemAsync('user',JSON.stringify(user))
        }
    },[user])

    async function logIn(email, password) {
        if(email === '') {
            setUser({ error: 'Informe um e-mail' })
        }
        else if(password === ''){
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

    async function logOut() {
        setUser({})
        await Store.deleteItemAsync('user')
    }
    
    async function logUp(name, email, pass, passConfirm) {
        if(name === '') 
            setUser({ error: 'Informe um nome' })
        
        else if(email === '') 
            setUser({ error: 'Informe um e-mail' })
        
        else if(pass === '')
            setUser({ error: 'Informe a senha' })
        
        else if(passConfirm === '')
            setUser({ error: 'Confirme a senha' })
        
        else if(pass !== passConfirm)
            setUser({ error: 'Senhas diferentes' })
        else try {
            addProdutor(
                database,
                {
                    prd_nome: name,
                    prd_email: email,
                    prd_senha: pass
                },
                setUser
            )
        } catch (e) {
            console.error(`Erro: ${e}`)
        }
    }

    return (
        <ThisContext.Provider value={
            { database, dataResult, setResult, user, setUser, logIn, logOut, logUp }
        }>
            { children }
        </ThisContext.Provider>
    )
}

export {
    ThisContext,
    Context
}