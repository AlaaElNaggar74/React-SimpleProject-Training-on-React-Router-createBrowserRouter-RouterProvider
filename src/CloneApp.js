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
import { Button } from "@mui/material";

function CloneApp() {
  return (
    <div className="CloneApp">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Home />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <NavBar />
              <About />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <NavBar />
              <Contact />
            </>
          }
        />
        <Route
          path="/remove"
          element={
            <>
              <NavBar />
              <Remove />
            </>
          }
        />
        <Route
          path="/visit"
          element={
            <>
              <NavBar />
              <Visit />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        />
        <Route
          path="/CreatePage"
          element={
            <>
              <CreatePage />
            </>
          }
        />
        <Route
          path="/LoginPage"
          element={
            <>
              <LoginPage />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default CloneApp;
