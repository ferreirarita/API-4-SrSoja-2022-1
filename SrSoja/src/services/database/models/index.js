export default `
    CREATE TABLE IF NOT EXISTS produtor (
        prd_id INTEGER PRIMARY KEY AUTOINCREMENT,
        prd_nome TEXT NOT NULL,
        prd_email TEXT NOT NULL,
        prd_senha TEXT NOT NULL
    );

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
    );

    CREATE TABLE IF NOT EXISTS talhao_saude (
        tsd_id INTEGER PRIMARY KEY AUTOINCREMENT,
        tsd_nome TEXT NOT NULL,
        tsd_descr TEXT DEFAULT "..."
    );

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
    );

    CREATE TABLE IF NOT EXISTS area_talhao (
        area_id INTEGER PRIMARY KEY AUTOINCREMENT,
        tlh_id INTEGER NOT NULL,
        latitude TEXT,
        longitude TEXT,
        FOREIGN KEY (tlh_id) REFERENCES talhao (tlh_id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS producao (
        pro_data TIMESTAMP PRIMARY KEY DEFAULT CURRENT_TIMESTAMP,
        tlh_id INTEGER,
        pro_total NUMERIC DEFAULT 0.00,
        FOREIGN KEY (tlh_id) REFERENCES talhao (tlh_id)
    );

    CREATE TABLE IF NOT EXISTS preco_produto (
        ppr_data TIMESTAMP PRIMARY KEY,
        ppr_local TEXT NOT NULL,
        ppr_valor_saca NUMERIC,
        ppr_custo_grao NUMERIC
    );

    CREATE TABLE IF NOT EXISTS hist_gasto (
        hg_data TIMESTAMP PRIMARY KEY DEFAULT CURRENT_TIMESTAMP,
        prd_id INTEGER,
        hg_nome TEXT DEFAULT "Gasto de " || STRFTIME('%d-%m-%Y', (CURRENT_TIMESTAMP/1000)),
        hg_valor NUMERIC DEFAULT 0.00,
        hg_descr TEXT DEFAULT "...",
        FOREIGN KEY (prd_id) REFERENCES produtor (prd_id)
    );

    CREATE TABLE IF NOT EXISTS item (
        item_id INTEGER PRIMARY KEY AUTOINCREMENT,
        item_tipo INTEGER DEFAULT 0,
        item_nome TEXT DEFAULT "não definido"
    );

    CREATE TABLE IF NOT EXISTS preco_item (
        pit_data TIMESTAMP PRIMARY KEY DEFAULT CURRENT_TIMESTAMP,
        item_id INTEGER NOT NULL,
        pit_valor NUMERIC DEFAULT 0.00,
        FOREIGN KEY (item_id) REFERENCES item (item_id)
    );

    CREATE TABLE IF NOT EXISTS item_gasto (
        hg_data TIMESTAMP,
        item_id INTEGER,
        PRIMARY KEY (hg_data, item_id),
        FOREIGN KEY (hg_data) REFERENCES hist_gastos (hg_data),
        FOREIGN KEY (item_id) REFERENCES item (item_id)
    );

    CREATE TABLE IF NOT EXISTS hist_venda (
        hv_data TIMESTAMP PRIMARY KEY DEFAULT CURRENT_TIMESTAMP,
        prd_id INTEGER,
        hv_descr TEXT DEFAULT "Venda de " || STRFTIME('%d-%m-%Y', (CURRENT_TIMESTAMP/1000)),
        hv_quant INTEGER DEFAULT 0,
        hv_valor NUMERIC DEFAULT 0.00,
        FOREIGN KEY (prd_id) REFERENCES produtor (prd_id)
    );
`