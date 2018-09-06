require('../models/categoria-model');
const mongoose = require('mongoose');
const CategoriraModel = mongoose.model('Categoria');

class categoriaRepository{
    constructor(){

    }

    async create(data){
        let categoria = new CategoriraModel(data);
        let resultado = await categoria.save();
        return resultado;
    }
}

module.exports = categoriaRepository();