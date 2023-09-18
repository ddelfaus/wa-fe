import React, { useState} from 'react'




const CreateAccount = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
      };
    
      const handleChangePassword = (e) => {
        setPassword(e.target.value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // You can add your logic for handling form submission here,
        // such as sending the data to a server or dispatching it to Redux.
        console.log('Email:', email);
        console.log('Password:', password);
        // Reset the form fields after submission
        setEmail('');
        setPassword('');
      };
    
      return (
        <div>
          <h1>Create Your Account!</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleChangeEmail}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handleChangePassword}
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