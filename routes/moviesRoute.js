const { Movie, validate } = require('../models/movieModel');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const movies = await Movie.find().sort('name');
  res.send(movies);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let movie = new Movie({
    name: req.body.name,
    length: req.body.length,
    year: req.body.year,
    directorName: req.body.directorName,
    category: req.body.category,
    genres: req.body.genres,
    isAvailable: req.body.isAvailable,
    dateAdded: req.body.dateAdded
  });
  movie = await movie.save();

  res.send(movie);
});

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let movie = await Movie.findById(req.params.id);

  if (!movie) return res.status(404).send('The movie was not found.');

  Object.assign(movie, req.body);

  movie = await movie.save();
  
  res.send(movie);
});

router.delete('/:id', async (req, res) => {
  const movie = await Movie.findByIdAndRemove(req.params.id);

  if (!movie) return res.status(404).send('The movie was not found.');

  res.send(movie);
});

router.get('/:id', async (req, res) => {
  const movie = await Movie.findById(req.params.id);

  if (!movie) return res.status(404).send('The movie was not found.');

  res.send(movie);
});

module.exports = router; 