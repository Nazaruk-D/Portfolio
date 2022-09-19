import React from 'react';
import s from "./Button.module.scss"

type ButtonProps = {
    text: string
}

const Button: React.FC<ButtonProps> = (props) => {
    return (<>
            <div>
                <div className={s.button}>
                    <a href="#">{props.text}</a>
                </div>
            </div>
        </>
    );
};

export default Button;


