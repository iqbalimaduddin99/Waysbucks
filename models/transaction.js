'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      transaction.belongsTo(models.user, { 
				as: 'user',
        foreignKey: {
          name: 'userId'
        } 
			});
      transaction.hasMany(models.transactionProduct, { 
        as: 'orderProduct',
        foreignKey: {
          name: 'userId'
        }
       });
    }
  };
  transaction.init({
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone:  DataTypes.STRING,
    posCode: DataTypes.STRING,
    status: DataTypes.STRING,
    address: DataTypes.STRING,
    attachment: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'transaction',
  });
  return transaction;
};