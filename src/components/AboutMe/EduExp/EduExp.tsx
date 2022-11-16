import React from 'react';
import Block from "../Block/Block";
import s from "./EduExp.module.scss"

type ExperiencePropsType = {}

const EduExp: React.FC<ExperiencePropsType> = () => {
    return (<div className={s.block}>
            <div className={s.eduContainer}>
                <h3 className={s.title}>Education</h3>
                <Block year={"2022"} place={"IT-incubator"} title400={"IT-"} title700={"incubator"}
                       description={"React / Redux / Typescript / Javascript"}/>
                <Block year={"2017-2019"} place={"BSEU"} title400={"Master's "} title700={"Degree (Logistics)"}
                       description={"Logistics is a modern system for managing material, information and financial flows, aimed at improving the efficiency of both the whole enterprise and its individual structural divisions."}/>
                <Block year={"2009-2013"} place={"BSEU"} title400={"Bachelor's "} title700={"degree (Pricing)"}
                       description={"In a favorable economic situation, marketing is needed for the progressive and stable development of an enterprise, and in a crisis it becomes almost the only “mechanism” that can ensure the survival of an enterprise. F. Kotler"}/>
            </div>

            <div className={s.expContainer}>
                <h3 className={s.title}>Experience</h3>
                <Block year={"09-12/2022"} place={"Part time"} title400={"Educational "} title700={"cards"}
                       description={"Stack: TypeScript, React, Redux, Redux-thunk, Router-dom, Axios, Formik, Team development, Bug fixing"}/>
                <Block year={"06-09/2022"} place={"Part time"} title400={"To do  "} title700={"list"}
                       description={"Stack: TypeScript, React, Redux Toolkit, Redux-thunk, Router-dom, Axios, MUI, Formik, StoryBook, Covering code with unit tests, Bug fixing"}/>
                <Block year={"03-06/2022"} place={"Part time"} title400={"Social "} title700={"Network"}
                       description={"Stack: TypeScript, React, Redux, Redux-thunk, Router-dom, Axios, MUI, Formik, Bug fixing"}/>
                <Block year={"2018-2022"} place={"SIMStrade"} title400={"Deputy "} title700={"Director"}
                       description={"Work with suppliers and buyers at high levels in the field of supply and installation of loading systems and gates of all types for industrial facilities (logistics centers, warehouses, shops). Full transaction support. Control at all stages of delivery."}/>
            </div>
        </div>
    );
};

export default EduExp;