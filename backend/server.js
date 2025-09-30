const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/vegetarische-rezepte', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});