'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stopWatcherRecords', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      timeInit: {
        type: Sequelize.TIME
      },
      timeEnd: {
        type: Sequelize.TIME
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
    await queryInterface.dropTable('stopWatcherRecords');
  }
};