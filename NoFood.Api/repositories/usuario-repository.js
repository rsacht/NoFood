require('../models/usuario-model');
const base = require('../bin/base/repository-base');
const md5 = require('md5');

class usuarioRepository {

    constructor() {
        this._base = new base('Usuario');
        this._projection = 'nome email _id';
    }
    
    async authenticated(Email, Senha){
        let _hashSenha = md5(Senha);
        this._base._model.findOne({email: Email, senha: _hashSenha}, this._projection );
    }

    async create(data) {
        let usuarioCriado = await this._base.create(data);
        return this._base._model.findById(usuarioCriado._id, this._projection );
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