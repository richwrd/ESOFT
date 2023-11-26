import pg from 'pg'

const client = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    password: 'postgres',
})

export default client