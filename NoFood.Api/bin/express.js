const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Routers
const categoriaRouter = require('../routes/categoria-router');
const produtoRouter = require('../routes/produto-router');

//Criando/Invocando a Api/Server web do express
const app = express();

//Configurações de Parse do JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Configurando a conexão com banco de dados
mongoose.connect();

//Configurando as rotas
app.use('/api/categoria', categoriaRouter);
app.use('/api/produto', produtoRouter);

module.exports = app;