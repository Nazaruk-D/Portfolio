import React from 'react';
import s from "./Title.module.css"

type TitleProps = {
    title: string
}

const Title: React.FC<TitleProps> = (props) => {
    return (
        <div>
            <div className={s.title}>
                <h2>{props.title}</h2>
            </div>
        </div>
    );
};

export default Title;