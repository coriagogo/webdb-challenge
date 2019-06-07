const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
const knexConfig = require('./knexfile.js');

const db = knex(knexConfig.development);

const server = express();

server.use(helmet());
server.use(express.json());


const port = process.env.PORT || 3300;
server.listen(port, () => 
  console.log(`\n** Server running on http://localhost:${port} **\n`)
);