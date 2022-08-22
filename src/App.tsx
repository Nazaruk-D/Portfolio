import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Home from "./Home/Home";
import AboutMe from "./AboutMe/AboutMe";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";

function App() {
    return (
        <div className="App">
            <Header/>
            <Home/>
            <AboutMe/>
            <Skills/>
            <Projects/>
        </div>
    );
}

export default App;
