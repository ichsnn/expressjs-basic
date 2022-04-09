const express = require('express');
const app = express();

// ***** express.ROUTER *****
const birds = require('./birds')
app.use(birds)

app.listen(3000, () => {
    console.log(`Server running on port 3000`);
});