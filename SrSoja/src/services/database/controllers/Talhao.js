
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
        tlh_media_producao, tlh_tamanho, tlh_saude, 
        latitude, longitude
    } = args;
    if (typeof tlh_id === 'undefined' || tlh_id == 0) {
        database.transaction(
            tx => {
                tx.executeSql(
                    `INSERT INTO talhao 
                    (fzd_id, tlh_apelido, tlh_media_producao, tlh_tamanho, tlh_saude) 
                    VALUES (?,?,?,?,?)`,
                    [fzd_id, tlh_apelido, tlh_media_producao, tlh_tamanho, tlh_saude],
                    (_, resultSet) => {
                        setResult(resultSet)
                        console.log(resultSet)
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
                        tlh_tamanho = ?,
                        tlh_saude = ?,
                        latitude = ?,
                        longitude = ?
                    WHERE tlh_id = ?`,
                    [
                        fzd_id, tlh_apelido, tlh_media_producao, tlh_tamanho,
                        tlh_saude, tlh_id, latitude, longitude
                    ],
                    (_, resultSet) => {
                        
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
 * @param {{tlh_id: [integer], fzd_id: integer}} args 
 * @param {useState} setResult 
 */
async function getTalhao(database, args, setResult) {
    let { tlh_id, fzd_id } = args
    if(typeof fzd_id !== 'undefined' && fzd_id != 0) {
        let aux = '?,'.repeat(fzd_id.length-1)
        
        database.transaction(
            tx => {
                tx.executeSql(
                    `SELECT 
                        *
                    FROM talhao
                    WHERE fzd_id in (${aux}?)`,
                    fzd_id,
                    (_,{ rows: { _array } }) => {
                        setResult(_array)
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
                        *
                    FROM talhao
                    WHERE tlh_id =?`,
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


export {
    addTalhao,
    getTalhao,
    delTalhao,
}
