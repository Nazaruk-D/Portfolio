import React, {useState} from 'react'
import s from "./IntermediateBlock.module.scss"
import Button from "../common/components/button/Button";


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
        <div className={s.button}>
            <Button text={"Click me"}
                    style={color}
                    onMouseHandler={onMouseHandler}
                    onMouseLeaveHandler={onMouseLeaveHandler}
                    onClickHandler={onClickHandler}
            />
        </div>
    </div>
}
