
const mongoose = require('mongoose')
const User = new require('../models/user');

// create a User
exports.post = (req, res) => {
    const data = req.body ;

    return User.create({
        _id: mongoose.Types.ObjectId(),
        name: data.name,
        email: data.email
    })
        .then(user => {
            return user;
        })
        .catch(err => {
            res.status(500).send(err);
        });
}


