import React from 'react';
import s from './Nav.module.css'
import Button from "../common/components/button/Button";

const Nav = () => {
    return (
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
    );
};

export default Nav;