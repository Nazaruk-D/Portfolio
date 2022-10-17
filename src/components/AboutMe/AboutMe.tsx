import React from 'react';
import s from "./AboutMe.module.scss"
import sContainer from "../../assets/styles/Container.module.css"
import EduExp from "./EduExp/EduExp";
import Title from "../../common/components/title/Title";
import WhoAmI from "./WhoAmI/WhoAmI";
// @ts-ignore
import Fade from 'react-reveal/Fade';

const AboutMe = () => {
    return (
        <div className={s.aboutBlock} id={'about'}>
            <div className={`${sContainer.container} ${s.aboutContainer}`}>
                <Title title={'About me'}/>
                <div className={s.aboutMe}>
                    <Fade bottom>
                    <div className={s.infoExpertBlock}>
                        <WhoAmI/>
                    </div>
                    </Fade>
                    <Fade bottom>
                    <div className={s.eduExp}>
                        <EduExp/>
                    </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;