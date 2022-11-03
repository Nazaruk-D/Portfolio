import React, {FC} from 'react';
import s from "./DistantWork.module.scss"
import sContainer from "../../assets/styles/Container.module.css";
import Title from "../../common/components/title/Title";
import Button from "../../common/components/button/Button";
// @ts-ignore
import Fade from 'react-reveal/Fade';
// @ts-ignore
import HeadShake from 'react-reveal/HeadShake';

type DistantWorkPropsType = {
    setModal: (modal: boolean) => void

}

const DistantWork: FC<DistantWorkPropsType> = ({setModal}) => {
    return (<>
            <div className={s.distantBlock}>
                <div className={`${sContainer.container} ${s.distantContainer}`}>
                    <div>
                        <Title title={"Considering remote work options"}/>
                    </div>
                    <HeadShake>
                        <div>
                            <Button text={"Hire me"} onClickHandler={setModal}/>
                        </div>
                    </HeadShake>
                </div>
            </div>
        </>
    );
};

export default DistantWork;