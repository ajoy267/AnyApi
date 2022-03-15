const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

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
});
