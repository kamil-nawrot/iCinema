const mongoose = require('mongoose');
const Booking = require('./models/Booking');

const dbUri = 'mongodb+srv://admin:admin@icinemadb-ohy6u.mongodb.net/Bookings';
mongoose.connect(dbUri, { useNewUrlParser: true })
    .then(() => console.log('Successfully connected to database...'))
    .catch(err => console.error('Cannot connect to database', err));

async function getBookings(req, res) {
    const bookings = await Booking.find();
    res.send(results);
}

async function addBooking(req, res) {
    const newBooking = new Booking({
        movie: {
            title: req.body.movie.title,
            id: req.body.movie.id
        },
        region: {
            region: req.body.region.region,
            lang: req.body.region.lang
        },
        showing: req.body.showing
    });
    const result = await newBooking.save();
    res.send(result);
}

module.exports = { getBookings, addBooking };