import React, {useState} from 'react';
import s from "./ProgressBar.module.scss"

type ProgressBarPropsType = {
    title: string
    percent: string
    stylePercent: string
}

const ProgressBar: React.FC<ProgressBarPropsType> = ({percent,title,stylePercent}) => {
    const [bg, setBg] = useState("")
    const any = `${s.progressbarActive}`
    document.addEventListener('scroll', e => {
        if (window.scrollY > 500) {
            setBg(any)
        }
    })

    return (
        <div className={s.progressContainer}>
            <h4 className={s.title}>{title}</h4>
            <div className={s.progress}>
                <div className={`${s.progressbar} ${bg}`} style={{width:`${stylePercent}`}}>
                    <span className={s.percent}>{percent}</span>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;