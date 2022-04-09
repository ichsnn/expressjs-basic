const express = require('express');
const app = express();

// ***** Middleware function myLogger *****
const myLogger = (req, res, next) => {
    console.log('LOGGED');
    next();
}

// Every time the app receives a request, it prints the message "LOGGED" to the terminal
app.use(myLogger);

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(3000, () => {
    console.log(`Server running on port 3000`);
});
