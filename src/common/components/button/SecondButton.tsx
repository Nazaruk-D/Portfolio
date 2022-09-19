import React from 'react';
import s from "./SecondButton.module.scss"

type ButtonProps = {
    text: string
}

const SecondButton: React.FC<ButtonProps> = (props) => {
    return (<>
            <div>
                <button className={s.button}>{props.text}</button>
            </div>
        </>
    );
};

export default SecondButton;


