const express = require('express');
const app = express();
const port = 2025;

app.get('/', (req, res) => {
    res.send('Olá, Jeferson!');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
