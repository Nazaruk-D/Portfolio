import React from 'react';
import s from "./SecondButton.module.scss"

type ButtonProps = {
    text: string
    type?: "button" | "submit" | "reset" | undefined
}

const SecondButton: React.FC<ButtonProps> = (props) => {
    return (<>
            <div>
                <button className={s.button} type={props.type}>{props.text}</button>
            </div>
        </>
    );
};

export default SecondButton;


