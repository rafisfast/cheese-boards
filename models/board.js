const { DataTypes, Model } = require('sequelize');
const db = require("../db/db.js");

class Board extends Model {}

Board.init({
  // Model attributes are defined here
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rating: {
    type: DataTypes.NUMBER,
    allowNull: false
  }
}, {
  // Other model options go here
  sequelize: db, // We need to pass the connection instance
  modelName: 'Board' // We need to choose the model name
});

(async () => {
    await Board.sync({ force: true });
    // Code here
  })();

module.exports = Board;