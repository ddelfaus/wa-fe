import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Router, Route} from 'react-router-dom'

import Home from './components/home/HomePage'
import Login from './components/Login'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Home/>
        <Login/>
      
        
      </div>
    </BrowserRouter>
 
  );
}

export default App;
