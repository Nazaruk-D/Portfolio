import React from 'react';
import s from "./Home.module.scss"
import Button from "../common/components/button/Button";


const Home = () => {
    return (
            <div className={s.homeBlock}>
                <div className={s.parentsText}>
                    <div className={s.text}>
                        <span className={s.greetings}><strong>Hi there</strong></span>
                        <div className={s.name}><h2><strong>I</strong> am Dmitry Nazaruk</h2></div>
                        <p className={s.front}><strong>Frontend Developer</strong></p>
                        <Button text={"LET'S TALK"}/>
                    </div>
                </div>
            </div>
    );
};

export default Home;


