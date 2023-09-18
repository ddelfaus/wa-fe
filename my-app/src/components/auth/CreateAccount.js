import React, { useState} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { createAccount, selectUser } from '../../features/auth/authSlice'



const CreateAccount = () =>{
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

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
        try {
            // Dispatch the createAccount action with the form data
            await dispatch(createAccount(formData));
            // The user data will be updated in the Redux store if the request succeeds
            // You can access it via the user selector (selectUser)
            console.log('Account created:', user);
          } catch (error) {
            // Handle any errors here
            console.error('Error creating account:', error);
          }

        console.log("data test", accountData)
      };
    
      return (
        <div>
          <h1>Create Your Account!</h1>
          <form onSubmit={handleSubmit}>
          <div>
              <label htmlFor="username">Username:</label>
              <input
                type="username"
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
                type="email"
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