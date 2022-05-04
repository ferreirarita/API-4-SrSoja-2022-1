import SQLite from 'react-native-sqlite-storage'
SQLite.DEBUG(true)
SQLite.enablePromise(true)

import getConnection from './config'
import { tables } from './models'

import ProdutorController from './controllers'

class Database {
    /*
    constructor() {
        this.db = getConnection()
        this.initDB()
    }
    */

    initDB() {
        const db = getConnection()
        db.exec([{sql: 'PRAGMA foreign_keys = ON;', args: []}], false, () => {})
        // Cria as tabelas
        db.transaction(tx => {
            tables.forEach(sql => {
              tx.executeSql(sql)  
            })
        }, error => console.log(error))
    }

    /*
    getDatabase() {
        return this.db
    }
    */
}

const database = new Database()

export default { database, ProdutorController }

/*
export default SQLite.openDatabase(
    {
        name: 'SrSojaDB',
        location: 'default'
    }, () => {},
    error => console.log(error)
)*/