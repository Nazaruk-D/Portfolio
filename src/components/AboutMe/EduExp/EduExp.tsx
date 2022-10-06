import React from 'react';
import Block from "../Block/Block";
import s from "./EduExp.module.scss"

type ExperiencePropsType = {
}

const EduExp: React.FC<ExperiencePropsType> = () => {
    return (<div className={s.block}>
                <div className={s.eduContainer}>
                    <h3 className={s.title}>Education</h3>
                    <Block year={"2022"} place={"IT-incubator"} title400={"IT-"} title700={"incubator"}
                           description={"Learning programming React + Redux. Native Java Script....."}/>
                    <Block year={"2017-2019"} place={"BSEU"} title400={"Master's "} title700={"Degree (Logistics)"}
                           description={"Logistics is a modern system for managing material, information and financial flows, aimed at improving the efficiency of both the whole enterprise and its individual structural divisions."}/>
                    <Block year={"2009-2013"} place={"BSEU"} title400={"Higher "} title700={"Education (Pricing)"}
                           description={"In a favorable economic situation, marketing is needed for the progressive and stable development of an enterprise, and in a crisis it becomes almost the only “mechanism” that can ensure the survival of an enterprise. F. Kotler"}/>
                </div>

                <div className={s.expContainer}>
                    <h3 className={s.title}>Experience</h3>
                    <Block year={"2018-2022"} place={"SIMStrade"} title400={"Deputy "} title700={"Director"}
                           description={"Work with suppliers and buyers at high levels in the field of supply and installation of loading systems and gates of all types for industrial facilities (logistics centers, warehouses, shops). Full transaction support. Control at all stages of delivery."}/>
                    <Block year={"2016-2018"} place={"SIMStrade"} title400={"Sales "} title700={"Manager"}
                           description={"Full transaction support. Work with the client, designers, construction organizations in the field of supply and installation of loading systems and gates of all types for industrial facilities (logistics centers, warehouses, shops). Control/departure to the object."}/>
                    <Block year={"2013-2016"} place={"PetroleumS"} title400={"Leading "} title700={"specialist of foreign economic activity"}
                           description={"Support of foreign trade contracts. Preparation and work with shipping documents for foreign trade export/import in the oil industry."}/>
                </div>
        </div>
    );
};

export default EduExp;