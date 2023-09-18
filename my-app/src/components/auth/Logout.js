import React from 'react'
import { useDispatch } from 'react-redux';
import {logout} from '../../features/auth/authSlice'

const Logout = () => {
    const dispatch =useDispatch();
    const handleLogout = (e) => {
        e.preventDefault();
       
        dispatch(logout())
    }
    return (
        <div>
            <button onClick={(e) => handleLogout(e)}>Logout 1</button>
        </div>
    )
}


export default Logout