require('../models/usuario-model');
const base = require('../bin/base/repository-base');
const md5 = require('md5');

class usuarioRepository {

    constructor() {
        this._base = new base('Usuario');
        this._projection = 'nome email _id';
    }

    async IsEmailExiste(Email){
        return await this._base._model.findOne({email:Email}, this._projection);
    }
    
    async authenticated(Email, Senha){
        let _hashSenha = md5(Senha);
        return await this._base._model.findOne({email: Email, senha: _hashSenha}, this._projection );
    }

    async create(data) {
        let usuarioCriado = await this._base.create(data);
        return this._base._model.findById(usuarioCriado._id, this._projection );
    }

    async update(id, data) {
        let usuarioAtualizado = await this._base.update(id, 
            {
                nome: data.nome,
                email: data.email,
                foto: data.foto
            });
            return this._base._model.findById(usuarioAtualizado._id, this._projection );
    }

    async getAll() {
        return this._base._model.find({}, 'nome email _id foto' );
    }

    async getById(id) {
        return this._base._model.findById(id, this._projection );
    }

    async delete(id) {
        return await this._base.delete(id);
    }

}

module.exports = usuarioRepository;