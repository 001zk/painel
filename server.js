const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

// Cria o servidor HTTP
const server = http.createServer((req, res) => {
    // Rota para a página do painel de administração
    if (req.url === '/painel-adm') {
        // Lê o arquivo HTML do painel de administração
        fs.readFile(path.join(__dirname, 'painel-adm.html'), (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Erro interno do servidor');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (req.url === '/painel-adm.js' || req.url === '/style.css') {
        // Rota para servir os arquivos JavaScript e CSS
        fs.readFile(path.join(__dirname, req.url), (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('Arquivo não encontrado');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Página não encontrada');
    }
});

// Inicia o servidor na porta especificada
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
