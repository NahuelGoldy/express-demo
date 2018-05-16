
const mongoose = require('mongoose')
const User = new require('../models/user');

// create a User
exports.post = (req, res) => {
    const data = req.body ;

    return User.create({
        _id: mongoose.Types.ObjectId(),
        name: data.name,
        email: data.email,
        profileImage: req.file.path
    })
        .then(user => {
            return user;
        })
        .catch(err => {
            res.status(500).send(err);
        });
};

// return all Users
exports.findAll = (req, res) => {
    return User.find()
        .then(users => {
            return users;
        })
        .catch(err => {
            res.status(500).send(err);
        });
};

// return a User by its ID
exports.findOne = (req, res) => {
    return User.findOne({ email: req.params.em })
        .exec()
        .then(user => {
            return user;
        })
        .catch(err => {
            res.status(500).send(err);
        });
};


