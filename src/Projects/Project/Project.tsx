import React from 'react';
import s from "./Project.module.scss"


export type ProjectPropsType = {
    style: {
        backgroundImage: string
    }
    link: string
    name: string
    description: string
}


const Project: React.FC<ProjectPropsType> = ({name, description, link, style}) => {
    return (
        <div className={s.projectBlock}>
            <a href={link}>
                <div className={s.imgContainer} style={style}></div>
            </a>
            <div className={s.textArea}>
                <div className={s.nameProject}>{name}</div>
                <div className={s.description}>{description}</div>
            </div>

        </div>
    );
};

export default Project;
