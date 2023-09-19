import React from "react";
import { Outlet, Navigate } from "react-router-dom";

// const PrivateRoute = ({ Element: Element, ...e }) => {
//     return (
//       <Route
//         {...e}
//         render={props => {
//           if (localStorage.getItem("token")) {
//             return <Element {...props} />;
//           } else {
//             // Use history to navigate to the login route
//             history.push("/login");
//             return null; // Return null to prevent rendering anything for unauthorized users
//           }
//         }}
//       />
//     );
//   };

const useAuth=()=>{
    const user=localStorage.getItem('token')
    if(user){
      return true
    } else {
      return false
    }
  }


const PrivateRoutes = () => {
    const auth=useAuth()

  return auth?<Outlet/>: <Navigate to="/login"/>
}
  
  export default PrivateRoutes;