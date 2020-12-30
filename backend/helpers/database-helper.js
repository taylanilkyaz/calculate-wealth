const mongoose = require('mongoose');
const User = require('../models/User');
const Wealth = require('../models/Wealth');
const bcrypt = require('bcryptjs');

require('dotenv/config');

const collections = [User, Wealth];

class DatabaseHelpers {
  async createConnection() {
    try {
      await mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }, async () => {
        console.log("connected mongoose");
      });
    } catch (er) {
      console.log(er)
    }
  }

  async createCollections() {
    for (const collection of collections) {
      try {
        await collection.createCollection();
        await collection.init();
      } catch (error) {
        console.log(`${collection} is already exists`)
      }
    }
  }

  async createPredefinedDocuments() {

    const adminUser = await User.findOne({ email: process.env.ADMIN_USER_EMAIL }).exec();
    if (!adminUser) {

      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash("q1", salt);

      const response = await User.create({
        firstName: "admin",
        lastName: "admin",
        email: process.env.ADMIN_USER_EMAIL,
        password: hashPassword,
        role: "ADMIN"
      })
    }
  }
}

module.exports = DatabaseHelpers;