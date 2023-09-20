import React, { useState} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { createAccount, selectUser } from '../../features/auth/authSlice'
import {useNavigate} from "react-router-dom"


const CreateAccount = () =>{
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const navigate = useNavigate()

    const [accountData, setAccountData] = useState({
        username: "",
        email: "",
        password: "",
    })

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setAccountData({
            
            ...accountData,
        [name]: value,
        });
    };


    
      const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(createAccount(accountData));
        navigate("/login")

          

   
      };
    
      return (
        <div>
          <h1>Create Your Account!</h1>
          <form onSubmit={handleSubmit}>
          <div>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={accountData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                value={accountData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={accountData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <button type="submit">Create Account</button>
            </div>
          </form>
        </div>
      );
    };
    
    export default CreateAccount;