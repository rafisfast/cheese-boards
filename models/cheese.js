const { DataTypes, Model } = require('sequelize');
const db = require("../db/db.js");

class Cheese extends Model {}

Cheese.init({
  // Model attributes are defined here
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
  sequelize: db, // We need to pass the connection instance
  modelName: 'Board' // We need to choose the model name
});

(async () => {
    await Cheese.sync({ force: true });
    // Code here
  })();

module.exports = Cheese;