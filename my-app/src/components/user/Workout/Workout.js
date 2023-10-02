import React from 'react'  
import { useDispatch } from 'react-redux';

import { deleteWorkout } from '../../../features/workout/workoutSlice';
import { useNavigate } from 'react-router-dom';


function Workout({ workout}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleDeleteClick = () => {
    // Dispatch the deleteworkout action with the workout's ID
    dispatch(deleteWorkout(workout.id));
  };
  
  const handleEditClick = () => {
    // Navigate to the EditworkoutPage with the workout's ID as a parameter
    navigate(`/edit-workout/${workout.id}`);
  };

    return (
    <div className="workout-item">
        <h3>{workout.title}</h3>
        <p>Description: {workout.description}</p>
        <button onClick={handleEditClick}>Edit Workout</button>
        <button onClick ={handleDeleteClick}>Delete me!</button>

    </div>

    )
}




export default Workout