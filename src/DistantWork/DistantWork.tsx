import React from 'react';
import s from "./DistantWork.module.scss"
import sContainer from "../assets/styles/Container.module.css";
import Title from "../common/components/title/Title";
import Button from "../common/components/button/Button";

const DistantWork = () => {
    return (<>
        <div className={s.distantBlock}>
            <div className={`${sContainer.container} ${s.distantContainer}`}>
                <div className={s.title}>
                    <Title title={"Considering remote work options"}/>
                </div>
                <div>
                    <Button text={"Hire me"}/>
                </div>
            </div>
        </div>
        </>
    );
};

export default DistantWork;