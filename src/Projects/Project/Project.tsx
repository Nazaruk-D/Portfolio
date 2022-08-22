import React from 'react';
import s from "./Project.module.css"


export type ProjectPropsType = {
    photo: string
    alt: string
    link: string
    name: string
    description: string
}


const Project: React.FC<ProjectPropsType> = ({photo, name, description,alt, link}) => {
    return (
        <div className={s.projectBlock}>
            <div className={s.imgContainer}>
                <a href={link}><img src={photo} alt={alt} className={s.photo}/></a>
                {/*<a href={link}></a>*/}
            </div>
            <div>{name}</div>
            <div>{description}</div>
        </div>
    );
};

export default Project;