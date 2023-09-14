import React from 'react'
import { useDispatch } from 'react-redux';


const Logout = () => {
    const dispatch =useDispatch();
    const handleLogOut = (e) => {
        e.preventDefault();

     
        dispatch(Logout)
    }
    return (
        <div>
            <button onClick={(e) => handleLogOut(e)}>Logut 1</button>
        </div>
    )
}


export default Logout