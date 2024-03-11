import React from "react";
import "./assets/stylesheets/App.sass";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { PublicRoute } from "./routers/Public.routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<PublicRoute />} />
          <Route path="*" element={<>Not found</>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
