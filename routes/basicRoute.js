const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Basic page for our movie app.");
});

module.exports = router;