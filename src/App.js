import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Carousel from "./components/Carousel";
import LoginForm from "./components/LoginForm";
import LastDesign from "./components/LastDesign";
const App = () => {
  return (
    <Router>
      <div className="container mx-auto p-4 ">
        <Routes>
          <Route path="/" element={<Carousel />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/lastdesign" element={<LastDesign />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
