"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("ArticleTags", [
      { articleId: 7, tagId: 1, createdAt: new Date(), updatedAt: new Date() },
      { articleId: 7, tagId: 2, createdAt: new Date(), updatedAt: new Date() },
      { articleId: 8, tagId: 1, createdAt: new Date(), updatedAt: new Date() },
      { articleId: 8, tagId: 3, createdAt: new Date(), updatedAt: new Date() },
      { articleId: 9, tagId: 4, createdAt: new Date(), updatedAt: new Date() },
      { articleId: 9, tagId: 5, createdAt: new Date(), updatedAt: new Date() },
      { articleId: 9, tagId: 6, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("ArticleTags", null, {});
  },
};
