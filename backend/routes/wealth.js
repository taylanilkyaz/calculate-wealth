const express = require('express');
const Wealth = require('../models/Wealth');
const router = express.Router();
const User = require('../models/User');
var ObjectId = require('mongodb').ObjectId;

//Post Wealth
router.post('/', async (req, res) => {
    const { unit, amount, userId } = req.body;

    try {
        if (!unit || !amount) {
            return res.status(400).json({ msg: "Not all fields have been entered." });
        }

        const user = await User.findOne({ '_id': ObjectId(userId) });
        if (!user) return res.status(400).json('User is not found');

        const wealth = new Wealth({
            unit: unit,
            amount: amount,
            user: userId
        });
        const savedWealth = await wealth.save();
        res.json(savedWealth);
    }
    catch (error) {
        res.status(500).json(error.message);
    }
});

//Get All Wealths
router.get('/', async (req, res) => {
    try {
        const wealths = await Wealth.find();
        res.json(wealths);
    } catch (error) {
        res.json({ message: error });
    }
});

//Get All Wealths By User
router.get('/users/:userId', async (req, res) => {
    try {
        const wealths = await Wealth.find({'user': ObjectId(req.params.userId)});
        res.json(wealths);
    } catch (error) {
        res.json({ message: error });
    }
});

//Delete Wealth
router.delete('/:wealthId', async (req, res) => {
    try {
        const removedWealth = await Wealth.remove({ _id: req.params.wealthId });
        res.json({ message: 'Wealth successfully deleted.' })
    } catch (err) {
        res.json({ message: err });
    }
});


//Update Wealth
router.put('/:wealthId', async (req, res) => {
    try {
        console.log(req.params.wealthId);
        const updatedWealth = await Wealth.updateOne(
            { _id: req.params.wealthId },
            {
                $set: {
                    unit: req.body.unit,
                    amount: req.body.amount,
                    user: req.body.userId,
                }
            });
        res.json(updatedWealth.body)
    } catch (err) {
        res.json({ message: 'Update failed. Email must be unique.' });
    }

});

module.exports = router;