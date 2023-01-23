const express = require('express');
const router = express.Router();
const {
    createUser,
    getUser
} = require('../controllers/userController');
const {protect} = require('../middleware/authMiddleware');

router.route('/').get(protect, getUser).post(createUser);

module.exports = router;