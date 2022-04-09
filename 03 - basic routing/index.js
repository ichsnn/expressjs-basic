// ********** BASIC ROUTING **********
// app.METHOD(PATH, HANDLER)
// app is instance of express
// METHOD is an HTTP request method, in lowercase
// HANDLER is the function executed when the route is matched

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/', (req, res) => {
    res.send('Got a POST request');
});

app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user');
});

app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
})
