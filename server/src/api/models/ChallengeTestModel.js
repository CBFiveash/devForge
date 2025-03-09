const { DataTypes } = require('sequelize');
const sequelize = require('../../config/dbConfig'); 

const ChallengeTest = sequelize.define('ChallengeTest', {
    challengeId: {
      type: DataTypes.INTEGER,
      references: {
        model: Challenge,
        key: 'id',
      },
    },
    input: {
      type: DataTypes.TEXT,
    },
    expectedOutput: {
      type: DataTypes.TEXT,
    },
  });

  module.exports = ChallengeTest;