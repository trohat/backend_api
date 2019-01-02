const mongoose = require('mongoose');
const basicRoute = require('./routes/basicRoute');
const moviesRoute = require('./routes/moviesRoute');
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost/moviesdb', { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error('Could not connect to MongoDB.'));

app.use(express.json());
app.use('/', basicRoute);
app.use('/api/movies', moviesRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}.`));