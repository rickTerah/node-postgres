const express = require('express');

const app = express();

app.get('/api/home', (req, res) => {
    res.send('LEARNING TRAVIS CI WITH JASMINE');
});

const port = process.env.PORT || 2500;
const server = app.listen( port, console.log(`Listening to port ${port}...`));

module.exports = server;