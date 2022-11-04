const { DataTypes } = require('sequelize');
const { db } = require("./db/db.js");

const User = db.define('User', {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    }
});

(async () => {
    await User.sync({ force: true });
    // Code here
  })();