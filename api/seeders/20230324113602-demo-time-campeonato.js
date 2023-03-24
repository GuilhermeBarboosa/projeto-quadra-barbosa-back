'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('time_campeonatos', [{
      time: 1,
      campeonato: 1,
      actived: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      time: 2,
      campeonato: 1,
      actived: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      time: 3,
      campeonato: 1,
      actived: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('time_campeonatos', null, {});
  }
};
