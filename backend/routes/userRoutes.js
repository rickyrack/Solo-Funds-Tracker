const express = require('express');
const router = express.Router();
const {
    createUser,
    getUser
} = require('../controllers/userController');

router.route('/').get(getUser).post(createUser);

module.exports = router;