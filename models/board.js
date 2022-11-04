const { DataTypes } = require('sequelize');
const { db } = require("./db/db.js");

const Board = db.define('Board', {
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
});

(async () => {
    await Board.sync({ force: true });
    // Code here
  })();