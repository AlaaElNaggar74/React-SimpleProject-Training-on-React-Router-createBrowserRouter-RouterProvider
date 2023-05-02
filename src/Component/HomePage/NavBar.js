import React from "react";

import {NavLink,Outlet} from "react-router-dom"

const NavBar = () => {
  return (
    <div className="navBar w- mx-auto">
      <div className=" bg-black">
        <nav className="w-10/12 mx-auto p-5 text-white text-3xl flex items-center justify-between">
          <NavLink to="/">
            {" "}
            <h1 className="mx-1 border py-1 px-2 cursor-pointer hover:bg-white hover:text-black ease-in duration-300 ">Home</h1>
          </NavLink>
          <div className="flex">
            <NavLink to="/about">
              <h1 className="mx-1 border py-1 px-2 cursor-pointer hover:bg-white hover:text-black ease-in duration-300  ">
                About
              </h1>
            </NavLink>
            <NavLink to="/contact">
              <h1 className="mx-1 border py-1 px-2 cursor-pointer hover:bg-white hover:text-black ease-in duration-300  ">
                Contact
              </h1>
            </NavLink>
            <NavLink to="/visit">
              <h1 className="mx-1 border py-1 px-2 cursor-pointer hover:bg-white hover:text-black ease-in duration-300  ">
                Visit
              </h1>
            </NavLink>
            <NavLink to="/remove">
              <h1 className="mx-1 border py-1 px-2 cursor-pointer hover:bg-white hover:text-black ease-in duration-300  ">
                Remove
              </h1>
            </NavLink>
            <NavLink to="login">
              <h1 className="mx-1 border py-1 px-2 cursor-pointer text-black bg-white rounded">
                Login
              </h1>
            </NavLink>
          </div>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default NavBar;
