import React from 'react'  
import { useDispatch } from 'react-redux';

import { deleteMove } from '../../../features/workout/movesSlice';
import { useNavigate } from 'react-router-dom';
import { addExerciseToWorkout, removeExerciseFromWorkout } from '../../../features/workout/workoutExercisesSlice';


function Exercise({ exercise}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleDeleteClick = () => {
    // Dispatch the deleteMove action with the move's ID
    dispatch(deleteMove(exercise.id));
  };
  
  const handleEditClick = () => {
    // Navigate to the EditMovePage with the move's ID as a parameter
    navigate(`/edit-move/${exercise.id}`);
  };

  const handleAddExercise = (exercise) => {
    dispatch(addExerciseToWorkout(exercise));
  };

  const handleRemoveExercise = (exercise) => {
    dispatch(removeExerciseFromWorkout(exercise));
  };

    return (
    <div className="exercise-item">
        <h3>{exercise.title}</h3>
        <p>Description: {exercise.description}</p>
        <button onClick = {() => handleAddExercise(exercise)}>Add me!</button>
        

    </div>

    )
}




export default Exercise