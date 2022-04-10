// The following example code replicates the middleware system that is shown above for application-level middleware, by using router-level middleware:

const express = require('express');
const app = express();
const router = express.Router();

// a middleware function with no mount path. This is executed for eveery request to the server
router.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});

// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
router.use(
    '/user/:id',
    (req, res, next) => {
        console.log('Request URL: ', req.originalUrl);
        next();
    },
    (req, res, next) => {
        console.log('Request Type: ', req.method);
        next();
    }
);

// a middleware sub-stack that handles GET request to the /user/:id path
router.get(
    '/user/:id',
    (req, res, next) => {
        // if the user ID is 0, skip to the next router
        if (req.params.id === '0') next('route');
        // otherwise pass control to the next middleware function in this stack
        else next();
    },
    (req, res, next) => {
        // render a regular page
        res.send('regular');
    }
);

// handles for the /user/:id path, which renders a special page
router.get('/user/:id', (req, res, next) => {
    console.log(req.params.id);
    res.send('special');
});

// mount the router on the app
app.use('/', router)

app.listen(3000, () => {
    console.log(`Server running on http://localhost:3000`);
});
