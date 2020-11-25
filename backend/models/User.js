const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const { isEmail } = require('validator');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "can't be blank"]
    },
    email: {
        type: String,
        required: [true, "can't be blank"],
        validate: [isEmail, 'invalid email'],
        unique: true,
    },
    password: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);