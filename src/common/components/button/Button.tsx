import React from 'react';
import s from "./Button.module.scss"

type ButtonProps = {
    text: string
    style?: styleOnjType
    onMouseHandler?: () => void
    onMouseLeaveHandler?: () => void
    onClickHandler?: () => void
}

export type styleOnjType = {
    color: string
    borderColor: string
}

const Button: React.FC<ButtonProps> = (props) => {

    return (<>
            <div>
                <div className={s.button}
                     onMouseEnter={props.onMouseHandler}
                     onMouseLeave={props.onMouseLeaveHandler}
                     onClick={props.onClickHandler}
                >
                    <a href="#" style={props.style}>{props.text} </a>
                </div>
            </div>
        </>
    );
};

export default Button;


