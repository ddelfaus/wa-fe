import React from 'react'

import { Link } from "react-router-dom"
import { useSelector } from 'react-redux';
import { selectUser } from '../features/auth/authSlice';




const NavBar = () => {
    const user = useSelector(selectUser);

    return(
        <div>
            <Link to ="/home">Home</Link>
            {user ? <Link to ="/dashboard"> Dashboard</Link>: null}
            {user ? <Logout/> : <Link to ="/login">Login</Link>}

        </div>
    )
}



export default NavBar