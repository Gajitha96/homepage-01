import React from "react";
import "./App.css";
import Main from "./components/Main/Main";
import Awards from "./components/Awards/Awards";
import About from "./components/About/About";
import AboutUs from "./components/AboutUs/AboutUs";
import Trainers from "./components/Trainers/Trainers";
import Strength from "./components/Footer/Footer";
import Footer from "./components/Footer/Footer";




const App = () => (
  <div className="App">
    <Main />
    <Awards />
    <AboutUs />
    <Trainers />
    <About />
    <Footer />
    

  </div>
);

export default App;
