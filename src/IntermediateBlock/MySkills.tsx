import React from 'react'
import s from "./MySkills.module.scss"
import react from "../../src/assets/png/React.png"
import redux from "../../src/assets/png/Redux.png"
import js from "../../src/assets/png/JS.png"
import html from "../../src/assets/png/HTML.png"
import css from "../../src/assets/png/CSS.png"
import {faCss3Alt, faGitAlt, faHtml5, faJs, faReact} from "@fortawesome/free-brands-svg-icons";
import reduxSvg from "../../src/assets/svg/redux.svg"
import tsSvg from '../../src/assets/svg/TS.svg'
import restSvg from '../../src/assets/svg/TS.svg'
import storybookSvg from "../../src/assets/svg/storybook.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import background from "../common/img/skillsBack.jpg";
import {Skill} from "./Skill/Skill";
import Title from "../common/components/title/Title";

export const MySkills = () => {

    const skills = [
        {
            skill: 'React',
            icon: faReact,
        },
        {
            skill: 'Redux',
            svg: reduxSvg
        },
        {
            skill: 'TypeScript',
            svg: tsSvg
        },
        {
            skill: 'JavaScript',
            icon: faJs,
        },
        {
            skill: 'HTML5',
            icon: faHtml5,
        },
        {
            skill: 'CSS3',
            icon: faCss3Alt,
        },
        {
            skill: 'RestAPI',
            svg: restSvg,
        },
        {
            skill: 'Storybook',
            svg: storybookSvg
        },
        {
            skill: 'Git',
            icon: faGitAlt
        }
    ]

    const color = {color:"#f9f9f9"}

    return <div className={s.intermediateBlock}>
            <Title title={"My skills"} color={color}/>
        <div className={s.logoBlock}>
            {
                skills.map(m =>
                    <Skill skillName={m.skill} icon={m.icon} svgIcon={m.svg}/>
                )
            }
        </div>
    </div>
}
