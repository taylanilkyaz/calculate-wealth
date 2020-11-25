const express = require('express');
const router = express.Router();
const User = require('../models/User');

//Get Users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.json({ message: error });
    }
});

//Get Spesific User
router.get('/:userId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        res.json(user);
    } catch (err) {
        res.json({ message: err });
    }
});


//Delete User
router.delete('/:userId', async (req, res) => {
    try {
        const removedUser = await User.remove({ _id: req.params.userId });
        res.json({ message: 'User successfully deleted.' })
    } catch (err) {
        res.json({ message: err });
    }
});


//Update User
router.put('/:userId', async (req, res) => {
    try {
        const updatedUser = await User.updateOne(
            { _id: req.params.userId },
            {
                $set: {
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                }
            });
        res.json(updatedUser.body)
    } catch (err) {
        res.json({ message: 'Update failed. Email must be unique.' });
    }
});


module.exports = router;