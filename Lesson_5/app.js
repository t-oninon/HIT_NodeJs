const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const router = require('./routes');
const dotenv = require("dotenv").config();

app.use(express.json());

console.log(process.env.SECRET_KEY);

mongoose.connect('mongodb://localhost:27017/hit_dev')
    .then(() => {
        console.log('Successfully! Connected to database');
    })
    .catch((err) => {
        console.log('Failure!', err.message);
    })

router(app);

app.listen(port, () => {
    console.log('Started project on port', port);
});