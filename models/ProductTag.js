const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // Start
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
     autoIncrement: true,
    },
    Product_Id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id',
    }},
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id',
    }
    },
    //End
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
