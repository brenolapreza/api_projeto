const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        port: '3300',
        password: 'root',
        database: 'projeto_10_minutos'
    }
})

module.exports = knex;