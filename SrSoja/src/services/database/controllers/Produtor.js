
/**
 * Adiciona um novo produtor (prd_id == 0) ou
 * atualiza um existente (prd != 1).
 * @param {WebSQLDatabase} database 
 * @param {{ 
 *      prd_id: string, 
 *      prd_nome: string, 
 *      prd_email: string, 
 *      prd_senha: string
 * }} args 
 * @param {useState} setResult 
 */
async function addProdutor(database, args, setResult) {
    let { prd_id, prd_nome, prd_email, prd_senha } = args;
    if (typeof prd_id === 'undefined' || prd_id == '') {
        prd_id = prd_nome + prd_email
        database.transaction(
            tx => {
                tx.executeSql(
                    `INSERT INTO produtor (prd_id, prd_nome,prd_email,prd_senha) VALUES (?,?,?,?)`,
                    [prd_id, prd_nome, prd_email, prd_senha],
                    (_, resultSet) => {
                        getProdutor(database,{prd_id},setResult)
                    },
                    (_,error) => console.error(`Erro ao adicionar: ${error}`)
                )
            },
            (_, error) => console.log(error)
        );
    } else {
        database.transaction(
            tx => {
                tx.executeSql(
                    `UPDATE produtor SET
                    prd_nome = ?,
                    prd_email = ?,
                    prd_senha = ?
                    WHERE prd_id = ?`,
                    [prd_nome, prd_email, prd_senha, prd_id],
                    (_, resultSet) => {
                        setResult(`Produtor atualizado '${prd_nome}'`)
                    },
                    (_,error) => console.error(`Erro ao atualizar: ${error}`)
                )
            },
            error => console.error(`Erro: ${error}`)
        )
    }
}

/**
 * Retorna todos os produtores (prd_id == 0) ou
 * um informado (prd_id != 0).
 * @param {WebSQLDatabase} database 
 * @param {{prd_id: integer}} args 
 * @param {useState} setResult 
 */
async function getProdutor(database, args, setResult) {
    let { prd_id } = args
    if(typeof prd_id !== 'undefined' && prd_id != 0) {
        database.transaction(
            tx => {
                tx.executeSql(
                    `SELECT * FROM produtor
                    WHERE prd_id = ?`,
                    [prd_id],
                    (_,{ rows: { _array } }) => {
                        setResult(_array[0])
                    },
                    (_,error) => console.error(`Erro ao obter: ${error}`)
                )
            },
            error => console.error(`Erro: ${error}`)
        )

    } else {
        database.transaction(
            tx => {
                tx.executeSql(
                    `SELECT * FROM produtor`,
                    [],
                    (_,{ rows: { _array } }) => {
                        setResult(_array)
                    },
                    (_,error) => console.error(`Erro ao obter: ${error}`)
                )
            },
            error => console.log(`Erro: ${error}`)
        )
    }
}

/**
 * Deleta o produtor informado.
 * @param {WebSQLDatabase} database 
 * @param {{prd_id: integer}} args 
 * @param {useState} setResult 
 */
async function delProdutor(database, args, setResult) {
    let { prd_id } = args
    database.transaction(
        tx => {
            tx.executeSql(
                `DELETE FROM produtor WHERE prd_id = ?`,
                [prd_id],
                (_,resultSet) => {
                    setResult(`Produtor deletado`)
                },
                (_,error) => console.error(`Erro ao deletar: ${error}`)
            )
        }
    )
}

/**
 * Realiza o login do produtor.
 * @param {WebSQLDatabase} database 
 * @param {{email: string, password: string}} args 
 * @param {useState} setResult 
 */
async function login(database, args, setResult) {
    let { email, password } = args
    database.transaction(
        tx => {
            tx.executeSql(
                `SELECT * FROM produtor
                WHERE prd_email = ? AND prd_senha = ?`,
                [ email, password ],
                ( _ , { rows: { _array } } ) => {
                    if(_array[0] === undefined)
                        setResult({ error: 'E-mail ou senha incorretos.'})
                    else{
                        //console.log(_array[0])
                        setResult(_array[0])}
                },
                ( _ , error ) => console.error(`Erro no login: ${error}`)
            )
        }
    )
}

export {
    addProdutor,
    getProdutor,
    delProdutor,

    login
}