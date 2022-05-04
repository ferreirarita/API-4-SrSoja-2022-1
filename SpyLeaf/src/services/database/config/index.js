import * as SQLite from 'expo-sqlite'

import { Produtor } from '../models'

const config = {
    database: 'SrSojaDB',
    driver: SQLite,
    entities: [ Produtor ],
    synchronize: true,
    type: 'expo'
}

export default config