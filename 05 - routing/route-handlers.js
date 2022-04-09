const express = require('express');
const app = express();

// ***** ROUTE HANDLERS *****

app.get('/example/a', (req, res) => {
    res.send('Hello From A!');
});

// More than one callback function can handle a route by specify the next object.
app.get(
    '/example/b',
    (req, res, next) => {
        console.log('the response will be sent by the next function ...');
        next();
    },
    (req, res) => {
        res.send('Hello From B!');
    }
);

// An array of callback functions can handle a route. For Example
const cb0 = (req, res, next) => {
    console.log('CBO')
    next()
}

const cb1 = (req, res, next) => {
    console.log('CB1')
    next()
}

const cb2 = (req, res) => {
    res.send('Hello From C!')
}

app.get('/example/c', [cb0, cb1, cb2]);

app.get('/example/d', [cb0, cb1], (req, res, next) => {
    console.log('the response will be sent by next function ...')
    next();
}, (req, res) => {
    res.send('Hello from D!')
})


app.listen(3000, () => {
    console.log(`Server running on port 3000`);
});
