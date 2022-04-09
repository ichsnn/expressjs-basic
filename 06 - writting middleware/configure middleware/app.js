const mw = require('./middleware');
const express = require('express');
const app = express();

app.use(mw({option1: '1', option2: '2'}))

app.listen(3000, () => {
    console.log(`Server running on port 3000`);
});
