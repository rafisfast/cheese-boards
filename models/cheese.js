const { DataTypes } = require('sequelize');
const { db } = require("./db/db.js");

const Cheese = db.define('Cheese', {
    // Model attributes are defined here
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
});

(async () => {
    await Cheese.sync({ force: true });
    // Code here
  })();