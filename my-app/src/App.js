import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes, Route, Outlet} from 'react-router-dom'

import Home from './components/HomePage'
import Login from './components/auth/Login'
import Logout from './components/auth/Logout'
import CreateAccount from './components/auth/CreateAccount';
import Dashboard from './components/Dashboard';
import NavBar from "./components/NavBar"
import { useSelector } from 'react-redux';
import { selectUser } from './features/auth/authSlice';




function App() {
  const user = useSelector(selectUser);
  return (
    <div className="App">
    
    <Router>
      <NavBar/>
      <Routes>
        {/*nested route */}
        <Route path ="/" element={<Outlet/>}>
          <Route index element ={<Home/>}/>
          <Route path = "login" element ={<Login/>}/>
          <Route path = "createAccount" element ={<CreateAccount/>}/>
          <Route path = "dashboard" element ={<Dashboard/>}/>
          <Route path = "logout" element ={<Logout/>}/>

        </Route>
      </Routes>
  
    
    </Router>
    </div>
 
  );
}

export default App;
