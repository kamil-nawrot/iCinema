const express = require('express');
const faker = require('faker');
const bodyParser = require('body-parser');
const app = express();

const { getAll, add } = require('./db');

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(bodyParser.json());

app.get('/api/schedule/:movie_id', (req, res) => {
    let schedule = [];
    for (let i=0; i<faker.random.number({min: 3, max: 8}); i++) {
        faker.seed(parseInt(req.params.movie_id)*i);
        let date = faker.date.future(0.02);
        date.setSeconds(0);
        date.setMilliseconds(0);
        date.setMinutes(faker.random.number({min: 1, max: 4})*15);
        date.setHours(faker.random.number({min: 9, max: 20}));
        if (i > 0) {
            if (date.getDate() === schedule[i-1].getDate()) {
                if (date.getHours() - schedule[i-1].getHours() < 2) {
                    if (schedule[i-1].getHours() < 19) {
                        date.setHours(schedule[i-1].getHours() + 2);
                    }
                    else date.setDate(schedule[i-1].getDate() + 1);
                }
            }
        }
        schedule.push(date);
    }
    schedule = schedule.sort((a, b) => a.valueOf() - b.valueOf());
    res.send(schedule);
});

app.get('/api/bookings', (req, res, next) => {
    getAll();
});

app.post('/api/bookings', (req, res, next) => {
    res.status(200).send(req.body);
    add(req.body);
});

app.listen(3001, () => {
    console.log('Server listening on port 3001...');
});