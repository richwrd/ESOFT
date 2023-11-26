/* ESOFT 5S - A EDUARDO RICHARD 21161812-2 */
/* SCRIPT ESQUELETO TABELAS */


/*  DIAGRAMA */

/*______________________________________________________________________________________*/
/* 	EMPRESA 	*/

CREATE SEQUENCE geral.empresa_id_seq;

CREATE TABLE IF NOT EXISTS geral.empresa (
	idkey int8 NOT NULL DEFAULT nextval('geral.empresa_id_seq'::regclass),
	denominacao text NULL,
	datacadastro timestamp NULL,
	usuario text NULL,
	CONSTRAINT pk_empresa PRIMARY KEY (idkey)
);


/*______________________________________________________________________________________*/
/*	DEPARTAMENTO 	*/

CREATE SEQUENCE geral.departamento_id_seq;

CREATE TABLE IF NOT EXISTS geral.departamento (
	idkey int8 NOT NULL DEFAULT nextval('geral.departamento_id_seq'::regclass),
	denominacao text NULL,
	idkey_empresa int8 NULL,
	idkey_gerente int8 NULL,
	datacadastro timestamp NULL,
	usuario text NULL,
	CONSTRAINT pk_departamento PRIMARY KEY (idkey),
	CONSTRAINT fk_departamento_empresa FOREIGN KEY (idkey_empresa) REFERENCES geral.empresa(idkey)
);


/*______________________________________________________________________________________*/

CREATE TABLE IF NOT EXISTS geral.cargo (
	idkey int8 NOT NULL,
	denominacao text NULL,
	salariobase int8 NULL,
	CONSTRAINT pk_cargo PRIMARY KEY (idkey)
);

/*______________________________________________________________________________________*/
/* COLABORADOR */

CREATE SEQUENCE geral.colaborador_id_seq;

CREATE TABLE IF NOT EXISTS geral.colaborador (
	idkey int8 NOT NULL DEFAULT nextval('geral.colaborador_id_seq'::regclass),
	nome text NULL,
	sobrenome text NULL,
	cpf text NULL,
	idkey_cargo int8 NULL,
	datacadastro timestamp NULL,
	usuario text NULL,
	CONSTRAINT pk_departamento PRIMARY KEY (idkey),
	CONSTRAINT fk_colaborador_cargo FOREIGN KEY (idkey_cargo) REFERENCES geral.cargo(idkey)
);

CREATE TABLE IF NOT EXISTS geral.tpl_departamento_colaborador (
	idkey_departamento int8 NOT NULL,
	idkey_colaborador int8 NOT NULL,
	CONSTRAINT fk_tpl_departamento_colaborador_departamento FOREIGN KEY (idkey_departamento) REFERENCES geral.departamento(idkey),
	CONSTRAINT fk_tpl_departamento_colaborador_departamento FOREIGN KEY (idkey_colaborador) REFERENCES geral.colaborador(idkey)
);

/* INSERIR EM UM BLOCO ANONIMO PARA TESTAR E RODAR PELO BACKEND E FRONTEND */

INSERT INTO geral.cargo VALUES 
	(1, 'DIRETOR'),
	(2, 'GERENTE'),
	(3, 'TI'),
	(4, 'FINANCEIRO'),
	(5, 'EXECUTOR');
	


ALTER TABLE geral.departamento ADD CONSTRAINT fk_departamento_gerente FOREIGN KEY (idkey_gerente) REFERENCES geral.colaborador

/*______________________________________________________________________________________*/
/*  FUNÇÃO CONTA A QUANTIDADE DE COLABORADORES POR EQUIPE, SE FOR MAIOR QUE 5 RETORNA TRUE */


CREATE OR REPLACE FUNCTION geral.limitedepartamentocolaborador(id_departamento int8)
RETURNS BOOL

	
END;



