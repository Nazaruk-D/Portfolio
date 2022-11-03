import React, {FC, useEffect, useRef, useState} from 'react';
import s from './Modal.module.scss'
import emailjs from "@emailjs/browser";
import SecondButton from "../../common/components/button/SecondButton";
import img from '../../assets/png/programmer.png'
// @ts-ignore
import Fade from 'react-reveal/Fade';
// @ts-ignore
import validator from "validator";


type ModalPropsType = {
    setModal: (modal: boolean) => void
}

const Modal: FC<ModalPropsType> = ({setModal}) => {

    const form: any = useRef();
    const [sendMessage, setSendMessage] = useState(false)
    const [nameErr, setNameErr] = useState("")
    const [emailErr, setEmailErr] = useState("")
    const [error, setError] = useState(true)

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        valid(form.current)
    };

    const valid = async (form: any) => {
        if (form.name.value.length < 3) {
            setNameErr("Name require")
            setError(true)
            return
        } else {
            setNameErr("")
            setError(false)
        }
        if (!validator.isEmail(form.email.value)) {
            setEmailErr("Invalid email address")
            setError(true)
        } else {
            setEmailErr("")
            setError(false)
        }
    }

    useEffect(() => {
        if (!error) {
            emailjs.sendForm('service_vubob9f', 'template_8pldnxk', form.current, 'keyVb2YeltdyganAt')
                .then((result) => {
                    setSendMessage(true)
                    setTimeout(() => {
                        setModal(false)
                    }, 3000)
                }, (error) => {
                    console.log(error.text);
                });
        }
    }, [error])

    return (
        <div className={s.modalContainer}>
            <div className={s.background} onClick={() => setModal(false)}></div>
            <Fade top>
                <div className={s.modalBlock}>
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
                                            name="email"
                                            placeholder={"E-mail"}
                                            className={s.input}
                                        />
                                    </div>
                                    <div className={s.errorFirst}>
                                        {nameErr && <div className={s.errorBlock}>{nameErr}</div>}
                                        {emailErr && <div className={s.errorBlock}>{emailErr}</div>}
                                    </div>
                                    <div className={s.inputBlock}>
                                        <input
                                            type="text"
                                            name="company"
                                            placeholder={"Company name"}
                                            className={s.input}
                                        />
                                        <input
                                            type="text"
                                            name="phone"
                                            placeholder={"Phone number"}
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