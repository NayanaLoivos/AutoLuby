'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Veiculos', [
    {
      marca: 'Toyota',
      modelo: 'Corolla',
      ano: 2020,
      km: 100.000,
      cor: 'preto',
      chassi: '',
      preco: 130.000,
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      marca: 'Chevrolet',
      modelo: 'Onix',
      ano: 2019,
      km: 100.000,
      cor: 'preto',
      chassi: '',
      preco: 60.000,
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      marca: 'Chevrolet',
      modelo: 'Cruze',
      ano: 2012,
      km: 200.000,
      cor: 'preto',
      chassi: '',
      preco: 50.000,
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      marca: 'Fiat',
      modelo: 'Strada',
      ano: 2021,
      km: 100.000,
      cor: 'branco',
      chassi: '',
      preco: 70.000,
      createdAt: new Date(),
      updatedAt: new Date() 
     
    }
  ], {});
  
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.bulkDelete('Veiculos', null, {});
    
  }
};
