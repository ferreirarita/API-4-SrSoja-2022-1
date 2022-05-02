import SQLite from 'react-native-sqlite-storage'
SQLite.DEBUG(true)
SQLite.enablePromise(true)

import getConnection from './conn'
import { tables } from '../models'


class Database {
    constructor() {
        this.db = getConnection()
    }

    initDB() {
        this.db.exec([{sql: 'PRAGMA foreign_keys = ON;', args: []}], false, () => {})
        // Cria as tabelas
        this.db.transaction(tx => {
            tables.forEach(sql => {
              tx.executeSql(sql)  
            })
        }, error => console.log(error))
    }
}

export default { Database, getConnection }

/*
export default SQLite.openDatabase(
    {
        name: 'SrSojaDB',
        location: 'default'
    }, () => {},
    error => console.log(error)
)*/