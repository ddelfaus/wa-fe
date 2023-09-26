import react from 'react'
import { Link } from "react-router-dom"


const Dashboard = () => {

    return(
        <div>
            <h1>This is the Dashboard Page</h1>

            <Link to = "createMoves">Create An Exercise</Link>
            <Link to = "exerciseLibrary">View the Exercise Libary</Link>
            <Link to = "userExerciseLibrary">View Your Exercise Libary</Link>
            <Link to = "createWorkout">Create your workout</Link>
       
        </div>
    )
}



export default  Dashboard;