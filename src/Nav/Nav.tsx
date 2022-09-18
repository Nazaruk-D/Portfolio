import React from 'react';
import s from './Nav.module.css'
import Button from "../common/components/button/Button";

const Nav = () => {
    return (
        <div className={s.mainBlock}>
            <div className={s.info}>
                <div className={s.logo}></div>
                <div className={s.textLogo}>
                    <p className={s.logoName}>Dmitry <strong>Nazaruk</strong></p>
                    <p className={s.logoInfo}><strong>Frontend</strong> Developer</p>
                </div>

            </div>
            <div className={s.nav}>
                <a href="">Home</a>
                <a href="">About me</a>
                <a href="">Projects</a>
                <a href="">Contact</a>
                <a href="">Download CV</a>
                <span className={s.button}>
                    <Button text={"Hire me"}/>
                </span>
            </div>
        </div>
    );
};

export default Nav;