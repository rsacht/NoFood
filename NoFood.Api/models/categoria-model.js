'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const categoriaModel = new schema({
    titulo:{trim:true, index: true, required:true, type:String},
    descricao: {type: String},
    foto:{type: String, required:true},
    ativa:{type: Boolean, required: true},
    dataCriacao:{type: Date, default:Date.now}
}, {versionKey:false});

//pre -> que deve fazer antes de salvar (validações)
categoriaModel.pre('save', next =>{
    let agora = new Date();
    //Se a data de criação for nula ou vazia, preencher com a data atual
    if(!this.dataCriacao)
        this.dataCriacao = agora;
    next();
});

module.exports = mongoose.model('Categoria', categoriaModel);