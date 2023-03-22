import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/App.css";

// Main app component that renders the header, navigation, and footer components. The main-container div is where the content of the page is rendered.
function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Navigation />
        <div className="main-container">
          <Routes>
            <Route path="/reactfolio/about" element={<About />} />
            <Route path="/reactfolio/portfolio" element={<Portfolio />} />
            <Route path="/reactfolio/contact" element={<Contact />} />
            <Route path="/reactfolio/resume" element={<Resume />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
