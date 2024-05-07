const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Rota para lidar com a requisição de adição de usuário
app.post('/add-user', (req, res) => {
    const { email, password } = req.body;

    // Ler os usuários existentes do arquivo JSON
    let users = [];
    try {
        const usersData = fs.readFileSync('users.json');
        users = JSON.parse(usersData);
    } catch (error) {
        console.error('Erro ao ler o arquivo de usuários:', error);
    }

    // Adicionar o novo usuário à lista de usuários
    users.push({ email, password });

    // Salvar a lista atualizada de usuários de volta no arquivo JSON
    fs.writeFile('users.json', JSON.stringify(users), (err) => {
        if (err) {
            console.error('Erro ao salvar o novo usuário:', err);
            res.status(500).send('Usuário não adicionado');
        } else {
            console.log('Novo usuário adicionado:', { email, password });
            res.status(200).send('Usuário adicionado');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

