const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const { isEmail } = require('validator');

const SALT_WORK_FACTOR = 10;


const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "can't be blank"],
        unique: true,
        index: true
    },
    email: {
        type: String,
        required: [true, "can't be blank"],
        index: true,
        validate: [isEmail, 'invalid email'],
        unique: true,
    },
    password: { type: String, required: true }
}, { timestamps: true });

UserSchema.pre('save', async function save(next) {
    if (!this.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
        this.password = await bcrypt.hash(this.password, salt);
        return next();
    } catch (err) {
        return next(err);
    }
});

UserSchema.methods.validatePassword = async function validatePassword(data) {
    return bcrypt.compare(data, this.password);
};

module.exports = mongoose.model('User', UserSchema);