
const express = require('express');
const router = express.Router();
const User = require('../controllers/users')

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'GET handler'
    });
});

router.post('/', (req, res, next) => {
    User.post(req, res)
        .then(user => {
            res.json(user);
        })
        .catch(err => {
            res.status(500).send(err);
        });
});

router.get('/:id', (req, res, next) => {
   const id = req.params.id;
    res.status(200).json({
        message: 'GET handler for product with ID=' + id
    });
});

module.exports = router;