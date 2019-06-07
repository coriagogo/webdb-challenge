const express = require('express');
const helmet = require('helmet');

const server = express();

const projectsRouter = require('./routes/projects-router.js');
const actionsRouter = require('./routes/actions-router.js');

server.use(helmet());
server.use(express.json());

server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);

const port = process.env.PORT || 3300;
server.listen(port, () => 
  console.log(`\n** Server running on http://localhost:${port} **\n`)
);