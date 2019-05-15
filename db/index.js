const mongoose = require('mongoose');
const Booking = require('./models/Booking');
mongoose.Promise = global.Promise;

const dbUri = 'mongodb+srv://admin:admin@icinemadb-ohy6u.mongodb.net/Bookings';
mongoose.connect(dbUri, { useNewUrlParser: true })
    .then(() => console.log('Successfully connected to database...'))
    .catch(err => console.error('Cannot connect to database', err));

async function getBookings(req, res) {
    const bookings = await Booking.find({showing: req.query.showing, "movie.id": req.query.id }).select('seats').select('seats');
    console.log('Found bookings:');
    console.log(bookings);
    res.json(bookings);
}

async function addBooking(req, res) {
    const newBooking = new Booking(req.body);
    const result = await newBooking.save();
    console.log('Added new booking');
    res.send(result);
}

module.exports = { getBookings, addBooking };