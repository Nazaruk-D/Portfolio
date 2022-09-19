import React from 'react';
import s from './Header.module.scss'
import Nav from "../Nav/Nav";



const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.mainBlock}>
                <div className={s.info}>
                    <div className={s.logo}></div>
                    <div className={s.textLogo}>
                        <div className={s.logoName}>Dmitry <strong>Nazaruk</strong></div>
                        <div className={s.logoInfo}><strong>Frontend</strong> Developer</div>
                    </div>
                </div>
                <Nav/>
            </div>
        </div>
    );
};

export default Header;