import React from 'react';
import s from "./AboutMe.module.css"
import sContainer from "./../common/styles/Container.module.css"

const AboutMe = () => {
    return (
        <div className={s.aboutBlock}>
            <div className={sContainer.container}>
                <h2>About me</h2>
            </div>
        </div>
    );
};

export default AboutMe;