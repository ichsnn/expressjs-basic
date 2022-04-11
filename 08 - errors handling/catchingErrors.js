const express = require('express');
const app = express();

const fs = require('fs');

// app.get('/', (req, res) => {
//     throw new Error('BROKEN'); // express will catch this on its own.
// });

app.get('/', (req, res, next) => {
    fs.readFile(__dirname + '/file-does-not-exist', (err, data) => {
        if (err) {
            next(err);
        } else {
            res.send(data)
        }
    });
});

app.listen(3000, () => {
    console.log(`Server running on http://localhost:3000`);
});
