const mongoose = require('mongoose');
const Booking = require('./models/Booking');

const dbUri = 'mongodb+srv://admin:admin@icinemadb-ohy6u.mongodb.net/Bookings';
mongoose.connect(dbUri, { useNewUrlParser: true })
    .then(() => console.log('Successfully connected to database...'))
    .catch(err => console.error('Cannot connect to database', err));

async function getAll() {
    const bookings = await Booking.find();
    console.log(bookings);
    res.send(results);
}

async function add(booking) {
    //console.log(booking);
    const newBooking = new Booking({
        movie: {
            title: booking.movie.title,
            id: booking.movie.id
        },
        region: {
            region: booking.region.region,
            lang: booking.region.lang
        },
        showing: booking.showing
    });
    const result = await newBooking.save();
}

module.exports = { getAll, add };