const express = require('express');
const app = express();

// This is a very basic route
// app.get('/', (req, res) => {
//     res.send('GET request to the homepage');
// })

// There is a special route method, app.all(), used to load middleware functions at a path for all HTTP request methods.
// It's will execute GET, POST, PUT DELETE, or any other HTTP request method supported in http module
// app.all('/secret', (req, res, next) => {
//     res.send('Accessing the secret section ...');
//     next();
// })

// ***** ROUTE PATHS *****

app.get('/', (req, res) => {
    res.send('root');
});

app.get('/about', (req, res) => {
    res.send('about');
});

app.get('/random.text', (req, res) => {
    res.send('random.text');
});

// route path abcd, abbcd, abbbcd and soon
app.get('/ab?cd', (req, res) => {
    res.send('ab?cd');
});

// abcd, abxcd, abRANDOMcd, ab123cd, and so on
app.get('/ab*cd', (req, res) => {
    res.send('/ab*cd');
});

// /abe and /abcde
app.get('/ab(cd)?e', (req, res) => {
    res.send('/ab(cd)?e');
});

// match anything with an "a" in it
app.get(/a/, (req, res) => {
    res.send('/a/')
})

// match butterfly and dragonfly, but not butterflyman and so on
app.get(/.*fly$/, (req, res) => {
    res.send('/.*fly/');
})

app.listen(3000, () => {
    console.log(`Server running on port 3000`);
});
