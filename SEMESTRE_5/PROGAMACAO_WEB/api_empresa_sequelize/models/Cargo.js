// config classe para entender os tipos de arquivo
const {Sequelize, DataTypes} = require('sequelize')


/* faz conexão com o banco*/
const db = require('../db/conn')

const Cargo = db.define('cargo', {

    idkey: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.literal('nextval(\'geral.cargo_id_seq\')'),
        field: 'idkey' // nome da coluna na tabela do banco de dados que possui sequencia
    },
    denominacao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    salariobase: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
    
},
{
    timestamps: false,                  // desativa a criação automática das colunas "createdAt" e "updatedAt"
    schema: 'geral',               // aponta schema geral
    tableName: 'cargo'         // nome da tabela no banco de dados
});


module.exports = Cargo;