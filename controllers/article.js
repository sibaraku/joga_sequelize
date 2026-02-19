const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize')

const models = require('../models');

const getAllArticles = (req, res) => {
  models.Article.findAll()
    .then((articles) => {
      res.status(200).json({ articles });
    })
    .catch((error) => {
      return res.status(500).send(error.message);
    });
};

const getArticleBySlug = (req, res) => {
  models.Article.findOne({
    where: { slug: req.params.slug },
    include: [{ 
        model: models.Author,}], 
  })
    .then((article) => {
      console.log(article);
      res.status(200).json({ article });
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
};


module.exports = { getAllArticles, getArticleBySlug };