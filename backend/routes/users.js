const express = require('express');
const router = express.Router();
const User = require('../models/User');

//Get Users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
    } catch (error) {
        res.json({ message: error });
    }
});

//Post User
router.post('/', async (req, res) => {
    const user = new User({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        password: req.body.password
    });
    try {
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (error) {
        res.json({ message: error });
    }
});

module.exports = router;