import React from 'react';
import s from './Nav.module.css'
import Button from "../common/components/button/Button";

const Nav = () => {
    return (
        <div className={s.nav}>
            <li><a href="">Home</a></li>
            <li>  <a href="">About me</a></li>
            <li> <a href="">Projects</a></li>
            <li><a href="">Contact</a></li>
            <li> <a href="">Download CV</a></li>





            <span className={s.button}>
                <Button text={"Hire me"}/>
            </span>
        </div>
    );
};

export default Nav;