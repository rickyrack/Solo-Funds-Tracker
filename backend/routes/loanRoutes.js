const express = require('express');
const router = express.Router();
const {
    getLoans,
    createLoan,
    updateLoan,
    deleteLoan
} = require('../controllers/loanController');

router.route('/').get(getLoans).post(createLoan);
router.route('/:loanID').put(updateLoan).delete(deleteLoan);

module.exports = router;