import React from 'react';
import s from "./Home.module.css"


const Home = () => {
    return (<>
            <div className={s.homeBlock}>
                {/*<img className={s.photo}*/}
                {/*     src="http://themelooks.net/demo/cvit/wordpress/wp-content/uploads/2017/02/slider-01.jpg"*/}
                {/*     alt="Snow"/>*/}
                <div className={s.parentsText}>
                    <div className={s.text}>
                        <span className={s.greetings}><strong>Hi there</strong></span>
                        <div className={s.name}><h2><strong>I</strong> am Dmitry Nazaruk</h2></div>
                        <p className={s.front}><strong>Frontend Developer</strong></p>
                        <div className={s.button}>
                            <a href="#">LET'S TALK</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;


