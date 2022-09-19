import React from 'react';
import './App.scss';
import Header from "./Header/Header";
import AboutMe from "./AboutMe/AboutMe";
import Projects from "./Projects/Projects";
import Contacts from "./Contacts/Contacts";
import Map from "./Map/Map";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import {Hire} from "./Hire/Hire";

function App() {
    return (
        <div className="App">
            <Header/>
            <Home/>
            <AboutMe/>
            <Hire/>
            <Projects/>
            <Contacts/>
            <Map/>
            <Footer/>
        </div>
    );
}

export default App;
