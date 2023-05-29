import React from 'react';
import s from "./Project.module.scss"
// @ts-ignore
import Fade from 'react-reveal/Fade';

export type ProjectPropsType = {
    style: {
        backgroundImage: string
    }
    link: string
    title: string
    description: string
    linkRep: string
}


const Project: React.FC<ProjectPropsType> = ({title, description, link, style, linkRep}) => {
    return (
        <Fade bottom cascade>
            <div className={s.projectBlock}>
                <div className={s.imgContainer} style={style}>
                    <div className={s.repo}>
                        <h2>{title}</h2>
                        <p>To view the project or repository, follow the links.</p>
                        <div>
                            <a href={link} target="_blank" className={s.link} data-toggle="modal">demo</a>
                        </div>
                        <div>
                            <a href={linkRep} target="_blank" className={s.link} data-toggle="modal">repository</a>
                        </div>
                    </div>
                </div>
                <div className={s.textArea}>
                    <div className={s.nameProject}>{title}</div>
                    <div className={s.description}>{description}</div>
                </div>
            </div>
        </Fade>
    );
};

export default Project;
