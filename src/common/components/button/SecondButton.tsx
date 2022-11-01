import React from 'react';
import s from "./SecondButton.module.scss"
// @ts-ignore
import cv from '../../../assets/cv/cvNazaruk.pdf'

type ButtonProps = {
    text: string
    type?: "button" | "submit" | "reset" | undefined
}

const SecondButton: React.FC<ButtonProps> = (props) => {
    return (<>
            <div>
                <a href={cv} download={'cv_Nazaruk'}>
                    <button className={s.button} type={props.type}>{props.text}</button>
                </a>
            </div>
        </>
    );
};

export default SecondButton;


