import client from './database.js';
import { fs } from 'fs';


async function esqueleto(){
    const sqlFile = fs.readFileSync('../assets/completo.sql')

    await client.connect();
    await client.query(sqlFile);
    
    console.log("Estrutura construida!");

    await client.end();
}


esqueleto()