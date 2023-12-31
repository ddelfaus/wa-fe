import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { fetchMoves } from '../features/workout/movesSlice'
import ExerciseLibraryMove from './ExerciseLibraryMove'



const ExerciseLibrary = () => {
    const dispatch = useDispatch();
    const moves = useSelector((state) => state.moves.moves)

  
  
    useEffect(() => {
        // Dispatch the fetchMoves action when the component mounts
        dispatch(fetchMoves());
     
        }, [dispatch]);


    return(
        <div>
            <h1>The Exercise Library</h1>
            {moves.map((move) =>(
                <ExerciseLibraryMove move = {move}/>
            ))}
        </div>
    )
}


export default ExerciseLibrary