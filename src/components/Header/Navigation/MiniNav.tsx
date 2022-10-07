import React from 'react';
import s from './MiniNav.module.scss'
import Link from "react-scroll/modules/components/Link";
import Button from "../../../common/components/button/Button";

const MiniNav = () => {
    return (
        <div className={s.miniNav}>
            <li><Link
                activeClass={s.activeLink}
                spy={true}
                smooth={true}
                offset={-50}
                duration={1500}
                to="home"
            >Home</Link></li>
            <li><Link
                activeClass={s.activeLink}
                spy={true}
                smooth={true}
                offset={-50}
                duration={1500}
                to="about"
            >About Me</Link></li>
            <li><Link
                activeClass={s.activeLink}
                spy={true}
                smooth={true}
                offset={-50}
                duration={1500}
                to="projects"
            >Projects</Link></li>
            <li><Link
                activeClass={s.activeLink}
                spy={true}
                smooth={true}
                offset={-50}
                duration={1500}
                to="skills"
            >Skills</Link></li>
            <li><Link
                activeClass={s.activeLink}
                spy={true}
                smooth={true}
                offset={-50}
                duration={1500}
                to="contacts"
            >Contacts</Link></li>
        </div>
    );
};

export default MiniNav;