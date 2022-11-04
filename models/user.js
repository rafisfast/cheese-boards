const { DataTypes, Model } = require('sequelize');
const db = require("../db/db.js");

class User extends Model {}

User.init({
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
  sequelize: db, // We need to pass the connection instance
  modelName: 'User' // We need to choose the model name
});

(async () => {
    await User.sync({ force: true });
    // Code here
  })();

module.exports = User;