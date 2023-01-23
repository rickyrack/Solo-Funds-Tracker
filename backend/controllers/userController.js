const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');

const User = require('../models/user_model');

// @desc    Create User
// @route   POST /api/users
// @access  Private
const createUser = asyncHandler(async (req, res) => {
    if(!req.body.displayName || !req.body.email || !req.body.password) {
        res.status(400);
        throw new Error('Missing Data');
    }

    const user = await User.create({ 
        email: req.body.email,
        password: req.body.password,
        displayName: req.body.displayName
    });

    res.status(200).json(user);
});

// @desc    Get User
// @route   GET /api/users
// @access  Private
const getUser = asyncHandler(async (req, res) => {
    console.log(req.user.email);
    // USE USER FROM AUTH INSTEAD OF EMAIL
    if(!req.user.email) {
        throw new Error('Missing Email Validator');
    }

    const user = await User.findOne({ email: req.user.email })
    console.log(user);
    res.status(200).json(user);
})
module.exports = {
    createUser,
    getUser
}