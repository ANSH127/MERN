const express=require('express');
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
router.post('/', (req, res) => {
    res.json({ message: 'create one workout' });
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