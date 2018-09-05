'use strict'

const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.status(200).send('Funcionando...');
});

router.get('/:id', (req, res) =>{
    res.status(200).send(`O id passado foi ${req.params.id}`);
});

router.post('/', (req, res) =>{

});

router.put('/:id', (req, res) =>{

});

router.delete('/:id', (req, res) =>{

});

module.exports = router;