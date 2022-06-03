import * as SQLite from 'expo-sqlite'
import models from '../models'
import FileSystem from 'expo-file-system'

/**@override */
export default async function openDatabase() {
    /*
    if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
        await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
    }
    await FileSystem.downloadAsync(
        Asset.fromModule(require(path)).uri,
        FileSystem.documentDirectory + 'SQLite/myDatabaseName.db'
    )*/
    
    
    try {
        const database = SQLite.openDatabase('SrSoja.db')

        database.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () => {
            //console.log('Temos estrangeiros')
        })

        /**Cria as tabelas, se não existirem */
        database.transaction(tx => {
            
            //tx.executeSql('drop table produtor;',[],(_,x)=>console.log(x),(_,e)=>console.log('drop erro',e))
            tx.executeSql(models.produtor)
            tx.executeSql(models.fazenda)
            tx.executeSql(models.talhao_saude)
            tx.executeSql(models.talhao)
            tx.executeSql(models.area_talhao)
            tx.executeSql(models.hist_gasto)
            tx.executeSql(models.hist_venda)
            /**/
            
        })

        return database
        
        
    }
    catch (error) {
        console.error(`Erro: ${error}`)
    }
}
