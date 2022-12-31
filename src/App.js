import "./App.css";
import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Monsters from "./components/pages/Monsters";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/monsters" element={<Monsters />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
