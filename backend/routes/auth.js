const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//Create User
router.post('/signUp', async (req, res) => {
    try {
        //Checking if user registered before
        const { firstName, lastName, email, password, passwordCheck } = req.body;
        let { role } = req.body;

        if (!firstName || !lastName || !email || !password || !passwordCheck) {
            return res.status(400).json({ msg: "Not all fields have been entered." });
        }
        if (password < 2) {
            return res.status(400).json({ msg: "The password needs to be at least 2 characters long." });
        }
        if (password !== passwordCheck) {
            return res.status(400).json({ msg: "Enter the same password twice for verification." });
        }

        const emailExist = await User.findOne({ email: email });
        if (emailExist) return res.status(400).json("An account with this email already exists.");

        //Hashing the password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        if (!role || role !== "ADMIN") role = "CUSTOMER";

        const user = new User({
            firstName,
            lastName,
            email,
            password: hashPassword,
            role
        });

        const savedUser = await user.save();
        res.json(savedUser);
    } catch (error) {
        res.status(500).json(error.message);
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.status(400).json({ msg: "Not all fields have been entered" });

        //Checking if user registered before
        const user = await User.findOne({ email: email });
        if (!user) return res.status(400).json({ msg: 'Email is not found' });

        //if password is correct
        const validPass = await bcrypt.compare(password, user.password);
        if (!validPass) return res.status(400).json({ msg: 'Invalid password' });

        //Create and assign a token
        const jwtData = { id: user._id, firstName: user.firstName, lastName: user.lastName, email: user.email, role: user.role };
        const token = jwt.sign(jwtData, process.env.TOKEN_SECRET);
        res.cookie('auth_token', `${token}`,
            {
                maxAge: 60 * 60 * 1000,
                httpOnly: true,
                sameSite: true,
            },
        );
        res.json({
            user: { ...jwtData }
        })
    } catch (error) {
        res.status(500).json({ error: err.message });
    }

});

router.get('/tokenIsValid', async (req, res) => {
    try {
        const incomingToken = req.cookies.auth_token;
        if (!incomingToken) return res.status(400).json({ msg: "Token is invalid." });
        const tokenUser = jwt.verify(incomingToken, process.env.TOKEN_SECRET);
        if (!tokenUser) return res.status(400).json({ msg: "Token is invalid." })

        const user = await User.findOne({ email: tokenUser.email });
        res.json({
            user: user
        })
    } catch (error) {
        res.json({ msg: req });
    }
});

router.get('/logout', async (req, res) => {
    res.cookie('auth_token', '',
        {
            maxAge: 0,
            httpOnly: true,
            sameSite: true,
        },
    );

    res.json({ msg: 'Logout Success' });
});

module.exports = router;