import React from 'react';
import s from "./DistantWork.module.css"
import sContainer from "../assets/styles/Container.module.css";
import Title from "../common/components/title/Title";
import Button from "../common/components/button/Button";

const DistantWork = () => {
    return (<>
        <div className={s.distantBlock}>
            <div className={`${sContainer.container} ${s.distantContainer}`}>
            {/*<h2 className={s.title}>Considering remote work options</h2>*/}
                <div>
                    <Title title={"Considering remote work options"}/>
                </div>
                {/*<button>Hire me</button>*/}
                <div>
                    <Button text={"Hire me"}/>
                </div>

            </div>
        </div>
        </>
    );
};

export default DistantWork;