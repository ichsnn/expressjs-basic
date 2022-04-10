const express = require('express');
const app = express();

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(3000, () => {
    console.log(`Server running on http://localhost:3000`);
});
