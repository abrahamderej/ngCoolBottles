const bottleData = require('./data');
const express = require('express');

const router = express.Router();

router.route('/inventory').get(
    (request, response) => {
        response.json(bottleData);
    }
);


module.exports = router;
