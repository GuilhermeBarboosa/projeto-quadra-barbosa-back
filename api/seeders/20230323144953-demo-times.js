'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('times', [{
      time: 'São Paulo',
      qtd_jogadores: 10,
      qtd_pontos: 0,
      partidas_jogadas: 0,
      vitorias: 0,
      perdidas: 0,
      empate: 0,
      actived: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   {
    time: 'Palmeiras',
    qtd_jogadores: 10,
    qtd_pontos: 0,
    partidas_jogadas: 0,
    vitorias: 0,
    perdidas: 0,
    empate: 0,
    actived: true,
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    time: 'Santos',
    qtd_jogadores: 10,
    qtd_pontos: 0,
    partidas_jogadas: 0,
    vitorias: 0,
    perdidas: 0,
    empate: 0,
    actived: true,
    createdAt: new Date(),
    updatedAt: new Date()
   }
  ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('times', null, {});
  }
};
