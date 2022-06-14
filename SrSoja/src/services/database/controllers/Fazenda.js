
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
    let { fzd_id, prd_id, fzd_nome, fzd_cep } = args;
    if (typeof fzd_id === 'undefined' || fzd_id == 0) {
        database.transaction(
            tx => {
                tx.executeSql(
                    `INSERT INTO fazenda (prd_id, fzd_nome, fzd_cep) 
                    VALUES (?,?,?)`,
                    [prd_id, fzd_nome, fzd_cep],
                    (_, resultSet) => {
                        // setResult(`Nova Fazenda: '${fzd_nome}'`)
                        getFazenda(database,{fzd_id: resultSet.insertId},setResult)
                        // console.log('estou no banco',resultSet)
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
                    WHERE fzd_id = ?`,
                    [prd_id, fzd_nome, fzd_cep, fzd_id],
                    (_, resultSet) => {
                        // setResult(`Fazenda atualizada`)
                        getFazenda(database,{fzd_id},setResult)
                    },
                    (_,error) => console.error(`Erro ao atualizar: ${error}`)
                )
            },
            error => console.error(`Erro: ${error}`)
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
                        setResult(_array)
                    },
                    (_,error) => console.error(`Erro ao obter: ${error}`)
                )
            },
            error => console.error(error)
        )

    } else if (typeof fzd_id !== 'undefined' && fzd_id != 0) {
        database.transaction(
            tx => {
                tx.executeSql(
                    `SELECT * FROM fazenda
                    WHERE fzd_id = ?`,
                    [fzd_id],
                    (_,{ rows: { _array } }) => {
                        setResult(_array[0])
                    },
                    (_,error) => console.error(`Erro ao obter: ${error}`)
                )
            },
            error => console.error(error)
        )

    } else {
        console.error('Nenhuma fazenda informada')
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
                (_,error) => console.error(`Erro ao deletar: ${error}`)
            )
        }
    )
}

async function listAll(database, args, setResult) {
    let { prd_id } = args
    database.transaction(
        tx => {
            
            tx.executeSql(
                `SELECT 
                    f.fzd_id, f.prd_id, f.fzd_nome, f.fzd_cep,
                    t.tlh_id, t.tlh_apelido, 
                    t.tlh_media_producao, t.tlh_tamanho, t.tlh_saude, 
                    t.latitude, t.longitude
                FROM fazenda as f
                LEFT JOIN talhao as t
                ON f.fzd_id = t.fzd_id
                WHERE f.prd_id = ?`,
                [prd_id],
                (_,{ rows: { _array } }) => {
                    let list = []
                    _array.map((item,index) => {
                        let aux = list.find(e => e.fzd_id == item.fzd_id)
                        if(aux) {
                            list.find(e => {
                                if(e.fzd_id == item.fzd_id){
                                    e.talhoes = e.talhoes.concat({
                                        tlh_id: item.tlh_id,
                                        tlh_apelido: item.tlh_apelido,
                                        tlh_media_producao: item.tlh_media_producao,
                                        tlh_tamanho: item.tlh_tamanho,
                                        tlh_saude: item.tlh_saude,
                                        latitude: item.latitude,
                                        longitude: item.longitude
                                    })
                                }
                            })
                        }
                        else {
                            list.unshift({
                                fzd_id: item.fzd_id,
                                fzd_nome: item.fzd_nome,
                                fzd_cep: item.fzd_cep,
                                talhoes: item.tlh_id ? [{
                                    tlh_id: item.tlh_id,
                                    tlh_apelido: item.tlh_apelido,
                                    tlh_media_producao: item.tlh_media_producao,
                                    tlh_tamanho: item.tlh_tamanho,
                                    tlh_saude: item.tlh_saude,
                                    latitude: item.latitude,
                                    longitude: item.longitude
                                }]
                                : []
                            })
                        }
                    })
                    setResult(list)
                },
                (_,error) => console.error(`Erro: ${error}`)
            )
        }
    )
}

export {
    addFazenda,
    getFazenda,
    delFazenda,
    listAll
}