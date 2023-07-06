const express=require('express');
const router=express.Router();
const workoutController=require('../controllers/workoutController');


// get all workouts
router.get('/', workoutController.getAllWorkouts);

// get one workout
router.get('/:id', workoutController.getOneWorkout);

// create one workout
router.post('/', workoutController.createOneWorkout);

// update one workout
router.patch('/:id',workoutController.updateOneWorkout);

// delete one workout
router.delete('/:id',workoutController.deleteOneWorkout);




module.exports=router;