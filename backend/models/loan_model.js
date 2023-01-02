const mongoose = require('mongoose');

const loanSchema = mongoose.Schema({
    loaner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    loanee: {
        type: String,
        required: true,
        validate: {
            validator: (loaneeName) => {
                const checkName = loaneeName.split(' ');
                if(checkName[0].length <= 1) {
                    return false;
                }
                else {
                    return checkName[1].length === 1;
                }
            }
        }
    },
    amount: {
        type: Number,
        required: true,
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('Loan', loanSchema, 'loans');