import React from 'react';
import s from "./ProgressBar.module.scss"

type ProgressBarPropsType = {
    title: string
    percent: string
    stylePercent: string
}

const ProgressBar: React.FC<ProgressBarPropsType> = ({percent,title,stylePercent}) => {
    return (
        <div className={s.progressContainer}>
            <h4>{title}</h4>
            <div className={s.progress}>
                <div className={s.progressbar} style={{width:`${stylePercent}`}}>
                    <span className={s.percent}>{percent}</span>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;