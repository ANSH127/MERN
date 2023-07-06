require('dotenv').config();
const express = require('express');
const workoutsRoutes = require('./routes/workouts');
// express app 
const app = express();

// middleware
app.use((req, res, next) => {
    console.log(req.path,req.method);
    next();
});

// parse json data
app.use(express.json());

// listen for requests
app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`)
});

// routes

app.use('/api/workouts', workoutsRoutes);


