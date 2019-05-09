const mongoose = require('mongoose');
const movieSchema = require('./Movie');

var bookingSchema = new mongoose.Schema({
    movie: movieSchema,
    region: {
        region: { type: String, required: true, minlength: 2, maxlength: 2 },
        lang: { type: String, required: true, minlength: 5, maxlength: 5 }
    },
    showing: { type: Date, required: true }
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;