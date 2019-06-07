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

router.get('/:id', (req, res) => {
  const { id } = req.params;
  db('actions')
    .where ({ id })
    .then(action => {
      res.status(200).json(action);
    })
    .catch(error => {
      res.status(500).json(error);
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
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  db('actions')
    .where({ id })
    .update(req.body)
    .then(action => {
      res.status(200).json(action);
    })
    .catch(error => {
      res.status(500).json(error);
    })
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db('actions')
    .where({ id })
    .del()
    .then(action => {
      res.status(200).json(action);
    })
    .catch(error => {
      res.status(500).json(error);
    })
});
module.exports = router;