const { request } = require('undici');
const { setValue } = require('./get-value');

describe('A', () => {
  it('should get a', async () => {
    setValue('a');

    const { body } = await request('http://localhost:7777');

    await expect(body.json()).resolves.toEqual({ value: 'a' });
  });
});
