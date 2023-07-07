const express=require('express');
const router=express.Router();
const workoutController=require('../controllers/workoutController');
const requireAuth=require('../middleware/requireAuth');

//  requireAuth is middleware that checks for a valid JWT
router.use(requireAuth);
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