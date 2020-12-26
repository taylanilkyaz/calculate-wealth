const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const { isEmail } = require('validator');


const role = {
    ADMIN: 'ADMIN',
    CUSTOMER: 'CUSTOMER'
}

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "can't be blank"]
    },
    lastName: {
        type: String,
        required: [true, "can't be blank"]
    },
    email: {
        type: String,
        required: [true, "can't be blank"],
        validate: [isEmail, 'invalid email'],
        unique: true,
    },
    password: { type: String, required: true },
    role: { type: role, required: true }

}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);