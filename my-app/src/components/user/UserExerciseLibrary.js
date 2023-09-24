import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
// import { fetchMoves } from '../features/workout/movesSlice'
import Move from './Move'
import { selectUserId } from '../../features/auth/authSlice'
import { fetchUserMoves } from '../../features/workout/movesSlice'


const UserExerciseLibrary = () => {
    const dispatch = useDispatch();

    const userId = useSelector(selectUserId)
    const moves = useSelector((state) => state.moves.moves)
    console.log(moves, "move")
   
    
    useEffect(() => {
        // Dispatch the fetchUserMoves action when the component mounts
       
       if (userId) {
        dispatch(fetchUserMoves(userId));
       }
    }, [dispatch, userId]);

    
     

    return(
        <div>
            <h1>This is Your Exercise Library</h1>
            {moves.map((move) =>(
                <Move move = {move}/>
            ))}
        </div>
    )
}


export default UserExerciseLibrary