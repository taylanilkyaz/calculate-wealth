const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./models/User');
require('dotenv/config');
// import { User } from "./models/User.js"

const DatabaseHelpers = require("./helpers/database-helper");

const helpers = new DatabaseHelpers();

async function initiateApp() {
    app.use(cors());
    app.use(bodyParser.json());

    //Import Routes
    const authRoute = require('./routes/auth');
    app.use('/auth', authRoute);

    const usersRoute = require('./routes/users');
    app.use('/users', usersRoute);

    const wealthRoute = require('./routes/wealth');
    app.use('/wealth', wealthRoute);


    //ROUTES
    app.get('/', (req, res) => {
        res.send('We are at home');
    });

    await helpers.createConnection();
    await helpers.createCollections();
    await helpers.createPredefinedDocuments();

    //Listen port
    app.listen(3001);
}

module.exports = initiateApp();