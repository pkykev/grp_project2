const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
  // this is a method added when a User class is instantiated, basically when someone makes an account
  checkPassword(loginPw) {
    // runs a comapre with the loginPw arg with this.password which i believe is a reference to the hashed password when it was created, I believe compareSync must run the same hash on the loginPw to make sure they match up
    return bcrypt.compareSync(loginPw, this.password);
  }
}
// this User object has objects that correspond with the vars being passed in via the req.body from homeRoutes.js
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    fname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    hooks: {
      // this hook grabs the new password and hash it to be stored in db
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
