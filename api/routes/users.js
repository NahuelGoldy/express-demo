
const express = require('express');
const router = express.Router();
const User = require('../controllers/users');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        const filenm = (new Date().toISOString().split('.')[0]).replace(/:/g, '.') + '.' + file.originalname.split('.')[1];
        cb(null, filenm);
    }
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    // accept file
    cb(null, true);
  } else {
      // reject file
      cb(null, false);
  }
};
const upload = multer({storage: storage, limits: {
    // Max size = 5MB
    fileSize: 1024 * 1024 * 5
}});

router.get('/', (req, res, next) => {
    User.findAll(req, res)
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            res.status(500).send(err);
        });
});

router.post('/', upload.single('profileImage'), (req, res, next) => {
    User.post(req, res)
        .then(user => {
            res.json(user);
        })
        .catch(err => {
            res.status(500).send(err);
        });
});

router.get('/:em', (req, res, next) => {
    User.findOne(req, res)
        .then(user => {
            res.json(user);
        })
        .catch(err => {
            res.status(500).send(err);
        });
});

module.exports = router;