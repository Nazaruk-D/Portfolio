import React from 'react';
import s from "./AboutMe.module.css"
import sContainer from "../assets/styles/Container.module.css"
import EduExp from "./EduExp/EduExp";
import Title from "../common/components/title/Title";
import ProgressBar from "../common/components/progressBar/ProgressBar";


const AboutMe = () => {
    return (
        <div className={s.aboutBlock}>
            <div className={`${sContainer.container} ${s.aboutContainer}`}>
                <Title title={'About me'}/>
                <div className={s.aboutMe}>
                    <div className={s.info}>
                        <h3 className={s.titleAboutMe}>WHO <span className={s.span}>AM</span> I?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non vel, sint nisi possimus
                            sunt
                            veritatis totam velit, esse pariatur in minima nostrum harum dolorum perferendis
                            quasi.</p>
                        <div>
                            <button className={s.button}>Download MY CV</button>
                        </div>
                    </div>
                    <div className={s.expert}>
                        <h3 className={s.titleAboutMe}>EXPERT <span className={s.span}>IN</span></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non vel, sint nisi possimus
                            sunt
                            veritatis totam velit, esse pariatur in minima nostrum harum dolorum perferendis quasi
                            dolor
                            autem deleniti inventore.</p>
                        <ProgressBar title={"React"} stylePercent={"60%"} percent={"60%"}/>
                        <ProgressBar title={"JAVASCRIPT"} stylePercent={"80%"} percent={"80%"}/>
                        <ProgressBar title={"HTML&CSS"} stylePercent={"70%"} percent={"70%"}/>
                    </div>
                    <div className={s.eduExp}>
                       <div><EduExp title={"Education"}/></div>
                       <div><EduExp title={"Experience"}/></div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutMe;