
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userRoutes = require('./api/routes/users');

// connection string to cloud MongoDB sandbox
mongoose.connect('mongodb://127.0.0.1:27017/express-api-server');

app.use(bodyParser.json());

// custom Routes
app.use('/users', userRoutes);

// if got to this point, means route error
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500 );
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;