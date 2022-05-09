import * as SQLite from 'expo-sqlite'

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
    return SQLite.openDatabase('SrSoja.db')
}

