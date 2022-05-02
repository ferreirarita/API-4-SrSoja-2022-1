const tables = [
    `CREATE TABLE IF NOT EXISTS Produtor(
        prd_id INTEGER PRIMARY KEY AUTOINCREMENT,
        prd_nome TEXT NOT NULL,
        prd_email TEXT NOT NULL,
        prd_senha TEXT NOT NULL,
    );`
]

export default { tables }