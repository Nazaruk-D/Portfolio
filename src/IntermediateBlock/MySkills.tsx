import React from 'react'
import s from "./IntermediateBlock.module.scss"
import react from "../../src/assets/png/React.png"
import redux from "../../src/assets/png/Redux.png"
import js from "../../src/assets/png/JS.png"
import html from "../../src/assets/png/HTML.png"
import css from "../../src/assets/png/CSS.png"


export const MySkills = () => {
    return <div className={s.intermediateBlock}>
        <div className={s.logoBlock}>
            {/*<span className={s.react}><img src={react} alt=""/></span>*/}
            {/*<span className={s.redux}><img src={redux} alt=""/></span>*/}
            {/*<span className={s.js}><img src={js} alt=""/></span>*/}
            {/*<span className={s.html}><img src={html} alt=""/></span>*/}
            {/*<span className={s.css}><img src={css} alt=""/></span>*/}
        </div>
    </div>
}
