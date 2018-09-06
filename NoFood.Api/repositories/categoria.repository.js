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

    async update(id, data){
        await CategoriaModel.findByIdAndUpdate(id, {$set: data});
        let resultado = await CategoriaModel.findById(id);
        return resultado;
    }

    async getAll(){
        return await CategoriaModel.find();
    }
}

module.exports = categoriaRepository();