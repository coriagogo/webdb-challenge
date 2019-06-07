const router = require('express').Router();

const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

router.post('/', (req, res) => {
  db('projects')
    .insert(req.body)
    .then(project => {
      return res.status(201).json(project);
    })
    .catch(error => {
      return res.status(400).json(error);
    })
});

router.get('/', (req, res) => {
  db('projects')
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(404).json(error);
    })
});

module.exports = router;
