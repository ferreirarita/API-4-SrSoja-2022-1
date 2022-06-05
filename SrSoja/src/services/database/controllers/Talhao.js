
/**
 * Adiciona um novo talhão (tlh_id == 0) ou
 * atualiza um existente (tlh_id != 1).
 * @param {WebSQLDatabase} database 
 * @param {{ 
 *      tlh_id: integer, 
 *      fzd_id: integer,
 *      tlh_apelido: string, 
 *      tlh_media_producao: numeric, 
 *      tlh_saude: string,
 *      latitude: string,
 *      longitude: string
 * }} args 
 * @param {useState} setResult 
 */
async function addTalhao(database, args, setResult) {
    let { 
        tlh_id, fzd_id, tlh_apelido, 
        tlh_media_producao, tlh_saude, 
        latitude, longitude
    } = args;
    if (typeof tlh_id === 'undefined' || tlh_id == 0) {
        database.transaction(
            tx => {
                tx.executeSql(
                    `INSERT INTO talhao (fzd_id, tlh_apelido, tlh_media_producao, tlh_saude) 
                    VALUES (?,?,?,?)`,
                    [fzd_id, tlh_apelido, tlh_media_producao, tlh_saude],
                    (_, resultSet) => {
                        // Em testes
                        tlh_id = resultSet.insertId

                        addAreaTalhao(database, { tlh_id, latitude, longitude }).then(
                            () => setResult(`Novo Talhão '${tlh_apelido}'`)
                        )
                        //
                    },
                    (_,error) => console.error(`Erro ao adicionar: ${error}`)
                )
            },
            error => console.error(`Erro: ${error}`)
        )
        
    } else {
        database.transaction(
            tx => {
                tx.executeSql(
                    `UPDATE talhao SET
                    fzd_id = ?,
                    tlh_apelido = ?,
                    tlh_media_producao = ?,
                    tlh_saude = ?
                    WHERE tlh_id = ?`,
                    [fzd_id, tlh_apelido, tlh_media_producao, tlh_saude, tlh_id],
                    (_, resultSet) => {
                        // Em testes
                        addAreaTalhao(database, { tlh_id, latitude, longitude }).then(
                            () => setResult(`Talhão atualizado '${tlh_apelido}'`)
                        )
                        //
                    },
                    (_,error) => console.error(`Erro ao atualizar: ${error}`)
                )
            },
            error => console.error(`Erro: ${error}`)
        )
    }
}

/**
 * Retorna todos os talhões de uma fazenda (fzd_id != 0) ou 
 * um informado (tlh_id != 0).
 * @param {WebSQLDatabase} database 
 * @param {{tlh_id: integer, fzd_id: integer}} args 
 * @param {useState} setResult 
 */
async function getTalhao(database, args, setResult) {
    let { tlh_id, fzd_id } = args
    if(typeof fzd_id !== 'undefined' && fzd_id != 0) {
        database.transaction(
            tx => {
                tx.executeSql(
                    `SELECT 
                        tlh_id, 
                        fzd_id,
                        tlh_apelido, 
                        tlh_media_producao, 
                        tlh_saude,
                        latitude,
                        longitude
                    FROM talhao
                    INNER JOIN area_talhao 
                        ON area_talhao.tlh_id = talhao.tlh_id
                    WHERE fzd_id = ?`,
                    [fzd_id],
                    (_,{ rows: { _array } }) => {
                        setResult(JSON.stringify(_array))
                    },
                    (_,error) => console.error(`Erro ao obter: ${error}`)
                )
            },
            error => console.error(`Erro: ${error}`)
        )

    } else if (typeof tlh_id !== 'undefined' && tlh_id != 0) {
        database.transaction(
            tx => {
                tx.executeSql(
                    `SELECT 
                        tlh_id, 
                        fzd_id,
                        tlh_apelido, 
                        tlh_media_producao, 
                        tlh_saude,
                        latitude,
                        longitude
                    FROM talhao
                    INNER JOIN area_talhao 
                        ON area_talhao.tlh_id = talhao.tlh_id
                    WHERE tlh_id = ?`,
                    [tlh_id],
                    (_,{ rows: { _array } }) => {
                        setResult(JSON.stringify(_array[0]))
                    },
                    (_,error) => console.error(`Erro ao obter: ${error}`)
                )
            },
            error => console.error(`Erro: ${error}`)
        )

    } else {
        console.log('Nenhum talhão informado')
    }
}

/**
 * Deleta o talhão informado.
 * @param {WebSQLDatabase} database 
 * @param {{tlh_id: integer}} args 
 * @param {useState} setResult 
 */
async function delTalhao(database, args, setResult) {
    let { tlh_id } = args
    database.transaction(
        tx => {
            tx.executeSql(
                `DELETE FROM talhao WHERE tlh_id = ?`,
                [tlh_id],
                (_,resultSet) => {
                    setResult(`Talhão deletado`)
                },
                (_,error) => console.error(`Erro ao deletar: ${error}`)
            )
        }
    )
}

