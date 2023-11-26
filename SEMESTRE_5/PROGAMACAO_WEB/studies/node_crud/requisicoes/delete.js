import client from './database.js';


class Delete{
    
    async deleteEmpresa()
    {
        await client.connect()

        const dados = 'DELETE FROM geral.empresa WHERE idkey = $'

        await client.query(dados, ['1'])
        await client.end()

        console.log("deletado!");
    }

}

export default Delete
