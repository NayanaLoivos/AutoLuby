'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('funcionarios', [
      {
        cpf: '10614789760',
        nome: 'Bruno Fernandez',
        email: 'brunofernandez@email.com',
        biografia: 'Atua na área de vendas há 5 anos, no futuro pretende trabalhar com robôtica.',
        senha: '123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cpf: '10117889710',
        nome: 'Daniele Santos',
        email: 'danisantos@email.com',
        biografia: 'Atua na área de vendas há 1 anos, cursa Ciências da Computação no Insper.',
        senha: '123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cpf: '10987456489',
        nome: 'Jessica Dias',
        email: 'jessicadias@email.com',
        biografia: 'Seu último emprego foi na área de RH e migrou para área de vendas há 6 meses.',
        senha: '123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cpf: '11087945697',
        nome: 'John Alves',
        email: 'johnalves@email.com',
        biografia: 'Atua na área de vendas há 5 anos, no futuro pretende trabalhar com robôtica.',
        senha: '123',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('funcionarios', null, {});
    
  }
};
