'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class stopWatcherRecord extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  stopWatcherRecord.init({
    timeInit: DataTypes.TIME,
    timeEnd: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'stopWatcherRecord',
  });
  
  return stopWatcherRecord;
};