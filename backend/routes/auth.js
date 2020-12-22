const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//Create User
router.post('/signUp', async (req, res) => {

    //Checking if user registered before
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).send('This user exists');

    //Hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashPassword,
    });

    try {
        const savedUser = await user.save();
        res.send({ user: user._id });
    } catch (error) {
        res.status(400).send(error);
    }
});

router.post('/login', async (req, res) => {
    // validating data
    // const { error } = loginValidation(req.body);
    // if (error) return res.status(400).send(error.details[0].message);

    //Checking if user registered before
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Email is not found');

    //if password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send('Invalid password');

    //Create and assign a token
    let jwtData = { _id: user._id, email: user.email, firstName: user.firstName, lastName: user.lastName };
    const token = jwt.sign(jwtData, process.env.TOKEN_SECRET);


    res.cookie('auth_token', `${token}`, { httpOnly: true });
    res.json({ 'auth_token': token, ...jwtData });


    //res.send('Logged in!');


});

router.get('/me', async (req, res) => {
    const incomingToken = req.cookies.auth_token;
    const tokenUser = jwt.verify(incomingToken, process.env.TOKEN_SECRET);

    const user = await User.findOne({ email: tokenUser.email });

    //Create and assign a token
    let jwtData = { _id: user._id, email: user.email, firstName: user.firstName, lastName: user.lastName };
    const token = jwt.sign(jwtData, process.env.TOKEN_SECRET);


    //res.cookie('auth_token', `${token}`, { httpOnly: true });
    res.json({ 'auth_token': token, ...jwtData });
});


router.post('/logout', async (req, res) => {

    // unset cookie
    res.cookie('auth_token', '', { httpOnly: true, maxAge: 0 });

    res.send('Logout Success');

});

module.exports = router;