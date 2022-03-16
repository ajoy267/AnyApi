const { Router } = require('express');
const Cat = require('../models/Cat');

module.exports = Router()
  .post('/', async (req, res) => {
    try {
      const animal = await Cat.insert({
        name: req.body.name,
        favoriteToy: req.body.favoriteToy,
      });
      res.send(animal);
    } catch {
      return null;
    }
  })

  .get('/', async (req, res) => {
    const animal = await Cat.findAll();
    res.send(animal);
  })

  .get('/:id', async (req, res, next) => {
    try {
      const animal = await Cat.findById(req.params.id);
      res.send(animal);
    } catch (error) {
      error.status = 404;
      next(error);
    }
  });
