import React from 'react'  
import { useDispatch } from 'react-redux';

import { deleteMove } from '../../features/workout/movesSlice';



function Move({ move}) {
    const dispatch = useDispatch();
    
  const handleDeleteClick = () => {
    // Dispatch the deleteMove action with the move's ID
    dispatch(deleteMove(move.id));
  };


    return (
    <div className="move-item">
        <h3>{move.title}</h3>
        <p>Description: {move.description}</p>
        <p>Difficulty: {move.difficulty_rating}</p>
        <p>Muscle Group: {move.muscle_group}</p>
        <p>Weight Used: {move.weight_used}</p>
        <p>Equipment Required: {move.equipment_required}</p>
        <p>Video URL: {move.video_url}</p>
        <p>Reps Completed: {move.reps_completed}</p>
        <button onClick ={handleDeleteClick}>Delete me!</button>
    </div>

    )
}




export default Move