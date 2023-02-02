const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    displayName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    firebaseUID: {
        type: String,
        required: true,
    },
    invest: {
        total: {
            type: Number,
            default: 0.00
        },
        current: {
            type: Number,
            default: 0.00
        }
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('User', userSchema, 'users');