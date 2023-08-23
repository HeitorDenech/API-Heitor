// importar o pacote express

const express = require('express');

// instanciar o express na variavel app
const app = express();

// defenir a porta do servidor

const PORT = 3004;

app.get('/api/teste', (request, response) => {
    response.send('Inter maior do sul');
});

// testar o servidor para ver se está rodando

app.listen(PORT, () => console.log(`Running at port ${PORT}`));