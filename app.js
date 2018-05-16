
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userRoutes = require('./api/routes/users');
const config = require('./api/config/config');

// connection string to MongoDB
mongoose.connect(config.mongo.connectionString);

// access to /uploads directory
app.use('/uploads', express.static('uploads'));
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