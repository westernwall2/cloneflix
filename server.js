const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const mediaDir = path.join(__dirname, 'public/media');
const cssDir = path.join(__dirname, 'public/css');
const jsDir = path.join(__dirname, 'public/js');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rota que gera a página dinâmica
app.get('/', (req, res) => {
    fs.readdir(mediaDir, (err, files) => {
        if (err) {
            return res.status(500).send('Erro ao listar arquivos');
        }
        res.render('index', { files });
    });
});

app.use('/media', express.static(mediaDir));
app.use('/css', express.static(cssDir));
app.use('/js', express.static(jsDir));


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
