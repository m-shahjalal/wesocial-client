
// import { Redirect, Route } from "react-router";
// import useAuth from "../hooks/useAuth";


// function PrivateRoute({ children, ...rest }) {
//     let {userId, isLoading} = useAuth();

//     if (isLoading) {
//         return <div class="spinner-border" role="status">
//         <span class="visually-hidden">Loading...</span>
//         </div>
//     }
    
//     return (
//       <Route
//         {...rest}
//         render={({ location }) =>
//           userId.email ? (
//             children
//           ) : (
//             <Redirect
//               to={{
//                 pathname: "/login",
//                 state: { from: location }
//               }}
//             />
//           )
//         }
//       />
//     );
//   }
// export default PrivateRoute;

import { Navigate, Outlet } from "react-router-dom";
import useFirebase from "../hooks/useFirebase";



const ProtectedRoutes = () => {
  const {userId} = useFirebase();
  return userId.email ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
