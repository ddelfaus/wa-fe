import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
// import { fetchMoves } from '../features/workout/movesSlice'
// import Move from './user/Move'
import { selectUserId } from '../../features/auth/authSlice'


const UserExerciseLibrary = () => {
    const dispatch = useDispatch();

    const userId = useSelector(selectUserId)

    console.log(userId, "test user id")
  
    
    // useEffect(() => {
    //     // Dispatch the fetchMoves action when the component mounts
    //     // dispatch(fetchMoves());
     
    //     }, [dispatch]);


    return(
        <div>
            <h1>This is Your Exercise Library</h1>
            {/* {moves.map((move) =>(
                <Move move = {move}/>
            ))} */}
        </div>
    )
}


export default UserExerciseLibrary