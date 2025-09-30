const express = require('express');
const recipesRouter = require('./recipes');
const router = express.Router();

router.use('/recipes', recipesRouter);

module.exports = router;