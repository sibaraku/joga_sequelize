const express = require('express');
const router = express.Router();
const articleController = require('../controllers/article');
const articleadminController = require("../controllers//admin/article");

router.get('/', articleController.getAllArticles);
router.get('/article/:slug', articleController.getArticleBySlug);
router.post("/admin/article/create", articleadminController.createArticle);

module.exports = router;