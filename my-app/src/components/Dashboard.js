import react from 'react'
import { Link } from "react-router-dom"


const Dashboard = () => {

    return(
        <div>
            <h1>This is the Dashboard Page</h1>

            <Link to = "createMoves">Create A Move</Link>

       
        </div>
    )
}



export default  Dashboard;