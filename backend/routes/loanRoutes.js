const express = require("express");
const router = express.Router();
const {
  getLoans,
  createLoan,
  updateLoan,
  deleteLoan,
} = require("../controllers/loanController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getLoans).post(protect, createLoan);
router.route("/:loanID").put(protect, updateLoan).delete(protect, deleteLoan);

module.exports = router;
