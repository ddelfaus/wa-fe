import React from 'react'  




function Move({ move}) {

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
   
    </div>

    )
}




export default Move