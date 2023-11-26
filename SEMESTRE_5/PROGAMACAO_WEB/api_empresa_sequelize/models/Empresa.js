// config classe para entender os tipos de arquivo
const {Sequelize, DataTypes} = require('sequelize')

/* faz conexão com o banco*/
const db = require('../db/conn')

const Empresa = db.define('empresa', {

    idkey: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.literal('nextval(\'geral.gerente_id_seq\')'),
        field: 'idkey' // nome da coluna na tabela do banco de dados que possui sequencia
    },
    denominacao: {
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
    tableName: 'empresa'         // nome da tabela no banco de dados
});


module.exports = Empresa;