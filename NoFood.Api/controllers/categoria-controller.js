'use strict'

const mongoose = require('mongoose');
const categoria = mongoose.model('Categoria');

function categoriaController(){

}

categoriaController.prototype.post = async (req, res) =>{};

categoriaController.prototype.post = async (req, res) =>{};
categoriaController.prototype.put = async (req, res) =>{};
categoriaController.prototype.get = async (req, res) =>{
    res.status(200).send('Funcionando...');
};
categoriaController.prototype.getById = async (req, res) =>{
    res.status(200).send(`O id passado foi ${req.params.id}`);
};
categoriaController.prototype.delete = async (req, res) =>{};

module.exports = categoriaController;