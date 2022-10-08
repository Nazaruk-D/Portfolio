import React from 'react';
import './App.scss';
import Header from "../components/Header/Header";
import AboutMe from "../components/AboutMe/AboutMe";
import Projects from "../components/Projects/Projects";
import Contacts from "../components/Contacts/Contacts";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import {Hire} from "../components/Hire/Hire";
import Map from "../components/Map/Map";
import {MySkills} from "../components/Skills/MySkills";
import ModalArrow from "../common/components/modalArrow/ModalArrow";

function App() {
    return (
        <div className="App">
            <ModalArrow/>
            <Header/>
            <Home/>
            <AboutMe/>
            <Hire/>
            <Projects/>
            <MySkills/>
            <Contacts/>
            <Map/>
            <Footer/>
        </div>
    );
}

export default App;
