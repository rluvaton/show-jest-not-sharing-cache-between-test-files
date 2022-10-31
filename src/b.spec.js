const { request } = require('undici');
const { setValue } = require('./get-value');

describe('B', () => {
  it('should get b', async () => {
    setValue('b');

    const { body } = await request('http://localhost:7777');

    await expect(body.json()).resolves.toEqual({ value: 'b' });
  });
});
