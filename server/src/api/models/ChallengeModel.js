const { DataTypes } = require('sequelize');
const sequelize = require('../../config/dbConfig');

const Challenge = sequelize.define('Challenge', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    language: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  module.exports = Challenge;