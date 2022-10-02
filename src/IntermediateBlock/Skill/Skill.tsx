import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import s from "./Skill.module.scss"


type SkillPropsType = {
    icon: any
    svgIcon: string | undefined
    skillName: string
}

export const Skill: React.FC<SkillPropsType> = (props) => {
    return (
        <div className={s.skillBlock}>
            <div className={s.skill}>
                {props.icon ?
                    <FontAwesomeIcon icon={props.icon}/>
                    :
                    <img src={props.svgIcon} alt={'skillIcon'} className={s.skillPNG}/>
                }
            </div>
            <h3 className={s.skillName}>{props.skillName}</h3>
        </div>
    );
};
