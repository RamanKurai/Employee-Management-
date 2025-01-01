import React from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "./utilis/localStorage";



const App = () => {
 useEffect(()=>{
getLocalStorage()
},)


  return (
    <div>
      <Login/> 
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard/> */}
    </div>
  );
};

export default App;
