import React from "react";
import Navbar from "./Components/navbar";
import Aboutme from "./Components/Aboutme/index";
import Skills from "./Components/Skills/index";
import Form from "./Components/form/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

