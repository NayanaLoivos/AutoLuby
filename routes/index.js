const express = require('express');
const funcionarios = require('./funcionariosRoute');
const veiculos = require('./veiculosRoute');

module.exports = app => {
    app.use(express.json());
    app.use(express.urlencoded( { extended: true } ) );
    app.use(funcionarios);
    app.use(veiculos);
}