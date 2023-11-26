/* ESOFT 5S - A EDUARDO RICHARD 21161812-2 */
/* SCRIPT ESQUELETO TABELAS */


/*cria database e schema se não existir */
DO $$
DECLARE 
BEGIN
	
	IF NOT EXISTS (SELECT 
										datname
									FROM pg_database
									WHERE 
										datname LIKE 'projeto') 
	THEN 
	
		CREATE DATABASE projeto;
	
	END IF;

	IF NOT EXISTS (SELECT 
										schema_name
									FROM information_schema.schemata
									WHERE 
										schema_name LIKE 'geral') 
	THEN 
	
		CREATE SCHEMA geral;
	
	END IF;
		

END $$;


/*______________________________________________________________________________________*/
/* 	EMPRESA 	*/

CREATE SEQUENCE IF NOT EXISTS geral.empresa_id_seq;

CREATE TABLE IF NOT EXISTS geral.empresa (
	idkey int8 NOT NULL DEFAULT nextval('geral.empresa_id_seq'::regclass),
	denominacao text NULL,
	datacadastro timestamp NULL,
	usuario text NULL,
	CONSTRAINT pk_empresa PRIMARY KEY (idkey)
);


/*______________________________________________________________________________________*/
/*	DEPARTAMENTO 	*/

CREATE SEQUENCE IF NOT EXISTS geral.departamento_id_seq;

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

CREATE SEQUENCE IF NOT EXISTS geral.colaborador_id_seq;

CREATE TABLE IF NOT EXISTS geral.colaborador (
	idkey int8 NOT NULL DEFAULT nextval('geral.colaborador_id_seq'::regclass),
	nome text NULL,
	sobrenome text NULL,
	cpf text NULL,
	idkey_cargo int8 NULL,
	ativo bool NULL DEFAULT TRUE,
	datacadastro timestamp NULL,
	usuario text NULL,
	CONSTRAINT pk_colaborador PRIMARY KEY (idkey),
	CONSTRAINT fk_colaborador_cargo FOREIGN KEY (idkey_cargo) REFERENCES geral.cargo(idkey)
);

CREATE TABLE IF NOT EXISTS geral.tpl_departamento_colaborador (
	idkey_departamento int8 NOT NULL,
	idkey_colaborador int8 NOT NULL,
	CONSTRAINT fk_tpl_departamento_colaborador_departamento FOREIGN KEY (idkey_departamento) REFERENCES geral.departamento(idkey),
	CONSTRAINT fk_tpl_departamento_colaborador_colaborador FOREIGN KEY (idkey_colaborador) REFERENCES geral.colaborador(idkey)
);

/* INSERIR EM UM BLOCO ANONIMO PARA TESTAR E RODAR PELO BACKEND E FRONTEND */

INSERT INTO geral.cargo VALUES 
	(1, 'DIRETOR'),
	(2, 'GERENTE'),
	(3, 'TI'),
	(4, 'FINANCEIRO'),
	(5, 'EXECUTOR')
ON CONFLICT
DO NOTHING;
	


CREATE SEQUENCE IF NOT EXISTS geral.gerente_id_seq;

CREATE TABLE IF NOT EXISTS geral.gerente (
	idkey int8 NOT NULL DEFAULT nextval('geral.gerente_id_seq'::regclass),
	idkey_colaborador int8 NULL,
	ativo bool NULL DEFAULT TRUE,
	datacadastro timestamp NULL,
	usuario text NULL,
	CONSTRAINT pk_gerente PRIMARY KEY (idkey),
	CONSTRAINT fk_gerente_colaborador FOREIGN KEY (idkey_colaborador) REFERENCES geral.colaborador(idkey)
);

ALTER TABLE geral.departamento ADD CONSTRAINT fk_departamento_gerente FOREIGN KEY (idkey_gerente) REFERENCES geral.gerente(idkey);


CREATE SEQUENCE IF NOT EXISTS users_id_seq;

CREATE TABLE IF NOT EXISTS users (
	idkey int8 NOT NULL DEFAULT NEXTval('users_id_seq'::regclass),
	nome TEXT NOT NULL,
	permissoes TEXT NOT NULL,
	CONSTRAINT pk_users PRIMARY KEY (idkey)
)

/*______________________________________________________________________________________*/
/*  FUNÇÃO CONTA A QUANTIDADE DE COLABORADORES POR EQUIPE, SE FOR MAIOR QUE 5 RETORNA TRUE */
--
--
--CREATE OR REPLACE FUNCTION geral.limitedepartamentocolaborador(id_departamento int8)
--RETURNS BOOL
--
--	
--END;



/* EXTRAIDO DA INTERNET PARA COMPLEMENTAR O SISTEMA */


create or replace function geral.valida_cnpj_cpf(string in character varying)
returns boolean as 
$$
declare 
	validado boolean;
	i int;
begin 
	/*
	 * 	-> by: Richard
	 *
	 * */
	
	validado := false;

	i := char_length(string);
	
	if i = 14 then 
		validado := (select fc_valida_cnpj(string));
	elseif i = 11 then
			validado := (select fc_valida_cpf(string));
	end if;

	return validado;
	
