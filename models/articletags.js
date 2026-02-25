"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ArticleTags extends Model {
    static associate(models) {
      this.belongsTo(models.Article, {
        foreignKey: "articleId",
      });

      this.belongsTo(models.Tag, {
        foreignKey: "tagId",
      });
    }
  }

  ArticleTags.init(
    {
      articleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      tagId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "ArticleTags",
    }
  );

  return ArticleTags;
};