import React from 'react';
import Block from "../Block/Block";
import s from "./EduExp.module.scss"

type ExperiencePropsType = {
}

const EduExp: React.FC<ExperiencePropsType> = ({}) => {
    return (<div className={s.block}>
                <div className={s.eduContainer}>
                    <h3 className={s.title}>Education</h3>
                    <Block year={"2009-2013"} place={"BSEU"} title={"Marketing"}
                           description={"Poin dui orci, pretium eget fringilla sit amet, luctus a nisl. Poin dui orci, pretium eget fringilla sit amet, luctus a nisl"}/>
                    <Block year={"2009-2013"} place={"BSEU"} title={"Marketing"}
                           description={"Poin dui orci, pretium eget fringilla sit amet, luctus a nisl. Poin dui orci, pretium eget fringilla sit amet, luctus a nisl"}/>
                    <Block year={"2009-2013"} place={"BSEU"} title={"Marketing"}
                           description={"Poin dui orci, pretium eget fringilla sit amet, luctus a nisl. Poin dui orci, pretium eget fringilla sit amet, luctus a nisl"}/>
                </div>

                <div className={s.expContainer}>
                    <h3 className={s.title}>Experience</h3>
                    <Block year={"2013-2016"} place={"PetroleumS"} title={"VED"}
                           description={"Poin dui sdfsdfluctus a nisl"}/>
                    <Block year={"2013-2016"} place={"PetroleumS"} title={"VED"}
                           description={"Poin dui orci, pretium eget fringilla sit amet, luctus a nisl. Poin dui orci, pretium eget fringilla sit amet, luctus a nisl"}/>
                    <Block year={"2013-2016"} place={"PetroleumS"} title={"VED"}
                           description={"Poin dui orci, pretium eget fringilla sit amet, luctus a nisl. Poin dui orci, pretium eget fringilla sit amet, luctus a nisl"}/>
                </div>
        </div>
    );
};

export default EduExp;