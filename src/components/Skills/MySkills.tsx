import React from 'react'
import s from "./MySkills.module.scss"
import {faCss3Alt, faGitAlt, faHtml5, faJs, faReact} from "@fortawesome/free-brands-svg-icons";
import reduxSvg from "../../assets/svg/redux.svg"
import tsSvg from '../../assets/svg/TS.svg'
import restSvg from '../../assets/svg/TS.svg'
import storybookSvg from "../../assets/svg/storybook.svg";
import jestSvg from "../../assets/svg/jest.svg";
import {Skill} from "./Skill/Skill";
import Title from "../../common/components/title/Title";

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
        },
        {
            skill: 'TDD - JEST',
            svg: jestSvg
        }
    ]

    const color = {color:"#f9f9f9"}

    return <div className={s.intermediateBlock} id={'skills'}>
        <div className={s.title}>
            <Title title={"My skills"} color={color}/>
        </div>
        <div className={s.logoBlock}>
            {
                skills.map((m,i) =>
                    <Skill key={i} skillName={m.skill} icon={m.icon} svgIcon={m.svg}/>
                )
            }
        </div>
    </div>
}
