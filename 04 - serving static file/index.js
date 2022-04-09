const express = require('express');
const app = express();
const path = require('path');


// Use the "express.static" built in middleware function in Express to serve static file.
// express.static(root, [options])
app.use(express.static('public'));
// app.use('/static', express.static(path.join(__dirname, 'public')));

const port = 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
