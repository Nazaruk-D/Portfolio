import React from 'react';
import s from "./Skill.module.css"

type SkillPropsType = {
    title: string
    description: string
}




const Skill: React.FC<SkillPropsType> = ({title, description}) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <h3 >{title}</h3>
            <span className={s.discription}>{description}</span>
        </div>
    );
};

export default Skill;