create database SpyLeafDB;

/*Tables*/

--drop table Produtor cascade;
create table if not exists Produtor(
	prd_id serial primary key,
	prd_nome varchar not null,
	prd_email varchar not null,
	prd_senha varchar(100) not null
);

--drop table Fazenda cascade;
create table if not exists Fazenda(
	fzd_id serial primary key,
	prd_id integer not null,
	fzd_nome varchar,
	fzd_cep varchar not null,
	fzd_estado varchar(2) not null,
	fzd_municipio varchar not null,
	foreign key (prd_id) references Produtor (prd_id)
	on update cascade
	on delete cascade
);

--drop table Talhao_Saude cascade;
create table if not exists Talhao_Saude(
	tsd_id serial primary key,
	tsd_nome varchar not null,
	tsd_descr varchar default '...'
);


--drop table Talhao cascade;
create table if not exists Talhao(
	tlh_id serial primary key,
	tlh_apelido varchar,
	tlh_media_producao numeric(7,2) default 0.00,
	fzd_id integer not null,
	tlh_saude integer,
	foreign key (fzd_id) references Fazenda (fzd_id)
	on update cascade
	on delete cascade,
	foreign key (tlh_saude) references Talhao_Saude (tsd_id)
	on update cascade
	on delete set null
);

--drop table Area_Talhao cascade;
create table if not exists Area_Talhao(
	area_id serial primary key,
	tlh_id integer not null,
	latitude varchar,
	longitude varchar,
	foreign key (tlh_id) references Talhao (tlh_id)
	on update cascade
	on delete cascade,
);

--drop table Producao cascade;
create table if not exists Producao(
	pro_data timestamp primary key default current_timestamp,
	tlh_id integer,
	pro_total numeric(7,2) default 0.00,
	foreign key (tlh_id) references Talhao (tlh_id)
);

/*
--drop table Produto cascade;
create table if not exists Produto(
	pr_id serial primary key,
	pr_nome varchar
);

create table if not exists Preco_Produto(
	ppr_data timestamp primary key,
	pr_id integer,
	ppr_local varchar not null,
	ppr_valor_saca numeric(5,2),
	ppr_custo_grao numeric(5,2),
	foreign key (pr_id) references Produto (pr_id)
);
*/

--drop table Preco_Produto cascade;
create table if not exists Preco_Produto(
	ppr_data timestamp primary key,
	ppr_local varchar not null,
	ppr_valor_saca numeric(5,2),
	ppr_custo_grao numeric(5,2)
);

/*
--drop table Producao_Talhao cascade;
create table if not exists Produto_Talhao(
	pr_id integer,
	tlh_id integer,
	primary key (pr_id, tlh_id),
	foreign key (pr_id) references Produto (pr_id),
	foreign key (tlh_id) references Talhao (tlh_id)
);

--drop table Armazem cascade;
create table if not exists Armazem(
	arm_id serial primary key,
	arm_cap_max numeric(7,2) default 0.00,
	arm_cap_atual numeric(7,2) default 0.00
);

--drop table Produto_Armazem cascade;
create table if not exists Produto_Armazem(
	pr_id integer,
	arm_id integer,
	primary key (pr_id, arm_id),
	foreign key (pr_id) references Produto (pr_id),
	foreign key (arm_id) references Armazem (arm_id)
);
*/

--drop table Hist_Gastos cascade;
create table if not exists Hist_Gastos(
	hg_data timestamp primary key default current_timestamp,
	prd_id integer,
	hg_nome varchar default concat('Gasto de ', current_timestamp::text),
	hg_valor numeric(8,2) default 0.00,
	hg_descr varchar default '...',
	foreign key (prd_id) references Produtor (prd_id)
);

--drop table Item cascade;
create table if not exists Item(
	item_id serial primary key,
	item_tipo integer default 0,
	item_nome varchar default 'Não definido'
);

--drop table Preco_Item cascade;
create table if not exists Preco_Item(
	pit_data timestamp primary key default current_timestamp,
	item_id integer not null,
	pit_valor numeric(7,2) default 0.00,
	foreign key (item_id) references Item (item_id)
);

--drop table Item_Gastos 
create table if not exists Item_Gasto(
	hg_data timestamp,
	item_id integer,
	primary key (hg_data, item_id),
	foreign key (hg_data) references Hist_Gastos (hg_data),
	foreign key (item_id) references Item (item_id)
);

--drop table Hist_Venda cascade;
create table if not exists Hist_Venda(
	hv_data timestamp primary key default current_timestamp,
	prd_id integer,
	hv_descr varchar default concat('Venda de ', current_timestamp),
	hv_quant integer default 0,
	hv_valor numeric(8,2) default 0.00,
	foreign key (prd_id) references Produtor (prd_id)
);

/*
--drop table Venda_Produto cascade;
create table if not exists Venda_Produto(
	hv_data timestamp,
	pr_id integer,
	primary key (hv_data, pr_id),
	foreign key (hv_data) references Hist_Venda (hv_data),
	foreign key (pr_id) references Produto (pr_id)
);
*/

/*Tables*/

/*Triggers & Sequences*/

create sequence if not exists talhao_serial_apelido
	start with 1
	owned by Talhao.tlh_apelido;
alter table Talhao
	alter tlh_apelido set default concat('talhão ', nextval('talhao_serial_apelido')::text);

create sequence if not exists fazenda_serial_nome
	start with 1
	owned by Fazenda.fzd_nome;
alter table Fazenda
	alter fzd_nome set default concat('fazenda ',nextval('fazenda_serial_nome')::text);

/*Triggers & Sequences*/