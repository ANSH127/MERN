require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const workoutsRoutes = require('./routes/workouts');
// express app 
const app = express();

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// parse json data
app.use(express.json());


// routes

app.use('/api/workouts', workoutsRoutes);


// connect to mongodb 
const dbURI = process.env.MONGO_URI;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {

        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log(`Server started on port ${process.env.PORT}`)
        });

    })
    .catch((err) => console.log(err));


