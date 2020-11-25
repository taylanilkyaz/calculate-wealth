const express = require('express');
const Wealth = require('../models/Wealth');
const router = express.Router();
const User = require('../models/User');
var ObjectId = require('mongodb').ObjectId;



//Post Wealth
router.post('/', async (req, res) => {

    try {
        //  console.log(req.body.userId);
        const user = await User.findOne({ '_id': ObjectId(req.body.userId) });
        //  console.log(user);
        if (!user) return res.status(400).send('Email is not found');
    } catch (error) {
        res.json({ message: error });
    }

    const wealth = new Wealth({
        unit: req.body.unit,
        amount: req.body.amount,
        user: req.body.userId
    });
    try {
        const savedWealth = await wealth.save();
        res.json(savedWealth);
    } catch (error) {
        res.json({ message: error });
    }
});

//Get Wealth
router.get('/', async (req, res) => {
    try {
        const wealths = await Wealth.find();
        res.json(wealths);
    } catch (error) {
        res.json({ message: error });
    }
});



//Get Spesific Wealth
router.get('/:userId', async (req, res) => {
    try {
        const wealth = await Wealth.findById(req.params.userId);
        res.json(wealth);
    } catch (err) {
        res.json({ message: err });
    }
});


//Delete Wealth
router.delete('/:userId', async (req, res) => {
    try {
        const removedWealth = await Wealth.remove({ _id: req.params.userId });
        res.json({ message: 'Wealth successfully deleted.' })
    } catch (err) {
        res.json({ message: err });
    }
});


//Update Wealth
router.put('/:userId', async (req, res) => {
    try {
        const updatedWealth = await Wealth.updateOne(
            { _id: req.params.userId },
            {
                $set: {
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                }
            });
        res.json(updatedWealth.body)
    } catch (err) {
        res.json({ message: 'Update failed. Email must be unique.' });
    }

});

module.exports = router;