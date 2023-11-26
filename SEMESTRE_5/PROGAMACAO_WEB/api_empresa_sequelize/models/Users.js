// config classe para entender os tipos de arquivo
const { Sequelize, DataTypes } = require('sequelize');

/* faz conexão com o banco*/
const db = require('../db/conn');
const sequelize = require('../db/conn');

const Users = db.define('users', {
    idkey: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    nome: {
        type: DataTypes.TEXT,
        allowNull: false,
        require: true
    },
    permissoes: {
        type: DataTypes.TEXT,
        allowNull: false
    }
},  
{timestamps: false,     // Desativar automaticamente as colunas createdAt e updatedAt
underscored: true,      // Use nomes de colunas em formato snake_case
freezeTableName: true, // Manter o nome da tabela como o nome do modelo (sem pluralização)
schema: 'geral'
});

// Sincronizar o modelo com o banco de dados
Users.sync({ force: false })
.then(() => {
    console.log('Modelo User sincronizado com o banco de dados');
})
.catch((error) => {
    console.error('Erro ao sincronizar o modelo User:', error);
});

module.exports = Users;