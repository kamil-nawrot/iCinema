const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
    console.log('hello world!');
});

app.listen(3001, () => {
    console.log('Server listening on port 3001...');
});