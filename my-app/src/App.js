import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes, Route, Outlet} from 'react-router-dom'
import PrivateRoutes from './features/auth/PrivateRoutes'
import Home from './components/HomePage'
import Login from './components/auth/Login'
import ExerciseLibrary from './components/ExerciseLibrary';
import CreateAccount from './components/auth/CreateAccount';
import Dashboard from './components/user/Dashboard';
import CreateMoves from './components/user/Exercise/CreateMoves'
import EditMove from './components/user/Exercise/EditMove'
//workouts
import CreateWorkout from './components/user/Workout/CreateWorkout';
import UserWorkoutsLibrary from './components/user/Workout/UserWorkoutsLibrary';
import EditWorkout from './components/user/Workout/EditWorkout';
import UserExerciseLibrary from './components/user/Exercise/UserExerciseLibrary';
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
         
        </Route>
        <Route path ="/" element ={<PrivateRoutes/>}>
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="dashboard/createMoves" element={<CreateMoves/>}/>
          <Route path="dashboard/exerciseLibrary" element={<ExerciseLibrary/>}/>
          <Route path="dashboard/userExerciseLibrary" element={<UserExerciseLibrary/>}/>
          <Route path="edit-move/:moveId" element={<EditMove/>}/>
          +
          {/* workouts */}
          <Route path="dashboard/createWorkout" element={<CreateWorkout/>}/>
          <Route path="dashboard/userWorkoutLibrary" element={<UserWorkoutsLibrary/>}/>
          <Route path="edit-workout/:workoutId" element={<EditWorkout/>}/>
          
        </Route>
   
      
      </Routes>
  
     
    </Router>
    </div>
 
  );
}

export default App;
