import React from 'react';
import s from './Header.module.css'
import Nav from "../Nav/Nav";

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.mainBlock}>
                <div className={s.info}>
                    <div className={s.logo}></div>
                    <div className={s.textLogo}>
                        <p className={s.logoName}>Dmitry <strong>Nazaruk</strong></p>
                        <p className={s.logoInfo}><strong>Frontend</strong> Developer</p>
                    </div>
                </div>
                <Nav/>
            </div>
        </div>
    );
};

export default Header;