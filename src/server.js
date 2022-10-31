const { getValue } = require('./get-value');
const Fastify = require('fastify');

module.exports = {
  async startServer() {
    const fastify = Fastify()

    fastify.get('/', function (request, reply) {
      reply.send({ value: getValue() })
    })

    try {
      await fastify.listen({ port: 7777 });
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  },
}
