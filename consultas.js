const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: 'postgres',
    database: 'minitienda',
    host: 'localhost',
    port: 5432
});

const listar = async (criterios) => {
    const config = {
        text:"SELECT * FROM prendas",
        values: []
    }

    const llaves = Object.keys(criterios);
    llaves.forEach((item, index) => {
        // Ejemplo 1
        // if(index == 0){
        //     config.text += ` WHERE ${item} ilike '%${criterios[item]}%'`
        // } else {
        //     config.text += ` AND ${item} ilike '%${criterios[item]}%'`
        // }

        // Ejemplo 2 (Recomendado)
        if(index == 0){
            config.text += ` WHERE ${item} ilike $${index+1}`
        } else {
            config.text += ` AND ${item} ilike $${index+1}`
        }
        config.values.push(`%${criterios[item]}%`)
    });
    // console.log(criterios);
    // console.log(config);

    const resp = await pool.query(config);
    return resp;
}


const registrar = async (prenda) => {
    const { nombre, color } = prenda;
    const config = {
        text: "INSERT INTO prendas(nombre, color) VALUES($1, $2) RETURNING *",
        values: [nombre, color]
    }

    try {
        const resp = await pool.query(config);
        return {
            message: 'Registro realizado exitosamente',
            prenda: resp.rows[0]
        }
    } catch (error) {
        return {
            message: "Ocurrió un error registrando prenda"
        }
    }
    
}

module.exports = { listar, registrar }

