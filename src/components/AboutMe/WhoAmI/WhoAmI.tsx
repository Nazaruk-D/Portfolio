import React from 'react';
import s from "./WhoAmI.module.scss"
import SecondButton from "../../../common/components/button/SecondButton";
import ProgressBar from "../../../common/components/progressBar/ProgressBar";

type WhoAmIPropsType = {
}

const WhoAmI: React.FC<WhoAmIPropsType> = () => {
    return (
        <div className={s.infoExpertBlock}>
            <div className={s.info}>
                <h3 className={s.titleAboutMe}>WHO <span className={s.span}>AM</span> I?</h3>
                <p>I am a person who loves programming.              </p>
                    <p> Back to school, I wanted to become a programmer, but due to the lack of information, I decided to go in a different direction.</p>
                    <p> I enjoy what I am doing now and plan to continue developing in this area.</p>
                    <p> I am a current referee of the EHF handball.</p>



                <SecondButton text={"Download MY CV"}/>
            </div>
            <div className={s.expert}>
                <h3 className={s.titleAboutMe}>EXPERT <span className={s.span}>IN</span></h3>
                <p>I have experience in creating SPA with React/Redux/TypeScript. Now I am improving my skills in this
                    direction and expanding them with new technologies. Recently, I have been actively involved in the
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