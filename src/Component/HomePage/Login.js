import React from "react";
import { NavLink, Outlet } from "react-router-dom";
const Login = () => {
  return (
    <div className="loginContent h-screen w-full flex ">
      <div className="w-4/12 bg-green-700 text-4xl ">
        <NavLink to="infopage">
          <h1 className="p-2 w-[fit-content] mx-auto text-center">InfoPage</h1>
        </NavLink>
        <NavLink to="loginxwq">
          <h1 className="p-2 w-[fit-content] mx-auto text-center">LoginXWQ</h1>
        </NavLink>
        <NavLink to="qwepage">
          <h1 className="p-2 w-[fit-content] mx-auto text-center">QWE-Page</h1>
        </NavLink >
        <NavLink to="/">
          <h1 className="p-2 w-[fit-content] mx-auto text-center">LogOut</h1>
        </NavLink>
        <NavLink to={`/products/${1}`}>
          <h1 className="p-2 w-[fit-content] mx-auto text-center">useParam</h1>
        </NavLink>
      </div>
      <div className="w-full bg-white text-4xl ">
        <div className="p-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Login;
