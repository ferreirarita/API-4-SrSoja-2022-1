/**
 * 
 * @param {WebSQLDatabase} database 
 * @param {{
 *      prd_id: string,
 *      hv_nome: string,
 *      hv_valor: number,
 *      hv_quant: number,
 *      hv_descr: string
 * }} args 
 * @param {useState} setResult 
 */
async function addVenda(database, args, setResult) {
    let { prd_id, hv_nome, hv_valor, hv_quant, hv_descr } = args
    if(typeof prd_id !== undefined || prd_id != '') {
        database.transaction(
            tx => {
                let date = new Date()
                date = date.toISOString().split('.')[0]
                tx.executeSql(
                    `INSERT INTO hist_venda VALUES (?,?,?,?,?,?)`,
                    [ date, prd_id, hv_nome, hv_valor, hv_quant, hv_descr ],
                    (_, resultSet) => {
                        // setResult(`Venda registrada: ${hv_nome}`)
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
 *      hv_data: string,
 *      prd_id: string,
 *      hv_nome: string,
 *      hv_valor: number,
 *      hv_quant: number,
 *      hv_descr: string
 * }} args 
 * @param {useState} setResult 
 */
async function upVenda(database, args, setResult) {
    let { hv_data, prd_id, hv_nome, hv_valor, hv_quant, hv_descr } = args
    if(typeof prd_id !== undefined || prd_id != '') {
        if(typeof hv_data !== undefined || hv_data != '') {
            database.transaction(
                tx => {
                    let date = new Date()
                    date = date.toISOString().split('.')[0]
                    tx.executeSql(
                        `UPDATE hist_venda SET
                        hv_data = ?,
                        hv_nome = ?,
                        hv_valor = ?,
                        hv_quant = ?,
                        hv_descr = ?
                        WHERE hv_data LIKE ? AND prd_id = ?
                        `,
                        [ date, hv_nome, hv_valor, hv_quant, hv_descr, `${hv_data}`, prd_id ],
                        (_, resultSet) => {
                            // setResult(`Venda atualizada: ${hv_nome}`)
                        },
                        (_, error) => console.error(error)
                    )
                }
            )
        } else console.error('Nenhuma venda selecionada')
    } else console.error('Nenhum produtor informado')
}

/**
 * 
 * @param {WebSQLDatabase} database 
 * @param {{
 *      hv_data: string,
 *      prd_id: string
 * }} args 
 * @param {useState} setResult 
 */
async function getVenda(database, args, setResult) {
    let { hv_data, prd_id } = args
    if(typeof prd_id !== undefined || prd_id != '') {
        if(typeof hv_data === 'undefined' || hv_data == '') {
            database.transaction(
                tx => {
                    tx.executeSql(
                        `SELECT * FROM hist_venda
                        WHERE prd_id = ?`,
                        [ prd_id ],
                        (_, { rows: { _array } }) => {
                            setResult(_array)
                        },
                        (_, error) => console.error(error)
                    )
                }
            )
            
        } else {
            database.transaction(
                tx => {
                    tx.executeSql(
                        `SELECT * FROM hist_venda
                        WHERE hv_data = ? AND prd_id = ?`,
                        [ hv_data, prd_id ],
                        (_, { rows: { _array } }) => {
                            setResult(_array)
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
 *      hv_data: string,
 *      prd_id: string
 * }} args 
 * @param {useState} setResult 
 */
async function delVenda(database, args, setResult) {
    let { hv_data, prd_id } = args
    if(typeof prd_id !== undefined || prd_id != '') {
        if(typeof hv_data !== undefined || hv_data != '') {
            database.transaction(
                tx => {
                    tx.executeSql(
                        `DELETE FROM hist_venda
                        WHERE hv_data = ? AND prd_id = ?`,
                        [ hv_data, prd_id ],
                        (_, resultSet) => {
                            // setResult('Venda deletada')
                        },
                        (_, error) => console.error(error)
                    )
                }
            )
        } else console.error('Nenhuma venda selecionada')
    } else console.error('Nenhum produtor informado')
}

export {
    addVenda,
    upVenda,
    getVenda,
    delVenda 
}