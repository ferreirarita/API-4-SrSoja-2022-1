
/**
 * Adiciona um novo registro de produção.
 * @param {WebSQLDatabase*} database 
 * @param {{
 *      pro_data: date,
 *      tlh_id: integer,
 *      pro_total: numeric
 * }} args 
 * @param {useState} setResult 
 */
async function addProducao(database, args, setResult) {
    let { pro_data, tlh_id, pro_total } = args;
    database.transaction(
        tx => {
            tx.executeSql(
                `INSERT INTO producao (pro_data, tlh_id, pro_total) 
                VALUES (?,?,?)`,
                [pro_data, tlh_id, pro_total],
                (_, resultSet) => {
                    setResult(`Produção registrada '${pro_data}'`)
                },
                (_,error) => console.error(`Erro ao adicionar: ${error}`)
            )
        },
        error => console.error(`Erro: ${error}`)
    )
    
}

/**
 * Retorna todas as produções de um talhão.
 * @param {WebSQLDatabase} database 
 * @param {{tlh_id: integer}} args 
 * @param {useState} setResult 
 */
async function getProducao(database, args, setResult) {
    let { tlh_id } = args
    if(typeof tlh_id !== 'undefined' && tlh_id != 0) {
        database.transaction(
            tx => {
                tx.executeSql(
                    `SELECT * FROM producao
                    WHERE tlh_id = ?`,
                    [tlh_id],
                    (_,{ rows: { _array } }) => {
                        setResult(JSON.stringify(_array))
                    },
                    (_,error) => console.error(`Erro ao obter: ${error}`)
                )
            },
            error => console.error(`Erro: ${error}`)
        )
    } else {
        console.error(`Nenhuma Talhão informado`)
    }
    
}

/**
 * Deleta uma produção informada.
 * @param {WebSQLDatabase} database 
 * @param {{tlh_id: integer}} args 
 * @param {useState} setResult 
 * @deprecated
 */
async function delProducao(database, args, setResult) {
    let { tlh_id } = args
    database.transaction(
        tx => {
            tx.executeSql(
                `DELETE FROM producao WHERE tlh_id = ?`,
                [tlh_id],
                (_,resultSet) => {
                    setResult(`Produção deletada`)
                },
                (_,error) => console.error(`Erro ao deletar: ${error}`)
            )
        }
    )
}

export {
    addProducao,
    getProducao,
    delProducao
}