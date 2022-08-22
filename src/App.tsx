import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Home from "./Home/Home";
import AboutMe from "./AboutMe/AboutMe";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import DistantWork from "./DistantWork/DistantWork";
import Contacts from "./Contacts/Contacts";
import Map from "./Map/Map";
import Footer from "./Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Home/>
            <AboutMe/>
            <Skills/>
            <DistantWork/>
            <Projects/>
            <Contacts/>
            <Map/>
            <Footer/>
        </div>
    );
}

export default App;
