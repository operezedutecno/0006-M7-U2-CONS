const express = require('express');
const app = express();
const { listar, registrar } = require('./consultas.js');

app.listen(3000, () => console.log("Servidor activo http://localhost:3000"));

app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

app.get("/prendas", async (req, res) => {
    const listado = await listar(req.query);
    res.json({ prendas: listado.rows });
});


app.post("/prendas", async(req, res) => {
    const respuesta = await registrar(req.body);
    res.status(respuesta.prenda ? 201 : 500).json(respuesta);
});