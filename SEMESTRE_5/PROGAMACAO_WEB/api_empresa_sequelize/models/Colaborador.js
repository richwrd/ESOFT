// config classe para entender os tipos de arquivo
const {Sequelize, DataTypes} = require('sequelize')



/* faz conexão com o banco*/
const db = require('../db/conn')

const Colaborador = db.define('colaborador', {

    idkey: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.literal('nextval(\'geral.colaborador_id_seq\')'),
        field: 'idkey' // nome da coluna na tabela do banco de dados que possui sequencia
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sobrenome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idkey_cargo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ativo: {
        type: DataTypes.BOOLEAN,
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
    tableName: 'colaborador'         // nome da tabela no banco de dados
});


module.exports = Colaborador;