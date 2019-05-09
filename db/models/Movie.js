const mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({
    title: { type: String, required: true, minlength: 1, maxlength: 100 },
    id: { type: Number, required: true, minlength: 3, maxlength: 10},
    poster: { type: String, required: false, minlength: 20, maxlength: 64 },
    genres: { type: [String], required: false },
    release_date: { type: Date, required: false },
    average_score: { type: Number, required: false, min: 0, max: 10 },
    overview: { type: String, required: false, minlength: 0, maxlength: 1000 },
    imdb_id: { type: Number, required: false, minlength: 7, maxlength: 7}
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = movieSchema;