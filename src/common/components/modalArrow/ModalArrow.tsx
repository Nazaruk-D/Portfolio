import React, {useState} from 'react';
import s from './ModalArrow.module.scss'
import Link from 'react-scroll/modules/components/Link';

const ModalArrow = () => {
    const [arrow, setArrow] = useState({})
    const arrowOn = `${s.arrowActive}`


    document.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            setArrow(arrowOn)
            // document.getElementById("arrow").className = (`${style.arrow} ${style.showArrow}`)
        } else {
            setArrow("")

        }
    });

    return (
            <div className={`${s.arrow} ${arrow}`}>
                <Link to="home"
                      className={s.arrow}
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={4000}>
                </Link>


                {/*<li><Link*/}
                {/*className={s.arrow}*/}
                {/*activeClass={s.activeLink}*/}
                {/*spy={true}*/}
                {/*smooth={true}*/}
                {/*offset={-50}*/}
                {/*duration={1500}*/}
                {/*to="home"*/}
                {/*>Home</Link></li>*/}
            </div>
    );
};

export default ModalArrow;