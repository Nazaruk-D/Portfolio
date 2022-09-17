import React from 'react';
import s from "./DistantWork.module.css"
import sContainer from "../common/styles/Container.module.css";

const DistantWork = () => {
    return (<>
        <div className={s.distantBlock}>
            <div className={`${sContainer.container} ${s.distantContainer}`}>
            <h2 className={s.title}>Considering remote work options</h2>
                <button>Hire me</button>
            </div>
        </div>
        </>
    );
};

export default DistantWork;