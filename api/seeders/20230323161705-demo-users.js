'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      nome: 'admin',
      email: 'adm@gmail.com',
      senha: '$2b$10$z8hpSOLSXM0GM3Piuon4Aexi.To2QI9um48sg3gz5e.pKRafS4JxK',
      idade: 20,
      role: 1,
      actived: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'user',
      email: 'user@gmail.com',
      senha: '$2b$10$z8hpSOLSXM0GM3Piuon4Aexi.To2QI9um48sg3gz5e.pKRafS4JxK',
      idade: 20,
      role: 2,
      actived: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'teste',
      email: 'teste@gmail.com',
      senha: '$2b$10$z8hpSOLSXM0GM3Piuon4Aexi.To2QI9um48sg3gz5e.pKRafS4JxK',
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
