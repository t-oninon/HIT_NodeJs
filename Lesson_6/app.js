const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const router = require('./routes');
const dotenv = require("dotenv").config();

app.use(express.json());

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('Successfully! Connected to database');
    })
    .catch((err) => {
        console.log('Failure!', err.message);
    })

router(app);

app.listen(process.env.PORT, () => {
    console.log('Started project on port', process.env.PORT);
});