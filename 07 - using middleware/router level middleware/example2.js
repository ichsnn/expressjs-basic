/*
To skip the rest of the router’s middleware functions, call next('router') to pass control back out of the router instance.

This example shows a middleware sub-stack that handles GET requests to the /user/:id path.
*/

const express = require('express');
const app = express();
const router = express.Router();

// predicate the router with a check and bail out when needed
router.use((req, res, next) => {
    console.log(req.headers['x-auth'])
    if(!req.header['x-auth']) return next('router')
    next();
})

router.get('/user/:id', (req, res) => {
    res.send('hello, user!');
})

// use the router and 401 anything failing through
app.use('/admin', router, (req, res) => {
    res.status(401).send('Error 401')
})

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000')
})