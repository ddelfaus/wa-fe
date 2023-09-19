import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import {login} from '../../features/auth/authSlice'
import { loginRequest } from '../../features/auth/authSlice';


const Login = () => {
  // const [email, setEmail] = useState('');
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value, });
  }

  


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // You can add your authentication logic here (e.g., sending a request to a server).
  //   console.log('Username:', username);
  //   console.log('Password:', password);
  //   dispatch(login({
  //     username: username,
  //     password: password,
  //     loggedIn: true,
  //   }))

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginRequest(formData));
  };
 

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name ="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;