const router = require('express').Router();

const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

router.post('/', (req, res) => {
  db('projects')
    .insert(req.body)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(error => {
      res.status(500).json(error);
    })
});

router.get('/', (req, res) => {
  db('projects')
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json(error);
    })
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  db('projects')
    .where ({ id })
    .then(project => {
      res.status(200).json(project);
    })
    .catch(error => {
      res.status(500).json(error);
    })
});

router.get('/:id/actions', (req, res) => {
  const { id } = req.params;
  db('actions')
    .where({ project_id: id })
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(error => {
      res.status(500).json(error);
    })
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  db('projects')
    .where({ id })
    .update(req.body)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(error => {
      res.status(500).json(error);
    })
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db('projects')
    .where({ id })
    .del()
    .then(project => {
      res.status(200).json(project);
    })
    .catch(error => {
      res.status(500).json(error);
    })
});

module.exports = router;
