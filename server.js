const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const videos = path.join(__dirname, 'public/media/Videos');
const songs = path.join(__dirname, 'public/media/Songs');
const mediaDir = path.join(__dirname, 'public/media');
const cssDir = path.join(__dirname, 'public/css');
const imgDir = path.join(__dirname, 'public/img');
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

app.get('/Videos', (req, res) => {
    fs.readdir(videos, (err, files) => {
        if (err) {
            return res.status(500).send('Erro ao listar arquivos');
        }
        res.render('videos', { files });
    });
});

app.get('/Songs', (req, res) => {
    fs.readdir(songs, (err, files) => {
        if (err) {
            return res.status(500).send('Erro ao listar arquivos');
        }
        res.render('songs', { files });
    });
});

app.use('/media', express.static(mediaDir));
app.use('/css', express.static(cssDir));
app.use('/img', express.static(imgDir));
app.use('/js', express.static(jsDir));


const PORT = 2025;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
