'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('jogadores', [{
        posicao: 3,
        time: 2,
        user: 1,
        actived: true,
        createdAt: new Date(),
        updatedAt: new Date()
     }], {});
  
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('jogadores', null, {});
  }
};
