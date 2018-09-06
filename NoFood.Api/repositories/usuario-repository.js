require('../models/usuario-model');
const base = require('../bin/base/repository-base');
const md5 = require('md5');

class usuarioRepository {

    constructor() {
        this._base = new base('Usuario');
    }
    
    async authenticated(Email, Senha){
        let _hashSenha = md5(Senha);
        this._base._model.findOne({email: Email, senha: _hashSenha}, 'nome email _id');
    }

    async create(data) {
        return await this._base.create(data);
    }

    async update(id, data) {
        return await this._base.update(id, data);
    }

    async getAll() {
        return await this._base.getAll();
    }

    async getById(id) {
        return await this._base.getById(id);
    }

    async delete(id) {
        return await this._base.delete(id);
    }

}

module.exports = usuarioRepository;