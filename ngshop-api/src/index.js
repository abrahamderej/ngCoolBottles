const express = require('express');
const server = express();

const port = process.env.port || '4201';

const inventoryRouter = require('./inventory.router');

server.use('/bottles/api/', inventoryRouter);

server.listen(port);

console.log(`node is running our api on port -> ${port}`);
