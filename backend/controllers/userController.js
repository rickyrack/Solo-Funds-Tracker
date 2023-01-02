const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');

const User = require('../models/user_model');

// @desc    Create User
// @route   POST /api/users
// @access  Private
const createUser = asyncHandler(async (req, res) => {
    if(!req.body.name) {
        res.status(400);
        throw new Error('No name given for user');
    }

    const user = await User.create({ name: req.body.name });

    res.status(200).json(user);
});

module.exports = {
    createUser,
}