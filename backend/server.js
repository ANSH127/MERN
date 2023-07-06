require('dotenv').config();
const express = require('express');

// express app 
const app = express();

// middleware
app.use((req, res, next) => {
    console.log(req.path,req.method);
    next();
});

// listen for requests
app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`)
});

app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});

