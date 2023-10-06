import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
// import { fetchMoves } from '../features/workout/movesSlice'
import Exercise from './Exercise'
import { selectUserId } from '../../../features/auth/authSlice'
import { fetchUserMoves } from '../../../features/workout/movesSlice'


const UserWorkoutExerciseLibrary = () => {
    const dispatch = useDispatch();

    const userId = useSelector(selectUserId)
    const exercise = useSelector((state) => state.moves.moves)

   
    
    useEffect(() => {
        // Dispatch the fetchUserMoves action when the component mounts
       
       if (userId) {
        dispatch(fetchUserMoves(userId));
       }
    }, [dispatch, userId]);

    
     

    return(
        <div>
            <h1>This is Your Exercise Library</h1>
            {exercise.map((exercise) =>(
                <Exercise exercise = {exercise}/>
            ))}
        </div>
    )
}


export default UserWorkoutExerciseLibrary