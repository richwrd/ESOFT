import client from './database.js';

export class Insert 
{
    async inserirEmpresa(nomeEmpresa)
    {
        await client.connect()

        const dados = 'INSERT INTO geral.empresa (denominacao,datacadastro,usuario) VALUES ($, now(), current_user)' 

        await client.query(dados, [nomeEmpresa])
        await client.end()

        console.log("Empresa inserida!");

    }
}

export default Insert