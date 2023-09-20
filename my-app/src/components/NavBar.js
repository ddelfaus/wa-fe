import React from 'react'

import { Link } from "react-router-dom"
import { useSelector } from 'react-redux';
import { selectUser } from '../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import {logout} from '../features/auth/authSlice'
import {useNavigate} from "react-router-dom"



const NavBar = () => {
    const user = useSelector(selectUser);
    const dispatch =useDispatch();
    const navigate = useNavigate()

    
    const handleLogout = () => {

        dispatch(logout())
        navigate("")
    
    }




    return(
        <div>
            <Link to ="">Home</Link>
            {user ? <Link to ="dashboard"> Dashboard</Link>: null}
           
            {user ? <a href="#" onClick={handleLogout}>Logout</a> : <Link to ="login">Login</Link>}

            {!user ? <Link to ="createAccount">Create Account</Link>: null}

        </div>
    )
}



export default NavBar