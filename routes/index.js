const express = require('express');
const funcionarios = require('./funcionariosRoute');
const veiculos = require('./veiculosRoute');
const vendas = require('./vendasRoute');
const reservas = require('./reservasRoute');

module.exports = app => {
    app.use(express.json());
    app.use(express.urlencoded( { extended: true } ) );
    app.use(funcionarios);
    app.use(veiculos);
    app.use(vendas);
    app.use(reservas);
}