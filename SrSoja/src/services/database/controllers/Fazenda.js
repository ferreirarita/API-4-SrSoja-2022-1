
/**
 * Adiciona uma nova fazenda (fzd_id == 0) ou
 * atualiza uma existente (fzd_id != 0).
 * @param {WebSQLDatabase*} database 
 * @param {{
 *      fzd_id: integer,
 *      prd_id: integer,
 *      fzd_nome: string,
 *      fzd_cep: string,
 *      fzd_estado: string,
 *      fzd_municipio: string
 * }} args 
 * @param {useState} setResult 
 */
async function addFazenda(database, args, setResult) {
    let { fzd_id, prd_id, fzd_nome, fzd_cep, fzd_estado, fzd_municipio } = args;
    if (typeof fzd_id === 'undefined' || fzd_id == 0) {
        database.transaction(
            tx => {
                tx.executeSql(
                    `INSERT INTO fazenda (prd_id, fzd_nome, fzd_cep, fzd_estado, fzd_municipio) 
                    VALUES (?,?,?,?,?)`,
                    [prd_id, fzd_nome, fzd_cep, fzd_estado, fzd_municipio],
                    (_, resultSet) => {
                        setResult(`Nova Fazenda '${fzd_nome}'`)
                    },
                    (_, error) => console.error(error)
                )
            },
            (_, error) => console.log(error)
        );
    } else {
        database.transaction(
            tx => {
                tx.executeSql(
                    `UPDATE fazenda SET
                    prd_id = ?,
                    fzd_nome = ?,
                    fzd_cep = ?,
                    fzd_estado = ?,
                    fzd_municipio = ?,
                    WHERE fzd_id = ?`,
                    [prd_id, fzd_nome, fzd_cep, fzd_estado, fzd_municipio, fzd_id],
                    (_, resultSet) => {
                        setResult(`Fazenda atualizada`)
                    },
                    error => console.log(`Erro ao atualizar: ${error}`)
                )
            },
            error => console.log(`Erro: ${error}`)
        )
    }
}

/**
 * Retorna todas as fazendas de um produtor (prd_id != 0) ou
 * uma informada (fzd_id != 0).
 * @param {WebSQLDatabase} database 
 * @param {{fzd_id: integer, prd_id: integer}} args 
 * @param {useState} setResult 
 */
async function getFazenda(database, args, setResult) {
    let { fzd_id, prd_id } = args
    if(typeof prd_id !== 'undefined' && prd_id != 0) {
        database.transaction(
            tx => {
                tx.executeSql(
                    `SELECT * FROM fazenda
                    WHERE prd_id = ?`,
                    [prd_id],
                    (_,{ rows: { _array } }) => {
                        setResult(JSON.stringify(_array))
                    },
                    error => console.log(`Erro ao obter: ${error}`)
                )
            },
            error => console.log(error)
        )

    } else if (typeof fzd_id !== 'undefined' && fzd_id != 0) {
        database.transaction(
            tx => {
                tx.executeSql(
                    `SELECT * FROM fazenda
                    WHERE fzd_id = ?`,
                    [fzd_id],
                    (_,{ rows: { _array } }) => {
                        setResult(JSON.stringify(_array[0]))
                    },
                    error => console.log(`Erro ao obter: ${error}`)
                )
            },
            error => console.log(error)
        )

    } else {
        console.log('Nenhuma fazenda informada')
    }
}

/**
 * Deleta a fazenda informada.
 * @param {WebSQLDatabase} database 
 * @param {{fzd_id: integer}} args 
 * @param {useState} setResult 
 */
async function delFazenda(database, args, setResult) {
    let { fzd_id } = args
    database.transaction(
        tx => {
            tx.executeSql(
                `DELETE FROM fazenda WHERE fzd_id = ?`,
                [fzd_id],
                (_,resultSet) => {
                    setResult(`Fazenda deletada`)
                },
                error => console.log(`Erro ao deletar: ${error}`)
            )
        }
    )
}

export {
    addFazenda,
    getFazenda,
    delFazenda
}