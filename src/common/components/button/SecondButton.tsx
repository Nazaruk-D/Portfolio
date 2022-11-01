import React from 'react';
import s from "./SecondButton.module.scss"


type ButtonProps = {
    text: string
    type?: "button" | "submit" | "reset" | undefined
    cv?: any
}

const SecondButton: React.FC<ButtonProps> = (props) => {
    return (<>
            <div>
                <a href={props.cv} download={'cv_Nazaruk'}>
                    <button className={s.button} type={props.type}>{props.text}</button>
                </a>
            </div>
        </>
    );
};

export default SecondButton;


