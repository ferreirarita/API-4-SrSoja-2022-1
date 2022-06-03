
/**
 * Adiciona um novo registro de preço da soja.
 * @param {WebSQLDatabase*} database 
 * @param {{
 *      ppr_data: date,
 *      ppr_local: string,
 *      ppr_valor_saca: numeric,
 *      ppr_custo_grao: numeric
 * }} args 
 * @param {useState} setResult 
 */
async function addPreco(database, args, setResult) {
    let { ppr_data, ppr_local, ppr_valor_saca, ppr_custo_grao } = args;
    database.transaction(
        tx => {
            tx.executeSql(
                `INSERT INTO preco_produto (ppr_data, ppr_local, ppr_valor_saca, ppr_custo_grao) 
                VALUES (?,?,?)`,
                [ppr_data, ppr_local, ppr_valor_saca, ppr_custo_grao],
                (_, resultSet) => {
                    setResult(`Preços atualizados '${ppr_data}'`)
                },
                (_,error) => console.error(`Erro ao adicionar: ${error}`)
            )
        },
        error => console.error(`Erro: ${error}`)
    )
    
}

/**
 * Retorna o registro de preço da soja informado (ppr_data != 0),
 * os registros de um local específico (ppr_local != null)
 * ou todos os registros salvos (ppr_data == 0; ppr_local == null).
 * @param {WebSQLDatabase} database 
 * @param {{ppr_data: date, ppr_local: string}} args 
 * @param {useState} setResult 
 */
async function getPreco(database, args, setResult) {
    let { ppr_data, ppr_local } = args
    if(typeof ppr_data !== 'undefined' && ppr_data != 0) {
        database.transaction(
            tx => {
                tx.executeSql(
                    `SELECT * FROM preco_produto
                    WHERE ppr_data = ?
                    ORDER BY ppr_data DESC`,
                    [ppr_data],
                    (_,{ rows: { _array } }) => {
                        setResult(JSON.stringify(_array))
                    },
                    (_,error) => console.error(`Erro ao obter: ${error}`)
                )
            },
            error => console.error(`Erro: ${error}`)
        )
    } else if(typeof ppr_local !== 'undefined' && ppr_local != null) {
        database.transaction(
            tx => {
                tx.executeSql(
                    `SELECT * FROM preco_produto
                    WHERE ppr_local = ?
                    ORDER BY ppr_data DESC`,
                    [ppr_local],
                    (_,{ rows: { _array } }) => {
                        setResult(JSON.stringify(_array))
                    },
                    (_,error) => console.error(`Erro ao obter: ${error}`)
                )
            },
            error => console.log(`Erro: ${error}`)
        )
    } else {
        database.transaction(
            tx => {
                tx.executeSql(
                    `SELECT * FROM preco_produto
                    ORDER BY ppr_data DESC`,
                    [],
                    (_,{ rows: { _array } }) => {
                        setResult(JSON.stringify(_array))
                    },
                    (_,error) => console.error(`Erro ao obter: ${error}`)
                )
            },
            error => console.log(`Erro: ${error}`)
        )
    }
    
}

/**
 * Deleta um registro de preço da soja informado.
 * @param {WebSQLDatabase} database 
 * @param {{ppr_data: date}} args 
 * @param {useState} setResult 
 * @deprecated
 */
async function delPreco(database, args, setResult) {
    let { ppr_data } = args
    database.transaction(
        tx => {
            tx.executeSql(
                `DELETE FROM preco_produto WHERE ppr_data = ?`,
                [ppr_data],
                (_,resultSet) => {
                    setResult(`Registro deletado`)
                },
                (_,error) => console.error(`Erro ao deletar: ${error}`)
            )
        }
    )
}

export {
    addPreco,
    getPreco,
    delPreco
}