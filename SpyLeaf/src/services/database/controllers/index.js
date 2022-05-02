import Database from '../config'
//Database.initDB()

import ProdutorController from "./Produtor"
const Produtor = new ProdutorController(Database.db)

export default { Produtor }