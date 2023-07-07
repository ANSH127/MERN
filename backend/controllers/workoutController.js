
const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');

// get all workouts
const getAllWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find({}).sort({ createdAt: -1 });
        res.status(200).json({ workouts });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// get one workout
const getOneWorkout = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) throw new Error('Invalid ID');
        const workout = await Workout.findById(id);
        if (!workout) throw new Error('Workout not found');
        res.status(200).json({ workout });


    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// create one workout
const createOneWorkout = async (req, res) => {
    const { title, reps, load } = req.body;
    let emptyFields = [];
    if (!title) emptyFields.push('title');
    if (!reps) emptyFields.push('reps');
    if (!load) emptyFields.push('load');
    if (emptyFields.length > 0) return res.status(400).json({ message: `Please fill in the following fields: ${emptyFields.join(', ')}` });

    // add doc to db
    try {
        const workout = await Workout.create({ title, reps, load });
        res.status(201).json({ workout });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// update one workout
const updateOneWorkout = async (req, res) => {
    const { title, reps, load } = req.body;
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) throw new Error('Invalid ID');

        const updateworkout = await Workout.findByIdAndUpdate(id, { title, reps, load }, { new: true });
        if (!updateworkout) throw new Error('Workout not found');
        res.status(200).json({ workout: updateworkout });
    } catch (error) {
        res.status(400).json({ message: error.message });

    }


}

// delete one workout
const deleteOneWorkout = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) throw new Error('Invalid ID');
        const workout = await Workout.findByIdAndDelete(id);
        if (!workout) throw new Error('Workout not found');
        res.status(200).json({ workout });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }


}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createOneWorkout,
    updateOneWorkout,
    deleteOneWorkout
}