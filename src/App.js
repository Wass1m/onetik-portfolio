import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Landing } from "./components/Landing";
import { AboutMe } from "./components/AboutMe";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <AboutMe />
      <Education />
      <Skills />
    </div>
  );
}

export default App;
