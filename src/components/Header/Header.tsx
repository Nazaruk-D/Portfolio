import React, {useState} from 'react';
import s from './Header.module.scss'
import Nav from "./Navigation/Nav";
import logo from "../../assets/img/logo.jpg"
import MiniNav from "./Navigation/MiniNav";


const HeaderMemo = () => {

    //background on scrolling
    const [bg, setBg] = useState({})
    const [bgMiniNav, setBgMiniNav] = useState({})

    document.addEventListener('scroll', e => {
        const backgroundWhite = {
            backgroundColor: "white",
            height: "5vh",
            boxShadow: "0 0 4px rgb(0 0 0 / 14%), 0 4px 8px rgb(0 0 0 / 28%)",
            transition: "all 0.3s ease 0s"
        }
        const marginMiniNav = {
            marginTop: "5vh",
            transition: "all 0.3s ease 0s",
            // width: "100%",
        }
        if (window.scrollY > 0) {
            setBg(backgroundWhite)
            setBgMiniNav(marginMiniNav)
        } else {
            setBg({transition: "all 0.3s ease 0s"})
            setBgMiniNav({transition: "all 0.3s ease 0s"})
        }
    })

    //menu for mobile version
    const [toggleMenu, setToggleMenu] = useState<boolean>(false)

    const onClickHandler = () => {
        setToggleMenu(!toggleMenu)
    }


    return (<div id={'header'}>
            <div className={s.header} style={bg}>
                <div className={s.mainBlock}>
                    <div className={s.info}>
                        <div className={s.logo}><img src={logo} alt="logo" className={s.img}/></div>
                        <div className={s.textLogo}>
                            <div className={s.logoName}>Dmitry <strong>Nazaruk</strong></div>
                            <div className={s.logoInfo}><strong>Frontend</strong> Developer</div>
                        </div>
                    </div>


                    {!toggleMenu
                        ? <div className={s.burgerContainer} onClick={onClickHandler}>
                            <div className={s.burger}><span></span></div>
                        </div>


                        : <div className={s.burgerContainerActive} onClick={onClickHandler}>
                            <div className={s.burgerActive}></div>

                        </div>
                    }

                    <Nav/>
                </div>
                {toggleMenu &&
                    <div className={s.miniNavbar} style={bgMiniNav}>
                        <MiniNav/>
                    </div>
                }

            </div>

        </div>
    );
};
const Header = React.memo(HeaderMemo)
export default Header;