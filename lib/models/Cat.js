const pool = require('../utils/pool');

module.exports = class Cat {
  id;
  name;
  favoriteToy;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.favoriteToy = row.favorite_toy;
  }

  static async insert({ name, favoriteToy }) {
    const { rows } = await pool.query(
      'INSERT INTO cats (name, favorite_toy) VALUES ($1, $2) RETURNING *;',
      [name, favoriteToy]
    );
    return new Cat(rows[0]);
  }

  static async findAll() {
    const { rows } = await pool.query('SELECT * FROM cats');
    return rows.map((row) => new Cat(row));
  }

  static async findById(id) {
    const { rows } = await pool.query('SELECT * FROM cats WHERE id=$1', [id]);
    return new Cat(rows[0]);
  }

  static async update(id, details) {
    const currentCat = await Cat.findById(id);
    const updateCat = { ...currentCat, ...details };
    const { name, favoriteToy } = updateCat;
    const { rows } = await pool.query(
      'UPDATE cats SET name=$1, favorite_toy=$2 WHERE id=$3 RETURNING *',
      [name, favoriteToy, id]
    );
    return new Cat(rows[0]);
  }
};
