// api/models/submissionModel.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../config/dbConfig');

const Submission = sequelize.define('Submission', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  challengeId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Challenges',
      key: 'id',
    },
    allowNull: false,
  },
  code: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  result: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Submission;
