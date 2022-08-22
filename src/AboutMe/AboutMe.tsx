    import React from 'react';
    import s from "./AboutMe.module.css"
    import sContainer from "./../common/styles/Container.module.css"
    import Experience from "./Experience/Experience";
    import Education from "./Education/Education";

    const AboutMe = () => {
        return (
            <div className={s.aboutBlock}>
                <div className={`${sContainer.container} ${s.aboutContainer}`}>
                    <h2  className={s.title}>About me</h2>
                    <div className={s.aboutMe}>
                        <div className={s.info}>
                            <h3>WHO AM I?</h3>
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non vel, sint nisi possimus sunt veritatis totam velit, esse pariatur in minima nostrum harum dolorum perferendis quasi.</span>
                            <br/>
                            <button>Download MY CW</button>
                        </div>
                        <div className={s.expert}>
                            <h3>EXPERT IN</h3>
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non vel, sint nisi possimus sunt veritatis totam velit, esse pariatur in minima nostrum harum dolorum perferendis quasi dolor autem deleniti inventore.</span>
                        </div>
                        <div>
                            <Education title={"EDUCATION"}/>
                        </div>
                        <div>
                            <Experience title={"EXPERIENCE"}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    export default AboutMe;