const mongoose = require('mongoose');

var personSchema = new mongoose.Schema({
    first_name: { type: String, required: true, maxlength: 32 },
    last_name: { type: String, required: true, maxlength: 64 },
    email: { type: String, required: true, maxlength: 128 },
    phone_number: { type: String, required: false, maxlength: 16 }
});

const Person = mongoose.model('Person', personSchema);
module.exports = personSchema;