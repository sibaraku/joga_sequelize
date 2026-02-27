const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize')

const models = require("../../models");

const createArticle = (req, res) => {
  let name = req.body.name;
  let slug = req.body.slug;
  let image = req.body.image;
  let body = req.body.body;
  let author_id = req.body.author_id;

  const newArticle = models.Article.create({
    name: name,
    slug: slug,
    image: image,
    body: body,
    published: new Date().toISOString().slice(0, 19).replace("T", " "),
    author_id: author_id,
  })
    .then((article) => {
      console.log(article);
      res.status(200).json({ message: "New article is added" });
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
};

const updateArticle = (req, res) => {
  let name = req.body.name;
  let slug = req.body.slug;
  let image = req.body.image;
  let body = req.body.body;

  const updatedArticle = models.Article.update(
    {
      name: name,
      slug: slug,
      image: image,
      body: body,
      published: new Date().toISOString().slice(0, 19).replace("T", " "),
    },
    { where: { id: req.params.id } }
  )
    .then((article) => {
      console.log(article);
      res
        .status(200)
        .json({ message: `Updated article with id ${req.params.id}` });
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
};

module.exports = { createArticle, updateArticle };