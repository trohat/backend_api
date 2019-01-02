const Joi = require('joi');
const mongoose = require('mongoose');

const Movie = mongoose.model('Movie', new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 100
  },
  length: Number,
  year: {
      type: Number,
      min: [ 1900, "No movies are older than 1900."],
      max: 2100
  },
  directorName: {
      type: String,
      minlength: 3,
      maxlength: 100
  },
  category: {
      type: String,
      lowercase: true,
      enum: ['children', '12+', '15+', '18+']
  },
  genres: {
      type: [ String ],
      required: true,
      lowercase: true,
      validate: {
          validator: function(genres) {
              return genres.length > 0;
          },
          message: 'At least one genre is required.'
      }
  },
  isAvailable: Boolean,
  dateAdded: {
      type: Date,
      default: Date.now
  }
}));

function validateMovie(movie) {
  const schema = {
    name: Joi.string().min(3).max(100).required(),
    length: Joi.number(),
    year: Joi.number().min(1900).max(2100),
    directorName: Joi.string().min(3).max(100),
    category: Joi.string(),
    genres: Joi.array().items(Joi.string()),
    isAvailable: Joi.boolean(),
    dateAdded: Joi.date()
  };

  return Joi.validate(movie, schema);
}

exports.Movie = Movie; 
exports.validate = validateMovie;