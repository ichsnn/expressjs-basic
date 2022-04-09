const express = require('express');
const app = express();

// ***** ROUTE PARAMETERS *****

app.get('/user/:userId/books/:bookId', (req, res) => {
    res.send(req.params);
});

app.get('/flights/:from-:to', (req, res) => {
    res.send(req.params);
});

app.get('/plantae/:genus.:species', (req, res) => {
    res.send(req.params);
});

app.get('/user/:userId(\\d+)', (req, res) => {
    res.send(req.params);
});

app.listen(3000, () => {
    console.log(`Server running on port 3000`);
});
