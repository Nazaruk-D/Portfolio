import React, {FC} from 'react';
import s from "./Home.module.scss"
import Button from "../../common/components/button/Button";
// @ts-ignore
import ReactTypingEffect from 'react-typing-effect';
// @ts-ignore
import Fade from 'react-reveal/Fade';

type HomePropsType = {
    setModal: (modal: boolean) => void
}

const Home: FC<HomePropsType> = ({setModal}) => {
    return (
        <div className={s.homeBlock} id={'home'}>
            <div className={s.parentsText}>
                <div className={s.text}>
                    <Fade left>
                        <div className={s.greetings}><strong>Hi there</strong></div>
                        <div className={s.name}><h2><strong>I</strong> am Dmitry Nazaruk</h2></div>
                        <div className={s.front}><strong>
                            <ReactTypingEffect text={"A front-end developer"}/></strong>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <Button text={"LET'S TALK"} onClickHandler={setModal}/>
                    </Fade>
                </div>

            </div>
        </div>
    );
};

export default Home;


