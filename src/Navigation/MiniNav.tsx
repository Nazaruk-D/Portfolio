import React from 'react';
import s from './MiniNav.module.scss'

const MiniNav = () => {



    return (
        <div className={s.miniNav}>
            <li><a href="">Home</a></li>
            <li><a href="">About me</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Download CV</a></li>
        </div>
    );
};

export default MiniNav;