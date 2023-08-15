const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Mail extends Model {

}
// this User object has objects that correspond with the vars being passed in via the req.body from homeRoutes.js
Mail.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    reciever: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    messagetxt: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    sender: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    hooks: {
      
    },
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'mail',
  }
);

module.exports = Mail;


