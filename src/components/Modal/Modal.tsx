import React, {FC, useRef, useState} from 'react';
import s from './Modal.module.scss'
import emailjs from "@emailjs/browser";
import SecondButton from "../../common/components/button/SecondButton";
import img from '../../assets/png/programmer.png'
// @ts-ignore
import Fade from 'react-reveal/Fade';


type ModalPropsType = {
    setModal: (modal: boolean) => void
}

const Modal: FC<ModalPropsType> = ({setModal}) => {

    const form: any = useRef();
    const [sendMessage, setSendMessage] = useState(false)
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        emailjs.sendForm('service_vubob9f', 'template_8pldnxk', form.current, 'keyVb2YeltdyganAt')
            .then((result) => {
                console.log(result.text);
                form.current.name.value = ""
                form.current.email.value = ""
                form.current.subject.value = ""
                form.current.message.value = ""
                setSendMessage(true)
                setTimeout(() => {
                    setModal(false)
                }, 5000)
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className={s.modalContainer}>
            <div className={s.background} onClick={() => setModal(false)}></div>
            <Fade top>
                <div className={s.modalBlock} >
                    <div className={s.closeBlock} onClick={() => setModal(false)}></div>
                    <div className={s.headModal}>
                        <div><h4 className={s.headerText}>Have an offer?</h4></div>
                        <div className={s.text}>I am ready to consider it. Send a short description and leave your
                            contacts.
                        </div>
                    </div>

                    {sendMessage ?
                        <div className={s.answer}>Thank you, your information has been received!</div>
                        : <div className={s.bodyModal}>
                            <form ref={form} className={s.form} onSubmit={sendEmail}>
                                <div className={s.all}>
                                    <div className={s.inputBlock}>
                                        <input
                                            type="text"
                                            name="name"
                                            className={s.input}
                                            placeholder={"Full Name"}
                                        />
                                        <input
                                            type="text"
                                            name="company"
                                            placeholder={"Company"}
                                            className={s.input}
                                        />
                                    </div>
                                    <div className={s.errorBlock}>
                                    </div>
                                    <div className={s.inputBlock}>
                                        <input
                                            type="text"
                                            name="email"
                                            placeholder={"E-mail"}
                                            className={s.input}
                                        />
                                        <input
                                            type="text"
                                            name="subject"
                                            placeholder={"Subject"}
                                            className={s.input}
                                        />
                                    </div>
                                    <textarea
                                        placeholder={"Your message..."}
                                        name="message"
                                        cols={30}
                                        rows={10}
                                        className={s.textArea}
                                    ></textarea>
                                </div>

                                <div className={s.acceptBlock}>
                                    <div><img src={img} alt={'img'} className={s.img}/></div>
                                    <div className={s.button}><SecondButton text={"Send"} type={"submit"}/></div>
                                </div>
                            </form>
                        </div>
                    }
                </div>
            </Fade>
        </div>
    );
};

export default Modal;