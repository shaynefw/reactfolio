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

function App() {
  return (
    <Router>
      <Header />
      <Navigation />
      <Routes>
        <Route exact path="/" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/resume" component={Resume} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
