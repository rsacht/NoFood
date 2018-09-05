const express = require('express');
const bodyParser = require('body-parser');

//Routers
const categoriaRouter = require('../routes/categoria-router');

//Criando/Invocando a Api/Server web do express
const app = express();

//Configurações de Parse do JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Configurando as rotas
app.use('/api/categoria', categoriaRouter);

module.exports = app;