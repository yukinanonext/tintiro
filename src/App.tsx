import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Play } from "./pages/Play";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={`/tintiro`} element={<Home />} />
          <Route path={`/tintiro/play`} element={<Play />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
