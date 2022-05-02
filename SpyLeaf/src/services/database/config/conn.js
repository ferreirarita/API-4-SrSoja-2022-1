import SQLite from 'react-native-sqlite-storage'

export default function getConnection() {
    SQLite.openDatabase(
        'SrSoja.db',
        '1.0',
        'SrSojaDB'
    )
}