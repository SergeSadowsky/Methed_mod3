// Import the framework and instantiate it
import Fastify from 'fastify'
import cors from '@fastify/cors'
import {readFile} from 'node:fs/promises'
const fastify = Fastify({
  logger: true
})

fastify.register(cors);

// Declare a route
fastify.get('/', async function handler (request, reply) {
  return { hello: 'world' }
})

fastify.get('/headlines', function handler (request, reply) {
    console.info(request.query);
    readFile("./headlines.json")
        .then(fileBuffer => {
            reply
                .code(200)
                .header('Content-Type', 'application/json; charset=utf-8')
                .send(fileBuffer.toString())
        })
        .catch(error => {
            console.error(error);
            reply.code(400).send({error: error.message})
        });
})

fastify.get('/search', function handler (request, reply) {
  console.info(request.query);
    readFile("./search.json")
        .then(fileBuffer => {
            reply
                .code(200)
                .header('Content-Type', 'application/json; charset=utf-8')
                .send(fileBuffer.toString())
        })
        .catch(error => {
            console.error(error);
            reply.code(500).send({error: error.message})
        });
})
  

// Run the server!
try {
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}
