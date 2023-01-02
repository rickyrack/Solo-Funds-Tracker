const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');

const Loan = require('../models/loan_model');

// @desc    Get Loans
// @route   GET /api/loans
// @access  Private
const getLoans = asyncHandler(async (req, res) => {
    //const loans = await Loan.find({ loaner: req.user.id });
    const loans = await Loan.find();

    res.status(200).json(loans);
});

// @desc    Create Loan
// @route   POST /api/loans
// @access  Private
const createLoan = asyncHandler(async (req, res) => {
    if(!req.body.loanerID || !req.body.loanee || !req.body.amount) {
        res.status(400);
        throw new Error('Missing Information to add a loan.');
    }

    const loan = await Loan.create({
        loaner: req.body.loanerID,
        loanee: req.body.loanee,
        amount: req.body.amount
    });

    res.status(200).json(loan);
});

// @desc    Update Loan
// @route   PUT /api/loans/:loanID
// @access  Private
const updateLoan = asyncHandler(async (req, res) => {
    res.status(200);
});

// @desc    Delete Loan
// @route   DELETE /api/loans/:loanID
// @access  Private
const deleteLoan = asyncHandler(async (req, res) => {
    res.status(200);
});

module.exports = {
    getLoans,
    createLoan,
    updateLoan,
    deleteLoan,
}