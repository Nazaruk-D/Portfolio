import React, {useState} from 'react';
import s from './Header.module.scss'
import Nav from "../Nav/Nav";
import logo from "../assets/img/logo.jpg"


const HeaderMemo = () => {

    const [bg, setBg] = useState({})

    window.addEventListener('scroll', e => {
        const backgroundWhite = {
            backgroundColor: "white",
            height: "5vh",
            boxShadow: "0 0 4px rgb(0 0 0 / 14%), 0 4px 8px rgb(0 0 0 / 28%)",
        }
        const backgroundNone = {}
        // eslint-disable-next-line no-restricted-globals
        if (scrollY > 0) {
            setBg(backgroundWhite)
            // eslint-disable-next-line no-restricted-globals
        } else {
            setBg(backgroundNone)
        }
    })


    return (
        <div className={s.header} style={bg}>
            <div className={s.mainBlock}>
                <div className={s.info}>
                    <div className={s.logo}><img src={logo} alt="logo" className={s.img}/></div>
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
const Header = React.memo(HeaderMemo)
export default Header;