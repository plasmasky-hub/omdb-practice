import React from "react";
import logo from "./assets/images/logo.svg";
import "./assets/stylesheets/App.sass";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { PublicRoute } from "./routers/Public.routes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PublicRoute />} />{" "}
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
