
const config = {};

// config.env = 'development';
// config.hostname = 'dev.example.com';

//mongo database
config.mongo = {};
config.mongo.uri = 'mongodb://127.0.0.1:27017/';
config.mongo.db = 'express-api-server';

module.exports = config;