/**
 * Adiciona uma nova área de talhão (area_id == 0) ou
 * atualiza uma existente (area_id != 1).
 * @param {WebSQLDatabase} database 
 * @param {{ 
 *      area_id: integer, 
 *      tlh_id: integer,
 *      latitude: string, 
 *      longitude: string
 * }} args 
 */
async function addAreaTalhao(database, args) {
    let { area_id, tlh_id, latitude, longitude } = args
    if (typeof area_id === 'undefined' || area_id == 0) {
        (await import('expo-sqlite')).openDatabase().transaction(
            tx => {
                tx.executeSql(
                    `INSERT INTO area_talhao (tlh_id, latitude, longitude) 
                    VALUES (?,?,?)`,
                    [tlh_id, latitude, longitude],
                    (_, resultSet) => {
                        //setResult(`Novo Talhão '${tlh_apelido}'`)
                    },
                    (_,error) => console.error(`Erro ao adicionar: ${error}`)
                )
            },
            error => console.error(`Erro: ${error}`)
        )
    } else {
        database.transaction(
            tx => {
                tx.executeSql(
                    `UPDATE area_talhao SET
                    latitude = ?,
                    longitude = ?
                    WHERE area_id = ?`,
                    [latitude, longitude, area_id],
                    (_, resultSet) => {
                        //setResult(`Talhão atualizado '${tlh_apelido}'`)
                    },
                    (_,error) => console.error(`Erro ao atualizar: ${error}`)
                )
            },
            error => console.error(`Erro: ${error}`)
        )
    }
}

/**
 * Adiciona uma nova saúde de talhão (tsd_id == 0) ou
 * atualiza um existente (tsd_id != 0).
 * @param {WebSQLDatabase} database 
 * @param {{
 *      tsd_id: integer,
 *      tsd_nome: string,
 *      tsd_descr: string
 * }} args 
 * @param {useState} setResult 
 *//* 
async function addSaude(database, args, setResult) {
    let { tsd_id, tsd_nome, tsd_descr } = args
    if (typeof tsd_id === 'undefined' || tsd_id == 0) {
        database.transaction(
            tx => {
                tx.executeSql(
                    `INSERT INTO talhao_saude (tsd_nome, tsd_descr) VALUES (?,?)`,
                    [tsd_nome, tsd_descr],
                    (_, resultSet) => {
                        setResult(`Nova Saúde de Talhão '${tsd_nome}'`)
                    },
                    (_,error) => console.error(`Erro ao adicionar: ${error}`)
                )
            },
            error => console.error(`Erro: ${error}`)
        );
    } else {
        database.transaction(
            tx => {
                tx.executeSql(
                    `UPDATE talhao_saude SET
                    tsd_nome = ?,
                    tsd_descr = ?
                    WHERE tsd_id = ?`,
                    [tsd_id, tsd_nome, tsd_descr],
                    (_, resultSet) => {
                        setResult(`Saúde de Talhão atualizada '${tsd_nome}'`)
                    },
                    (_,error) => console.error(`Erro ao atualizar: ${error}`)
                )
            },
            error => console.error(`Erro: ${error}`)
        )
    }
} */

/**
 * Retorna todas as saúdes de talhão (tsd_id == 0) ou
 * uma informada (tsd_id != 0).
 * @param {WebSQLDatabase} database 
 * @param {{tsd_id: integer}} args 
 * @param {useState} setResult 
 *//* 
async function getSaude(database, args, setResult) {
    let { tsd_id } = args
    if(typeof tsd_id !== 'undefined' && tsd_id != 0) {
        database.transaction(
            tx => {
                tx.executeSql(
                    `SELECT * FROM talhao_saude
                    WHERE tsd_id = ?`,
                    [tsd_id],
                    (_,{ rows: { _array } }) => {
                        setResult(JSON.stringify(_array[0]))
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
                    `SELECT * FROM talhao_saude`,
                    [],
                    (_,{ rows: { _array } }) => {
                        setResult(_array)
                    },
                    (_,error) => console.error(`Erro ao obter: ${error}`)
                )
            },
            error => console.error(`Erro: ${error}`)
        )
    }
} */

/**
 * Deleta a saúde de talhão informada.
 * @param {WebSQLDatabase} database 
 * @param {{tsd_id: integer}} args 
 * @param {useState} setResult 
 *//* 
async function delSaude(database, args, setResult) {
    let { tsd_id } = args
    database.transaction(
        tx => {
            tx.executeSql(
                `DELETE FROM talhao_saude WHERE tsd_id = ?`,
                [tsd_id],
                (_,resultSet) => {
                    setResult(`Saúde de Talhão deletada`)
                },
                (_,error) => console.error(`Erro ao deletar: ${error}`)
            )
        }
    )
} */

export {
    addTalhao,
    addAreaTalhao,
    // addSaude,

    getTalhao,
    // getSaude,

    delTalhao,
    // delSaude
}
