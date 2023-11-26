// config classe para entender os tipos de arquivo

const {Sequelize, DataTypes} = require('sequelize')
const Departamento = require('./Departamento');       // Importe o modelo da outra tabela
const Colaborador = require('./Colaborador');

/* faz conexão com o banco*/
const db = require('../db/conn')

const TPL_departamento_colaborador = db.define('tpl_departamento_colaborador', {

    idkey_departamento: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'idkey', // nome da coluna na tabela do banco de dados que possui sequencia
        references: {
            model: Departamento,
            key: 'idkey'
        }
    },
    idkey_departamento: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'idkey', // nome da coluna na tabela do banco de dados que possui sequencia
        references: {
            model: Colaborador,
            key: 'idkey'
        }
    },
},
{
    timestamps: false,                  // desativa a criação automática das colunas "createdAt" e "updatedAt"
    schema: 'geral',               // aponta schema geral
    tableName: 'tpl_departamento_colaborador'         // nome da tabela no banco de dados
});


module.exports = TPL_departamento_colaborador;