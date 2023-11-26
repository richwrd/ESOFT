// config classe para entender os tipos de arquivo
const {Sequelize, DataTypes} = require('sequelize')

/* faz conexão com o banco*/
const db = require('../db/conn')

const Gerente = db.define('gerente', {

    idkey: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        defaultValue:  Sequelize.literal('nextval(\'geral.gerente_id_seq\')'),
        field: 'idkey' // nome da coluna na tabela do banco de dados que possui sequencia
    },
    idkey_colaborador: {
        type: DataTypes.INTEGER,
        allowNull: false 
    },
    sobrenome: {
        type: DataTypes.STRING,
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
    tableName: 'gerente'         // nome da tabela no banco de dados
});


module.exports = Gerente;