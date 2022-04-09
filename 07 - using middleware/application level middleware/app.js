const express = require('express');
const app = express();

// Middleware with no mount path
app.use((req, res, next) => {
    console.log(`Time: ${Date.now()}`);
    next();
});

// Middleware with mount path
app.use('/user/:id', (req, res, next) => {
    console.log('Request Type: ', req.method);
    next();
});

// Route and its handler function (middleware system)
app.get('/user/:id', (req, res, next) => {
    res.send('USER');
});

app.listen(3000, () => {
    console.log(`Server running on port 3000`);
});
