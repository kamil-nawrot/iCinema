const mongoose = require('mongoose');
const Booking = require('./models/Booking');

mongoose.connect('mongodb://localhost:27017/iCinemaDb', { useNewUrlParser: true })
    .then(() => console.log('Successfully connected to database...'))
    .catch(err => console.err('Cannot connect to database', err));

async function getAll() {
    const bookings = await Booking.find();
    console.log(bookings);
    res.send(results);
}

async function add(booking) {
    console.log(booking.movie);
}

module.exports = { getAll, add };