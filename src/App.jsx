import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./components/Templates/LoginPage";
import Translate from "./components/Templates/Translate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/translate" element={<Translate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
