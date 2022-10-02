import React from 'react';
import s from "./AboutMe.module.scss"
import sContainer from "../assets/styles/Container.module.css"
import EduExp from "./EduExp/EduExp";
import Title from "../common/components/title/Title";
import WhoAmI from "./WhoAmI/WhoAmI";


const AboutMe = () => {
    return (
        <div className={s.aboutBlock}>
            <div className={`${sContainer.container} ${s.aboutContainer}`}>
                <Title title={'About me'}/>
                <div className={s.aboutMe}>
                    <div className={s.infoExpertBlock}>
                    <WhoAmI/>
                    </div>
                    <div className={s.eduExp}>
                       <EduExp/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutMe;