import React, {useState} from 'react';
import s from './ModalArrow.module.scss'
import Link from 'react-scroll/modules/components/Link';

const ModalArrow = () => {
    const [arrow, setArrow] = useState({})
    const arrowOn = `${s.arrowActive}`

    document.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            setArrow(arrowOn)
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
                      duration={5000}>
                </Link>
            </div>
    );
};

export default ModalArrow;