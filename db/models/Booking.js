const mongoose = require('mongoose');
const movieSchema = require('./Movie');
const personSchema = require('./Personalnfo');

var bookingSchema = new mongoose.Schema({
    movie: movieSchema,
    region: {
        region: { type: String, required: true, minlength: 2, maxlength: 2 },
        lang: { type: String, required: true, minlength: 5, maxlength: 5 }
    },
    showing: { type: Date, required: true },
    seats: [{ type: String, minlength: 2, maxlength: 3 }],
    person: personSchema
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;