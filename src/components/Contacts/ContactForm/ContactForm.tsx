import React, {useEffect, useRef, useState} from 'react';
import s from "./ContactForm.module.scss";
import SecondButton from "../../../common/components/button/SecondButton";
// @ts-ignore
import Fade from 'react-reveal/Fade';
import emailjs from '@emailjs/browser';
import validator from "validator";

const ContactForm = () => {

    const form: any = useRef();
    const [sendMessage, setSendMessage] = useState(false)
    const [nameErr, setNameErr] = useState("")
    const [emailErr, setEmailErr] = useState("")
    const [error, setError] = useState(true)

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        debugger
        e.preventDefault();
        valid(form.current)
    };

    const valid = (form: any) => {
        debugger
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
            emailjs.sendForm('service_vubob9f', 'template_tpuv1nf', form.current, 'keyVb2YeltdyganAt')
                .then((result) => {
                    setSendMessage(true)
                }, (error) => {
                    console.log(error.text);
                });
        }
    }, [error])

    useEffect(() => {
        setTimeout(() => {
            setSendMessage(false)
        }, 4000)
    }, [sendMessage])

    // const nameBorderErr = nameErr ? {borderColor: "red"} : {borderColor: "#ccc"}

    return (
        <Fade right>
            <div className={s.feedbackFormBlock}>
                {sendMessage ? <div className={s.answer}>Thank you, your information has been received!</div>
                    :
                    <form ref={form} className={s.form} onSubmit={sendEmail}>
                        <div>
                            <div className={s.firstBlock}>
                                <input
                                    type="text"
                                    name="name"
                                    className={s.firstLevelInput}
                                    // style={nameBorderErr}
                                    placeholder={"Full Name"}
                                />
                                <input
                                    type="text"
                                    name="email"
                                    placeholder={"E-mail"}
                                    className={s.firstLevelInput}
                                />
                            </div>
                            <div className={s.errorFirst}>
                                {nameErr && <div className={s.errorBlock}>{nameErr}</div>}
                                {emailErr && <div className={s.errorBlock2}>{emailErr}</div>}
                            </div>
                            <div className={s.errorBlock}>
                            </div>
                            <input
                                type="text"
                                name="phone"
                                placeholder={"Phone number"}
                                className={s.secondBlock}
                            />
                            <textarea
                                placeholder={"Message"}
                                name="message"
                                cols={30}
                                rows={10}
                                className={s.textArea}
                            ></textarea>
                        </div>
                        <div className={s.button}>
                            <SecondButton text={"Send"} type={"submit"}/>
                        </div>
                    </form>
                }
            </div>
        </Fade>
    );
};

export default ContactForm;

