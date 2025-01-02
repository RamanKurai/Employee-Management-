import React, { useContext, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "./utilis/localStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {

  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext)
  console.log(authData)

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == '123') {
      setUser("admin");
    } else if ( authData && authData.employees.find((e) => email == e.email && e.password == password)) {
      setUser("employee");
    } else {
      alert("Invalid Credentials");
    }
  };
  
  return (
    <div>
      {!user ? <Login handleLogin={handleLogin} /> : '' }
      {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
    </div>
  );
};

export default App;
