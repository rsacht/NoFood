'use strict'

const app = require('../NoFood.Api/bin/express');

app.listen(3000, () =>{
    console.info('Api inicializada com sucesso na porta 3000. Acesse http://localhost:3000');
})