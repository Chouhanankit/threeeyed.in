import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import Navbar from "./components/Navbar";
import Insights from "./screens/Insights";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/insights" element={<Insights />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
