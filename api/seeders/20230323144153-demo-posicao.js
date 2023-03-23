'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('posicoes', [{
      posicao: 'Goleiro',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      posicao: 'Ala',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      posicao: 'Pivô',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      posicao: 'Fixo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('posicoes', null, {});
  }
};
