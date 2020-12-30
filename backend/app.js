const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const corsOptions = {
    origin: true,
    credentials: true
};
const User = require('./models/User');
require('dotenv/config');

const DatabaseHelpers = require("./helpers/database-helper");

const helpers = new DatabaseHelpers();

async function initiateApp() {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(cors(corsOptions));
    app.use(cookieParser());

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