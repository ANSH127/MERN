const express=require('express');
const Workout = require('../models/workoutModel');
const router=express.Router();


// get all workouts
router.get('/', (req, res) => {
    res.json({ message: 'get all workouts' });
});

// get one workout
router.get('/:id', (req, res) => {
    res.json({ message: 'get one workout' });
});

// create one workout
router.post('/', async(req, res) => {
    const { title, reps, load } = req.body;
    try {
        const workout = await Workout.create({ title, reps, load });
        res.status(201).json({ workout });
        
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// update one workout
router.patch('/:id', (req, res) => {
    res.json({ message: 'update one workout' });
});

// delete one workout
router.delete('/:id', (req, res) => {
    res.json({ message: 'delete one workout' });
});




module.exports=router;