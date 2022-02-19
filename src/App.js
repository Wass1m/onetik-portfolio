import React from "react";
import logo from "./logo.svg";

import { Header } from "./components/Header/Header";
import { Landing } from "./components/Landing/Landing";
import Resume from "./components/Resume/Resume";
import Portfolio from "./components/Portfolio/Portfolio";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Resume />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
