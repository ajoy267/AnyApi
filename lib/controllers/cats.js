const { Router } = require('express');
// const Cat = require('../models/Cat');
const pool = require('../utils/pool');

module.exports = Router().post('/', async (req, res) => {
  await pool.query(
    'INSERT INTO cats(name, favoriteToy) VALUES ($1, $2) RETURNING *;',
    [req.body.name, req.body.favoriteToy]
  );
  //   const animal = new Cat(rows[0]);
  const animal = { id: '1', name: 'Hara', favoriteToy: 'Wand' };
  res.send(animal);
});
