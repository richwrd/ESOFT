// config classe para entender os tipos de arquivo
const {Sequelize, DataTypes} = require('sequelize')

/* faz conexão com o banco*/
const db = require('../db/conn')

/* 
const colaborador = db.define('colaborador', {
id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'colaborador_id' // nome da coluna na tabela do banco de dados
},
nome: {
    type: DataTypes.STRING,
    allowNull: false
},
  // outras colunas do colaborador
}, {
  timestamps: false, // desativa a criação automática das colunas "createdAt" e "updatedAt"
  tableName: 'nome_da_tabela' // nome da tabela no banco de dados
});

colaborador.sync(); // sincroniza o modelo com o banco de dados
 */

const Departamento = db.define('departamento', {

    idkey: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.literal('nextval(\'geral.departamento_id_seq\')'),
        field: 'idkey' // nome da coluna na tabela do banco de dados que possui sequencia
    },
    denominacao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idkey_empresa: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idkey_gerente: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    datacadastro: {
        type: DataTypes.DATE,
        allowNull: false
    },
    usuario: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    
},
{
    timestamps: false,                  // desativa a criação automática das colunas "createdAt" e "updatedAt"
    schema: 'geral',               // aponta schema geral
    tableName: 'departamento'         // nome da tabela no banco de dados
});


module.exports = Departamento;