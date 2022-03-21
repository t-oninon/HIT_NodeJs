const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const router = require('./routes');

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/hit_store_dev')
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