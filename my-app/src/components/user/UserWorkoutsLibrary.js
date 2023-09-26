import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
// import { fetchMoves } from '../features/workout/movesSlice'
import Workout from './Workout'
import { selectUserId } from '../../features/auth/authSlice'
import { fetchUserWorkouts } from '../../features/workout/workoutSlice'


const UserWorkoutsLibrary = () => {
    const dispatch = useDispatch();

    const userId = useSelector(selectUserId)
    const workouts = useSelector((state) => state.workouts.workouts)
    console.log(workouts, "workout")
   
    
    useEffect(() => {
        // Dispatch the fetchUserMoves action when the component mounts
       
       if (userId) {
        dispatch(fetchUserWorkouts(userId));
       }
    }, [dispatch, userId]);

    
     

    return(
        <div>
            <h1>This is Your Workout Library</h1>
            {workouts.map((workout) =>(
                <Workout workout = {workout}/>
            ))}
        </div>
    )
}


export default UserWorkoutsLibrary