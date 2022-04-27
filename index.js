const express = require('express');
const app = express();
const { listar } = require('./consultas.js');

app.listen(3000, () => console.log("Servidor activo http://localhost:3000"))

app.get("/prendas", async (req, res) => {
    const listado = await listar();
    res.json({ prendas: listado.rows });
})