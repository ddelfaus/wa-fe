import React from 'react'

import { Link } from "react-router-dom"
import { useSelector } from 'react-redux';
import { selectUser } from '../features/auth/authSlice';




const NavBar = () => {
    const user = useSelector(selectUser);

    return(
        <div>
            <Link to ="">Home</Link>
            {user ? <Link to ="dashboard"> Dashboard</Link>: null}
           
            {user ? <Link to ="logout">Logout</Link> : <Link to ="login">Login</Link>}

            {!user ? <Link to ="createAccount">Create Account</Link>: null}

        </div>
    )
}



export default NavBar