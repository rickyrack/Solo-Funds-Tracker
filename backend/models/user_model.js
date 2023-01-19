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
        type: Number,
        required: true,
        default: 0000000
    },
    invest: {
        total: {
            type: Number,
            default: 0
        },
        current: {
            type: Number,
            default: 0
        }
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('User', userSchema, 'users');