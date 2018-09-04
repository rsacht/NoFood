const express = require('express');
const app = express();

// CRUD - Verbs http (verbos http)
// Retorna sempre um status code http:
// https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
// C - CREATE
app.post('/', (req, res) =>{
    res.status(201).send('Registro Criado!');
});

//R - READ
app.get('/', (req, res) =>{
    res.status(200).send('Olá Mundo Alterado!');
});

//U - UPDATE
app.put('/', (req, res) =>{
    res.status(202).send('Registro Atualizado!');
});

//D - DELETE
app.delete('/', (req, res) =>{
    res.status(204).send('Registro Excluído');
});

//400 - bad request (utilizado para validações)
//401 - Unauthorized
//500 - Internal Server Error (erros de servidor)

app.listen(3000, () =>{
    console.log('Servidor Api NoFood iniciado na porta 3000. Acesse http://localhost:3000');
});