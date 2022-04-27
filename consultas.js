const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: 'postgres',
    database: 'minitienda',
    host: 'localhost',
    port: 5432
});

const listar = async () => {
    const config = {
        text:"SELECT * FROM prendas",
        values: []
    }

    const resp = await pool.query(config);
    return resp;
}

module.exports = { listar }

