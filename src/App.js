import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Component/LoginPage/LoginPage";
import CreatePage from "./Component/CraeteNewAccount/CreatePage";
import NavBar from "./Component/HomePage/NavBar";
import Home from "./Component/HomePage/Home";
import About from "./Component/HomePage/About";
import Contact from "./Component/HomePage/Contact";
import Remove from "./Component/HomePage/Remove";
import Login from "./Component/HomePage/Login";
import Visit from "./Component/HomePage/Visit";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Info from "./Component/HomePage/LoginPage/Info";
import Loginxwq from "./Component/HomePage/LoginPage/Loginxwq";
import Qwepage from "./Component/HomePage/LoginPage/Qwepage";
import Products from "./Component/HomePage/LoginPage/Products";
import Pdetails from "./Component/HomePage/LoginPage/Pdetails";
// createBrowserRouter RouterProvider
let routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
      </>
    ),
    children: [
      { index: true, element: <Home /> },
      {
        path: "/about",
        element: (
          <>
            <About />
          </>
        ),
      },
      {
        path: "/contact",
        element: (
          <>
            <Contact />
          </>
        ),
      },
      {
        path: "/remove",
        element: (
          <>
            <Remove />
          </>
        ),
      },
      {
        path: "/visit",
        element: (
          <>
            <Visit />
          </>
        ),
      },
    ],
  },
  {
    path: "login",
    element: (
      <>
        <Login />
      </>
    ),
    children: [
      {
        index: true,
        element: (
          <>
            <h1>Login Page HONME</h1>
          </>
        ),
      },
      {
        path: "infopage",
        element: (
          <>
            <Info />
          </>
        ),
        children: [
          {
            index: true,
            element: (
              <>
                <Products />
              </>
            ),
          },
          {
            path: ":id",
            element: (
              <>
                <Pdetails />
              </>
            ),
          },
        ],
      },
      {
        path: "loginxwq",
        element: (
          <>
            <Loginxwq />
          </>
        ),
      },
      {
        path: "qwepage",
        element: (
          <>
            <Qwepage />
          </>
        ),
      },
    ],
  },
  {
    path: "/products/:pid",
    element: (
      <>
        <Pdetails />
      </>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
