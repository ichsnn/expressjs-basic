const express = require('express');
const app = express();

// // Middleware with no mount path
// app.use((req, res, next) => {
//     console.log(`Time: ${Date.now()}`);
//     next();
// });

// // Middleware with mount path
// app.use('/user/:id', (req, res, next) => {
//     console.log('Request Type: ', req.method);
//     next();
// });

// // Route and its handler function (middleware system)
// app.get('/user/:id', (req, res, next) => {
//     res.send('USER');
// });

// Middleware functions at a mount point, with a mount path.
// app.use(
//     '/user/:id',
//     (req, res, next) => {
//         console.log('Request URL: ', req.originalUrl);
//         next();
//     },
//     (req, res, next) => {
//         console.log('Request Type: ', req.method);
//         next();
//     }
// );

// app.get('/user/:id', (req, res, next) => {
//     console.log('ID: ', req.params.id)
//     next()
// }, (req, res, next) => {
//     res.send('User info');
// })

// // handler for the /user/:id path, which print the user ID
// app.get('/user/:id', (req, res, next) => {
//     res.send(req.params.id);
// })

/* 
To skip the rest of the middleware functions from a router middleware stack, call next('route) to pass control to the next route.
NOTE: next('route) will work only in middleware functions that were loaded by using the app.METHOD() or router.METHOD() functions.
*/

// Example shows a middleware sub-stack that handles GET request to the /user/:id path.
// app.get(
//     '/user/:id',
//     (req, res, next) => {
//         // if the user id is 0, skip to the next route
//         if (req.params.id === '0') next('route');
//         // otherwise pass the control to the next middleware functions in this stack
//         else next();
//     },
//     (req, res, next) => {
//         // send a regular response
//         res.send('REGULAR');
//     }
// );

// // handler for the /user/:id path, which sends a special response
// app.get('/user/:id', (req, res, next) => {
//     res.send('SPECIAL');
// });

// Middleware can also be declared in an array for resuabilty
const logOriginalURL = (req, res, next) => {
    console.log('Request URL: ', req.originalUrl);
    next();
};

const logMethod = (req, res, next) => {
    console.log('Request Type: ', req.method);
    next();
};

const logStuff = [logOriginalURL, logMethod];

app.get('/user/:id', logStuff, (req, res, next) => {
    res.send(`User info ${req.params.id}`);
});

app.listen(3000, () => {
    console.log(`Server running on port 3000`);
});
