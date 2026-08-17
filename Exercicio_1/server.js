//server.js - Primeiro servidor Node.js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`Servidor Node.js rodando na porta: ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
console.log('Servidor iniciado com sucesso!');