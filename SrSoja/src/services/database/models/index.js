export default {
    produtor: `
    CREATE TABLE IF NOT EXISTS produtor (
        prd_id TEXT PRIMARY KEY,
        prd_nome TEXT NOT NULL,
        prd_email TEXT NOT NULL,
        prd_senha TEXT NOT NULL
    );`,
    fazenda: `
    CREATE TABLE IF NOT EXISTS fazenda (
        fzd_id INTEGER PRIMARY KEY AUTOINCREMENT,
        prd_id INTEGER NOT NULL,
        fzd_nome TEXT,
        fzd_cep TEXT NOT NULL,
        fzd_estado TEXT NOT NULL,
        fzd_municipio TEXT NOT NULL,
        FOREIGN KEY (prd_id) REFERENCES produtor (prd_id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
    );`,
    talhao_saude: `
    CREATE TABLE IF NOT EXISTS talhao_saude (
        tsd_id INTEGER PRIMARY KEY AUTOINCREMENT,
        tsd_nome TEXT NOT NULL,
        tsd_descr TEXT DEFAULT "..."
    );`,
    talhao: `
    CREATE TABLE IF NOT EXISTS talhao (
        tlh_id INTEGER PRIMARY KEY AUTOINCREMENT,
        tlh_apelido TEXT,
        tlh_media_producao NUMERIC DEFAULT 0.00,
        fzd_id INTEGER NOT NULL,
        tlh_saude INTEGER,
        FOREIGN KEY (fzd_id) REFERENCES fazenda (fzd_id)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
        FOREIGN KEY (tlh_saude) REFERENCES talhao_saude (tsd_id)
        ON UPDATE CASCADE
        ON DELETE SET NULL
    );`,
    area_talhao: `
    CREATE TABLE IF NOT EXISTS area_talhao (
        area_id INTEGER PRIMARY KEY AUTOINCREMENT,
        tlh_id INTEGER NOT NULL,
        latitude TEXT,
        longitude TEXT,
        FOREIGN KEY (tlh_id) REFERENCES talhao (tlh_id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
    );`,
    producao: `
    CREATE TABLE IF NOT EXISTS producao (
        pro_data TIMESTAMP PRIMARY KEY DEFAULT CURRENT_TIMESTAMP,
        tlh_id INTEGER,
        pro_total NUMERIC DEFAULT 0.00,
        FOREIGN KEY (tlh_id) REFERENCES talhao (tlh_id)
    );`,
    preco_produto: `
    CREATE TABLE IF NOT EXISTS preco_produto (
        ppr_data TIMESTAMP PRIMARY KEY,
        ppr_local TEXT NOT NULL,
        ppr_valor_saca NUMERIC,
        ppr_custo_grao NUMERIC
    );`,
    hist_gasto: `
    CREATE TABLE IF NOT EXISTS hist_gasto (
        hg_data TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        prd_id TEXT,
        hg_nome TEXT DEFAULT CURRENT_TIMESTAMP,
        hg_valor NUMERIC DEFAULT 0.00,
        hg_descr TEXT DEFAULT "...",
        PRIMARY KEY (hg_data, prd_id),
        FOREIGN KEY (prd_id) REFERENCES produtor (prd_id)
    );`,
    item: `
    CREATE TABLE IF NOT EXISTS item (
        item_id INTEGER PRIMARY KEY AUTOINCREMENT,
        item_tipo INTEGER DEFAULT 0,
        item_nome TEXT DEFAULT "não definido"
    );`,
    preco_item: `
    CREATE TABLE IF NOT EXISTS preco_item (
        pit_data TIMESTAMP PRIMARY KEY DEFAULT CURRENT_TIMESTAMP,
        item_id INTEGER NOT NULL,
        pit_valor NUMERIC DEFAULT 0.00,
        FOREIGN KEY (item_id) REFERENCES item (item_id)
    );`,
    item_gasto: `
    CREATE TABLE IF NOT EXISTS item_gasto (
        hg_data TIMESTAMP,
        item_id INTEGER,
        PRIMARY KEY (hg_data, item_id),
        FOREIGN KEY (hg_data) REFERENCES hist_gastos (hg_data),
        FOREIGN KEY (item_id) REFERENCES item (item_id)
    );`,
    hist_venda: `
    CREATE TABLE IF NOT EXISTS hist_venda (
        hv_data TIMESTAMP PRIMARY KEY DEFAULT CURRENT_TIMESTAMP,
        prd_id TEXT,
        hv_nome TEXT DEFAULT CURRENT_TIMESTAMP,
        hv_valor NUMERIC DEFAULT 0.00,
        hv_quant INTEGER DEFAULT 0,
        hv_descr TEXT DEFAULT "...",
        FOREIGN KEY (prd_id) REFERENCES produtor (prd_id)
    );
`}