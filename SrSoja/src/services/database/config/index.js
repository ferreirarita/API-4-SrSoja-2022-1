import * as SQLite from 'expo-sqlite'
import models from '../models'

/**@override */
export default async function openDatabase() {
    /*
    if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
        await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
    }
    await FileSystem.downloadAsync(
        Asset.fromModule(require(pathToDatabaseFile)).uri,
        FileSystem.documentDirectory + 'SQLite/myDatabaseName.db'
    );
    */
    try {
        const database = SQLite.openDatabase('SrSoja.db')

        database.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () => {
            //console.log('Temos estrangeiros')
        })

        /**Cria as tabelas, se não existirem */
        database.transaction(tx => {
            tx.executeSql(models)
        })

        return database
    }
    catch (error) {
        console.log(`Erro: ${error}`)
        return null
    }
<<<<<<< HEAD
}
=======
}

>>>>>>> sistema
