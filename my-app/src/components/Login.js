import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux'
import {login} from '../features/auth/authSlice'
import { useLoginMutation } from '../features/auth/authApiSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('')
  const userRef = useRef()
  
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your authentication logic here (e.g., sending a request to a server).
    console.log('Email:', email);
    console.log('Password:', password);
    dispatch(login({
      email: email,
      password: password,
      loggedIn: false,
    }))
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;