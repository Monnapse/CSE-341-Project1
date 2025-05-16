const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));

// Define your routes here
router.get('/', (req, res) => {
    //#swagger.tags = ['Hello World']
    res.send('Hello, world!');
});

router.use('/users', require('./users'));

module.exports = router;