end;
$$ language plpgsql;



---------------------------------------------------------------------Funcaoo para conferir cpf---------------------------------------------------
create or replace function fc_valida_cpf
(
    p_cpf in character varying, 
    p_valida_nulo in boolean default false
)
returns boolean as 
$$
declare
    
    v_cpf_invalidos character varying[10] 
    default array['00000000000', '11111111111',
                  '22222222222', '33333333333',
                  '44444444444', '55555555555',
                  '66666666666', '77777777777',
                  '88888888888', '99999999999'];
                  
    v_cpf_quebrado smallint[];
    
    c_posicao_dv1 constant smallint default 10;    
    v_arranjo_dv1 smallint[9] default array[10,9,8,7,6,5,4,3,2];
    v_soma_dv1 smallint default 0;
    v_resto_dv1 double precision default 0;
    
    c_posicao_dv2 constant smallint default 11;
    v_arranjo_dv2 smallint[10] default array[11,10,9,8,7,6,5,4,3,2];
    v_soma_dv2 smallint default 0;
    v_resto_dv2 double precision default 0;
    
begin
    if p_valida_nulo and nullif(p_cpf, '') is null then
        return true;
    end if;
    if (not (p_cpf ~* '^([0-9]{11})$' or 
             p_cpf ~* '^([0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2})$')
        ) or
        p_cpf = any (v_cpf_invalidos) or
        p_cpf is null
    then
        return false;    
    end if;
    
v_cpf_quebrado := regexp_split_to_array(
                    regexp_replace(p_cpf, '[^0-9]', '', 'g'), '');
    -------------------------------- Digito Verificador 1
    for t in 1..9 loop
        v_soma_dv1 := v_soma_dv1 + 
                     (v_cpf_quebrado[t] * v_arranjo_dv1[t]);
    end loop;
    v_resto_dv1 := ((10 * v_soma_dv1) % 11) % 10;
        
    if (v_resto_dv1 != v_cpf_quebrado[c_posicao_dv1]) 
    then
        return false;
    end if;
    
    -------------------------------- Digito Verificador 2
    for t in 1..10 loop
        v_soma_dv2 := v_soma_dv2 + 
                     (v_cpf_quebrado[t] * v_arranjo_dv2[t]);
    end loop;
    v_resto_dv2 := ((10 * v_soma_dv2) % 11) % 10;
    
    return (v_resto_dv2 = v_cpf_quebrado[c_posicao_dv2]);    
    
end;
$$ language plpgsql;

---------------------------------------------------------------------Funcaoo para conferir cnpj---------------------------------------------------


create or replace function fc_valida_cnpj
(
    in p_cnpj character varying, 
    in p_fg_permite_nulo boolean default false
)
returns boolean as
$$
declare
    
    v_cnpj_invalidos character varying[10] 
    default array['00000000000000', '11111111111111',
                  '22222222222222', '33333333333333',
                  '44444444444444', '55555555555555',
                  '66666666666666', '77777777777777',
                  '88888888888888', '99999999999999'];
                  
    v_cnpj_quebrado smallint[];
    
    c_posicao_dv1 constant smallint default 13;
    v_arranjo_dv1 smallint[12] default array[5,4,3,2,9,8,7,6,5,4,3,2];
    v_soma_dv1 smallint default 0;
    v_resto_dv1 double precision default 0;
    
    c_posicao_dv2 constant smallint default 14;
    v_arranjo_dv2 smallint[13] default array[6,5,4,3,2,9,8,7,6,5,4,3,2];
    v_soma_dv2 smallint default 0;
    v_resto_dv2 double precision default 0;
    
begin
    
    if p_fg_permite_nulo and nullif(p_cnpj, '') is null then
        return true;
    end if;
    
    if (not (p_cnpj ~* '^([0-9]{14})$' or 
             p_cnpj ~* '^([0-9]{2}\.[0-9]{3}\.[0-9]{3}\/[0-9]{4}\-[0-9]{2})$')) or
        p_cnpj = any (v_cnpj_invalidos) or
        p_cnpj is null
    then
        return false;    
    end if;
    
    v_cnpj_quebrado := regexp_split_to_array(
      regexp_replace(p_cnpj, '[^0-9]', '', 'g'), '');
        
    -- Realiza o calculo do primeiro digito
    for t in 1..12 loop
        v_soma_dv1 := v_soma_dv1 + 
      (v_cnpj_quebrado[t] * v_arranjo_dv1[t]);
    end loop;
    v_resto_dv1 := ((10 * v_soma_dv1) % 11) % 10;
       
    if (v_resto_dv1 != v_cnpj_quebrado[13]) 
    then
        return false;
    end if;
    
    -- Realiza o calculo do segundo digito    
    for t in 1..13 loop
        v_soma_dv2 := v_soma_dv2 + 
      (v_cnpj_quebrado[t] * v_arranjo_dv2[t]);
    end loop;
    v_resto_dv2 := ((10 * v_soma_dv2) % 11) % 10;
    
    return (v_resto_dv2 = v_cnpj_quebrado[c_posicao_dv2]);    
    
end;
$$ language plpgsql;


