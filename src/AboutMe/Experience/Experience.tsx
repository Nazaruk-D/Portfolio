import React from 'react';
import Block from "../Block/Block";
import s from "./Experience.module.css"

type ExperiencePropsType = {
    title: string
}

const Experience: React.FC<ExperiencePropsType> = ({title}) => {
    return (
        <div className={s.expContainer}>
            <h3 className={s.title}>{title}</h3>
            <Block year={"2013-2016"} place={"PetroleumS"} title={"VED"}
                   description={"Poin dui orci, pretium eget fringilla sit amet, luctus a nisl. Poin dui orci, pretium eget fringilla sit amet, luctus a nisl"}/>
            <Block year={"2013-2016"} place={"PetroleumS"} title={"VED"}
                   description={"Poin dui orci, pretium eget fringilla sit amet, luctus a nisl. Poin dui orci, pretium eget fringilla sit amet, luctus a nisl"}/>
            <Block year={"2013-2016"} place={"PetroleumS"} title={"VED"}
                   description={"Poin dui orci, pretium eget fringilla sit amet, luctus a nisl. Poin dui orci, pretium eget fringilla sit amet, luctus a nisl"}/>
        </div>
    );
};

export default Experience;