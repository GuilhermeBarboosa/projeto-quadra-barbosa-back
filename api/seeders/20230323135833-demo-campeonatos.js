'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Campeonatos', [
        {
        campeonato: 'Campeonato Brasileiro',
        actived: true,
        createdAt: new Date(),
        updatedAt: new Date() 
       },
        {
        campeonato: 'Campeonato Paulista',
        actived: true,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        campeonato: 'Campeonato Carioca',
        actived: true,
        createdAt: new Date(),
        updatedAt: new Date()
        }
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Campeonatos', null, {});
  }
};
