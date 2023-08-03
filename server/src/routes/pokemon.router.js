const express = require('express');

const router = express.Router();

router.route('/').post((req, res) => {
  res.json({
    message: 'works',
  });
});

module.exports = { pokemonRouter: router };
