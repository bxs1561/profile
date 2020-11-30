import React from "react"
import './App.css';
import Header from "./Header";
import About from "./About";
import Skill from "./Skill";
import Project from "./Project";
import Pic from "./Pic";

function App() {
  return (
    <div className="App">
      <Header/>
      <Pic/>
      <About/>
      <Skill/>
      <Project/>
    </div>
  );
}

export default App;
