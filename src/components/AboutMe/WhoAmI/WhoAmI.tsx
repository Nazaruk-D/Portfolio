import React from 'react';
import s from "./WhoAmI.module.scss"
import SecondButton from "../../../common/components/button/SecondButton";
import ProgressBar from "../../../common/components/progressBar/ProgressBar";
// @ts-ignore
import cv from '../../../assets/cv/cvNazaruk.pdf'

type WhoAmIPropsType = {}

const WhoAmI: React.FC<WhoAmIPropsType> = () => {
    return (
        <div className={s.infoExpertBlock}>
            <div className={s.info}>
                <h3 className={s.titleAboutMe}>WHO <span className={s.span}>AM</span> I?</h3>
                <p> Hi! I am a front-end developer</p>
                <p> Now I am improve my skills in this direction and expanding them with new technologies.</p>
                <p> I plan to further study the framework.</p>
                <p> In my spare time i solve Codewars and improve my English</p>
                <SecondButton text={"Download MY CV"} cv={cv}/>
            </div>
            <div className={s.expert}>
                <h3 className={s.titleAboutMe}>EXPERT <span className={s.span}>IN</span></h3>
                <p>I have experience in creating SPA with React/Redux/TypeScript. Recently, I have been actively involved in the
                    following areas:</p>
                <ProgressBar title={"React"} stylePercent={"90%"} percent={"90%"}/>
                <ProgressBar title={"Rest API"} stylePercent={"80%"} percent={"80%"}/>
                <ProgressBar title={"Javascript"} stylePercent={"85%"} percent={"85%"}/>
                <ProgressBar title={"HTML&CSS"} stylePercent={"75%"} percent={"75%"}/>
            </div>
        </div>
    )
}

export default WhoAmI;