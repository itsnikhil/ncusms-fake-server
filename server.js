var data = require('./data.js');
const authMiddleware = require('./authMiddleware.js');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();
middlewares.push(authMiddleware);
const port = process.env.PORT || 3500;

server.use(middlewares);
server.use(router);

server.listen(port);