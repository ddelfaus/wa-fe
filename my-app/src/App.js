import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Router, Route} from 'react-router-dom'

import Home from './components/HomePage'
import Login from './components/auth/Login'
import Logout from './components/auth/Logout'
import { useSelector } from 'react-redux';
import { selectUser } from './features/auth/authSlice';


function App() {
  const user = useSelector(selectUser);
  return (
    <BrowserRouter>
      <div className="App">
        <Home/>
        {user ? <Logout/> : <Login/>}
      
        
      </div>
    </BrowserRouter>
 
  );
}

export default App;
