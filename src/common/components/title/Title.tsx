import React from 'react';
import s from "./Title.module.scss"
// @ts-ignore
import Fade from 'react-reveal/Fade';

type TitleProps = {
    title: string
    color?: { color: string }
}

const Title: React.FC<TitleProps> = (props) => {
    return (
        <Fade bottom>
            <div className={s.title} style={props.color}>
                <h2>{props.title}</h2>
            </div>
        </Fade>

    );
};

export default Title;