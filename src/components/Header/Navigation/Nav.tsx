import React from 'react';
import s from './Nav.module.scss'
import Button from "../../../common/components/button/Button";
import Link from 'react-scroll/modules/components/Link';

const Nav = () => {

    return (
        <div className={s.navBar}>
            <li><Link
                className={s.nav}
                activeClass={s.activeLink}
                spy={true}
                smooth={true}
                offset={-50}
                duration={1500}
                to="home"
                >Home</Link></li>
            <li><Link
                className={s.nav}
                activeClass={s.activeLink}
                spy={true}
                smooth={true}
                offset={-50}
                duration={1500}
                to="about"
            >About Me</Link></li>
            <li><Link
                className={s.nav}
                activeClass={s.activeLink}
                spy={true}
                smooth={true}
                offset={-50}
                duration={1500}
                to="projects"
            >Projects</Link></li>
            <li><Link
                className={s.nav}
                activeClass={s.activeLink}
                spy={true}
                smooth={true}
                offset={-60}
                duration={1500}
                to="skills"
            >Skills</Link></li>
            <li><Link
                className={s.nav}
                activeClass={s.activeLink}
                spy={true}
                smooth={true}
                offset={-55}
                duration={1500}
                to="contacts"
            >Contacts</Link></li>

            <span className={s.button}>
                <Button text={"Hire me"}/>
            </span>
        </div>
    );
};

export default Nav;