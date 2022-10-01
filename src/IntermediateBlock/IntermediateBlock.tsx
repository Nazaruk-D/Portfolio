import React, {useState} from 'react'
import s from "./IntermediateBlock.module.scss"
import Button from "../common/components/button/Button";
import react from "../../src/assets/png/React.png"
import redux from "../../src/assets/png/Redux.png"
import js from "../../src/assets/png/JS.png"
import html from "../../src/assets/png/HTML.png"
import css from "../../src/assets/png/CSS.png"


export const IntermediateBlock = () => {

    const [color, setColor] = useState({color: "white", borderColor: "white"})

    const onMouseHandler = () => {
        setColor({color: "#303030", borderColor: "white"})
    }

    const onMouseLeaveHandler = () => {
        setColor({color: "white", borderColor: "white"})
    }

    const onClickHandler = () => {
        alert('HELOOO')
    }

    return <div className={s.intermediateBlock}>
        {/*<div className={s.button}>*/}
        {/*    <Button text={"Click me"}*/}
        {/*            style={color}*/}
        {/*            onMouseHandler={onMouseHandler}*/}
        {/*            onMouseLeaveHandler={onMouseLeaveHandler}*/}
        {/*            onClickHandler={onClickHandler}*/}
        {/*    />*/}
        {/*</div>*/}
        <div className={s.logoBlock}>
            <span className={s.react}><img src={react} alt=""/></span>
            <span className={s.redux}><img src={redux} alt=""/></span>
            <span className={s.js}><img src={js} alt=""/></span>
            <span className={s.html}><img src={html} alt=""/></span>
            <span className={s.css}><img src={css} alt=""/></span>
        </div>

    </div>
}
