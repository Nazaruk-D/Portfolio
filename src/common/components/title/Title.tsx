import React from 'react';
import s from "./Title.module.scss"

type TitleProps = {
    title: string
    color?:{color: string}
}

const Title: React.FC<TitleProps> = (props) => {
    return (
            <div className={s.title} style={props.color}>
                <h2>{props.title}</h2>
            </div>
    );
};

export default Title;