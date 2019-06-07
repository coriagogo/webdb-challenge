const router = require('express').Router();

const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

router.get('/', (req, res) => {
  db('actions')
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(error => {
      res.status(404).json(error);
    })
});

router.post('/', (req, res) => {
  db('actions')
    .insert(req.body)
    .then(actions => {
      res.status(201).json(actions);
    })
    .catch(error => {
      res.status(400).json(error);
    })
})
module.exports = router;