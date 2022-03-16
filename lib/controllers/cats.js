const { Router } = require('express');
const Cat = require('../models/Cat');

module.exports = Router().post('/', async (req, res) => {
  try {
    const animal = await Cat.insert({
      name: req.body.name,
      favoriteToy: req.body.favoriteToy,
    });
    res.send(animal);
  } catch {
    return null;
  }
});
