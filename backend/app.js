const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

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

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }, () => {
    console.log("Connected to the mongodb");
});

//Listen port
app.listen(3001);