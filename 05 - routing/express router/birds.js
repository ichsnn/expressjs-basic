const express = require('express');
const router = express.Router();

// middleware that is spesific to this router
router.use((req, res, next) => {
    console.log(`${req.method} : ${req.path}`)
    next()
})

router.get('/', (req, res) => {
    res.send('Birds home page')
})

router.get('/about', (req, res) => {
    res.send('About birds')
})

module.exports = router;