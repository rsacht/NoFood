const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//Transformando os dados em JSON
app.use(bodyParser.json());
//Converte em dados que podem ser transmitidos pela Internet
app.use(bodyParser.urlencoded({extended:false}));

let pessoas = [];
// CRUD - Verbs http (verbos http)
// Retorna sempre um status code http:
// https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
// C - CREATE
app.post('/', (requisicao, resposta) =>{
    pessoas.push(requisicao.body);
    resposta.status(201).send(requisicao.body);
});

//R - READ
app.get('/', (req, res) =>{
    res.status(200).send(pessoas);
});

//U - UPDATE
app.put('/:id', (req, res) =>{
    let pessoaEncontrada = pessoas.filter(pes=>{return pes.id == req.params.id});
    pessoaEncontrada = req.body;
    res.status(202).send(pessoaEncontrada);
});

//D - DELETE
app.delete('/:id', (req, res) =>{
    for (let index = 0; index < pessoas.length; index++) {
        const pessoa = pessoas[index];
        if (pessoa.id == req.params.id){
            pessoas.splice(index, 1);
        }    
    }
    res.status(204).send();
});

//400 - bad request (utilizado para validações)
//401 - Unauthorized
//500 - Internal Server Error (erros de servidor)

app.listen(3000, () =>{
    console.log('Servidor Api NoFood iniciado na porta 3000. Acesse http://localhost:3000');
});