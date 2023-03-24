'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      nome: 'admin',
      email: 'admin@gmail.com',
      senha: 'admin',
      idade: 20,
      role: 1,
      actived: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'user',
      email: 'user@gmail.com',
      senha: 'user',
      idade: 20,
      role: 2,
      actived: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'teste',
      email: 'teste@gmail.com',
      senha: 'teste',
      idade: 15,
      role: 2,
      actived: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
