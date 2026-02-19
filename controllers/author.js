const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize')

const models = require("../models");

const getArticleByAuthor = (req, res) => {
  console.log(req.params.id);
  models.Author.findByPk(req.params.id, {
    include: [{ model: models.Article, as: "article" }],
  })
    .then((article) => {
      res.status(200).json({ article });
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
};

module.exports = { getArticleByAuthor };