import React from 'react';
import s from "./Home.module.css"
import sContainer from "../common/styles/Container.module.css"



const Home = () => {
    return (<>
        <div className={s.homeBlock}>
            <div className={sContainer.container}>
                <div className={s.text}>
                    <span>Hi there</span>
                    <h1>I am Dmitry Nazaruk</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
        </>
    );
};

export default Home;


