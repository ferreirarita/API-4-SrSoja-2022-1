import getConnection from "../config"

export default class ProdutorController {

    constructor() {
        this.db = getConnection()
    }

    async addProdutor(args) {
        let { prd_id, prd_nome, prd_email, prd_senha } = args
        if(typeof prd_id === 'undefined' || prd_id == 0) {
            return await this.db.transaction(tx => {
                tx.executeSql(
                    `INSERT INTO Produtor (prd_nome,prd_email,prd_senha)
                    VALUES ('${prd_nome}','${prd_email}','${prd_senha}')`
                )
            }, error => console.error(error))
        } else {
            return await this.db.transaction(tx => {
                tx.executeSql(
                    `UPDATE Produtor SET
                    prd_nome = ${prd_nome},
                    prd_email = ${prd_email},
                    prd_senha = ${prd_senha}
                    WHERE prd_id = ${prd_id}`
                )
            }, error => console.log(error))
        }
    }

    async getProdutor(prd_id) {
        if(typeof prd_id !== 'undefined' && prd_id != 0) {
            return await this.db.transaction(tx => {
                tx.executeSql(
                    `SELECT prd_nome,prd_email,prd_senha FROM Produtor
                    WHERE prd_id = ${prd_id}`
                )
            }, error => console.log(error))

        } else {
            return await this.db.transaction(tx => {
                tx.executeSql(
                    `SELECT prd_nome,prd_email,prd_senha FROM Produtor`
                )
            }, error => console.log(error))
        }
    }
}