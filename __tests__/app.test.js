const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Cat = require('../lib/models/Cat');

describe('anyapi routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it('creates a cat', async () => {
    const expected = {
      name: 'Hara',
      favoriteToy: 'Wand',
    };
    const res = await request(app).post('/api/v1/cats').send(expected);
    expect(res.body).toEqual({ id: expect.any(String), ...expected });
  });

  it('gets a list of cats', async () => {
    const expected = await Cat.findAll();
    const res = await request(app).get('/api/v1/cats');
    expect(res.body).toEqual(expected);
  });
});
