import React from 'react';
import Block from "../Block/Block";
import s from "./EduExp.module.scss"

type ExperiencePropsType = {
    title: "Education" | "Experience"
}

const EduExp: React.FC<ExperiencePropsType> = ({title}) => {
    return (<>
            {
                title === "Education" &&
                <div className={s.eduExpContainer}>
                    <h3 className={s.title}>{title}</h3>
                    <Block year={"2009-2013"} place={"BSEU"} title={"Marketing"}
                           description={"Poin dui orci, pretium eget fringilla sit amet, luctus a nisl. Poin dui orci, pretium eget fringilla sit amet, luctus a nisl"}/>
                    <Block year={"2009-2013"} place={"BSEU"} title={"Marketing"}
                           description={"Poin dui orci, pretium eget fringilla sit amet, luctus a nisl. Poin dui orci, pretium eget fringilla sit amet, luctus a nisl"}/>
                    <Block year={"2009-2013"} place={"BSEU"} title={"Marketing"}
                           description={"Poin dui orci, pretium eget fringilla sit amet, luctus a nisl. Poin dui orci, pretium eget fringilla sit amet, luctus a nisl"}/>
                </div>
            }

            {
                title === "Experience" &&
                <div className={s.eduExpContainer}>
                    <h3 className={s.title}>{title}</h3>
                    <Block year={"2013-2016"} place={"PetroleumS"} title={"VED"}
                           description={"Poin dui sdfsdfluctus a nisl"}/>
                    <Block year={"2013-2016"} place={"PetroleumS"} title={"VED"}
                           description={"Poin dui orci, pretium eget fringilla sit amet, luctus a nisl. Poin dui orci, pretium eget fringilla sit amet, luctus a nisl"}/>
                    <Block year={"2013-2016"} place={"PetroleumS"} title={"VED"}
                           description={"Poin dui orci, pretium eget fringilla sit amet, luctus a nisl. Poin dui orci, pretium eget fringilla sit amet, luctus a nisl"}/>
                </div>
            }
        </>
    );
};

export default EduExp;