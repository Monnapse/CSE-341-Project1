const express = require('express');
const router = express.Router();

// Define your routes here
//router.get('/', (req, res) => {
//    res.send('Hello, world!');
//});

router.use('/users', require('./users'));

module.exports = router;