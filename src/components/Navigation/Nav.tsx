import React from 'react';
import s from './Nav.module.scss'
import Button from "../../common/components/button/Button";
import Link from 'react-scroll/modules/components/Link';

const Nav = () => {

    return (
        // <div className={s.nav}>
        //     <li><a href="">Home</a></li>
        //     <li><a href="">About me</a></li>
        //     <li><a href="">Projects</a></li>
        //     <li><a href="">Contact</a></li>
        //     <li><a href="">Download CV</a></li>
        //     <span className={s.button}>
        //         <Button text={"Hire me"}/>
        //     </span>
        // </div>
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


        // <nav className={style.nav}>
        //     <ul>
        //         <li className={style.navBlock}>
        //             <Link
        //                 activeClass={style.activeLink}
        //                 className={style.link}
        //                 to="home"
        //                 spy={true}
        //                 smooth={true}
        //                 offset={-50}
        //                 duration={500}
        //             >Home</Link>
        //         </li>
        //         <li className={style.navBlock}>
        //             <Link
        //                 activeClass={style.activeLink}
        //                 className={style.link}
        //                 to="app"
        //                 spy={true}
        //                 smooth={true}
        //                 offset={-50}
        //                 duration={500}
        //             >About</Link>
        //         </li>
        //         <li className={style.navBlock}>
        //             <Link
        //                 activeClass={style.activeLink}
        //                 className={style.link}
        //                 to="skills"
        //                 spy={true}
        //                 smooth={true}
        //                 offset={-50}
        //                 duration={500}
        //             >Skills</Link>
        //         </li>
        //         <li className={style.navBlock}>
        //             <Link
        //                 activeClass={style.activeLink}
        //                 className={style.link}
        //                 to="projects"
        //                 spy={true}
        //                 smooth={true}
        //                 offset={-50}
        //                 duration={500}
        //             >Projects</Link>
        //         </li>
        //         <li className={style.navBlock}>
        //             <Link
        //                 activeClass={style.activeLink}
        //                 className={style.link}
        //                 to="contacts"
        //                 spy={true}
        //                 smooth={true}
        //                 offset={-50}
        //                 duration={500}
        //             >Contacts</Link>
        //         </li>
        //     </ul>
        // </nav>
    );
};

export default Nav;