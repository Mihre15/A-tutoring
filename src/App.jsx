import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./navBar";
import Home from "./home";
import Form from "./form";
import Footer from "./footer";
import Contact from "./contact";
import Services from "./service";
import About from "./about";
import ScrollToTop from "./ScrollToTop";
function App() {
  return (
    <Router>
      {/* Use flex layout so footer stays at bottom even on short pages */}
      <div className="flex flex-col min-h-screen">
        <NavBar />

        {/* Main content area */}
        <div className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/form" element={<Form />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services/>} />
            
          </Routes>
        </div>
        <ScrollToTop/>
        {/* Footer always at the bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
