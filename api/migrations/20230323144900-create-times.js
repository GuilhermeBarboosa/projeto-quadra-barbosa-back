'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('times', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      time: {
        type: Sequelize.STRING
      },
      qtd_jogadores: {
        type: Sequelize.INTEGER
      },
      qtd_pontos: {
        type: Sequelize.INTEGER
      },
      partidas_jogadas: {
        type: Sequelize.INTEGER
      },
      vitorias: {
        type: Sequelize.INTEGER
      },
      perdidas: {
        type: Sequelize.INTEGER
      },
      empate: {
        type: Sequelize.INTEGER
      },
      actived: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('times');
  }
};