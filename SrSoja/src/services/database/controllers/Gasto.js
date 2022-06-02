/**
 * 
 * @param {WebSQLDatabase} database 
 * @param {{
 *      prd_id: string,
 *      hg_nome: string,
 *      hg_valor: number,
 *      hg_descr: string
 * }} args 
 * @param {useState} setResult 
 */
async function addGasto(database, args, setResult) {
    let { prd_id, hg_nome, hg_valor, hg_descr } = args
    if(typeof prd_id !== undefined || prd_id != '') {
        database.transaction(
            tx => {
                let date = new Date()
                date = date.toISOString().split('.')[0]
                tx.executeSql(
                    `INSERT INTO hist_gasto VALUES (?,?,?,?,?)`,
                    [ date, prd_id, hg_nome, hg_valor, hg_descr ],
                    (_, resultSet) => {
                        setResult(`Gasto registrado: ${hg_nome}`)
                    },
                    (_, error) => console.error(error)
                )
            }
        )
    } else console.error('Nenhum produtor informado')
}

/**
 * 
 * @param {WebSQLDatabase} database 
 * @param {{
 *      hg_data: string,
 *      prd_id: string,
 *      hg_nome: string,
 *      hg_valor: number,
 *      hg_descr: string
 * }} args 
 * @param {useState} setResult 
 */
async function upGasto(database, args, setResult) {
    let { hg_data, prd_id, hg_nome, hg_valor, hg_descr } = args
    if(typeof prd_id !== undefined || prd_id != '') {
        if(typeof hg_data !== undefined || hg_data != '') {
            database.transaction(
                tx => {
                    let date = new Date()
                    date = date.toISOString().split('.')[0]
                    tx.executeSql(
                        `UPDATE hist_gasto SET
                        hg_data = ?,
                        hg_nome = ?,
                        hg_valor = ?,
                        hg_descr = ?
                        WHERE hg_data = ? AND prd_id = ?
                        `,
                        [ date, hg_nome, hg_valor, hg_descr, hg_data, prd_id ],
                        (_, resultSet) => {
                            setResult(`Gasto atualizado: ${hg_nome}`)
                        },
                        (_, error) => console.error(error)
                    )
                }
            )
        } else console.error('Nenhum gasto selecionado')
    } else console.error('Nenhum produtor informado')
}

/**
 * 
 * @param {WebSQLDatabase} database 
 * @param {{
 *      hg_data: string,
 *      prd_id: string
 * }} args 
 * @param {useState} setResult 
 */
async function getGasto(database, args, setResult) {
    let { hg_data, prd_id } = args
    if(typeof prd_id !== undefined || prd_id != '') {
        if(typeof hg_data === 'undefined' || hg_data == '') {
            database.transaction(
                tx => {
                    tx.executeSql(
                        `SELECT * FROM hist_gasto
                        WHERE prd_id = ?`,
                        [ prd_id ],
                        (_, { rows: { _array } }) => {
                            setResult(JSON.stringify(_array))
                        },
                        (_, error) => console.error(error)
                    )
                }
            )
            
        } else {
            database.transaction(
                tx => {
                    tx.executeSql(
                        `SELECT * FROM hist_gasto
                        WHERE hg_data = ? AND prd_id = ?`,
                        [ hg_data, prd_id ],
                        (_, { rows: { _array } }) => {
                            setResult(JSON.stringify(_array))
                        },
                        (_, error) => console.error(error)
                    )
                }
            )
        }
    } else console.error('Nenhum produtor informado')
}

/**
 * 
 * @param {WebSQLDatabase} database 
 * @param {{
 *      hg_data: string,
 *      prd_id: string
 * }} args 
 * @param {useState} setResult 
 */
async function delGasto(database, args, setResult) {
    let { hg_data, prd_id } = args
    if(typeof prd_id !== undefined || prd_id != '') {
        if(typeof hg_data !== undefined || hg_data != '') {
            database.transaction(
                tx => {
                    tx.executeSql(
                        `DELETE FROM hist_gasto
                        WHERE hg_data = ? AND prd_id = ?`,
                        [ hg_data, prd_id ],
                        (_, resultSet) => {
                            setResult('Gasto deletado')
                        },
                        (_, error) => console.error(error)
                    )
                }
            )
        } else console.error('Nenhum gasto selecionado')
    } else console.error('Nenhum produtor informado')
}

export {
    addGasto,
    upGasto,
    getGasto,
    delGasto
}