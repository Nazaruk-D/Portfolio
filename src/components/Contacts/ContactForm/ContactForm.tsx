import React, {useRef, useState} from 'react';
import s from "./ContactForm.module.scss";
import SecondButton from "../../../common/components/button/SecondButton";
import {useFormik} from "formik";
// @ts-ignore
import Fade from 'react-reveal/Fade';
import emailjs from '@emailjs/browser';

const ContactForm = () => {

    // const formik = useFormik({
    //     initialValues: {
    //         name: '',
    //         email: '',
    //         subject: '',
    //         message: '',
    //
    //     },
    //     validate: (values) => {
    //         const errors: FormikErrorType = {}
    //         if (!values.name) {
    //             errors.name = 'Enter your name'
    //         }
    //         if (!values.email) {
    //             errors.email = 'Enter your email'
    //         } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //             errors.email = 'Invalid email address'
    //         }
    //         if (!values.message) {
    //             errors.message = 'Enter your message'
    //         }
    //         return errors
    //     },
    //     onSubmit: values => {
    //         alert(JSON.stringify(values));
    //         emailjs.sendForm('service_vubob9f', 'template_tpuv1nf', JSON.stringify(formik.values) , 'keyVb2YeltdyganAt').then((result) => {
    //             console.log(result.text);
    //         }, (error) => {
    //             console.log(error.text);
    //         });
    //         formik.resetForm()
    //     },
    // })

    const form: any = useRef();
    const [sendMessage, setSendMessage] = useState(false)
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        emailjs.sendForm('service_vubob9f', 'template_tpuv1nf', form.current, 'keyVb2YeltdyganAt')
            .then((result) => {
                console.log(result.text);
                form.current.name.value = ""
                form.current.email.value = ""
                form.current.subject.value = ""
                form.current.message.value = ""
                setSendMessage(true)
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <Fade right>
            <div className={s.feedbackFormBlock}>
                {/*<form action="src/components/Contacts/Contacts" className={s.form} onSubmit={formik.handleSubmit} >*/}
                <form ref={form} className={s.form} onSubmit={sendEmail}>
                    <div className={s.firstBlock}>
                        <input
                            type="text"
                            name="name"
                            className={s.firstLevelInput}
                            placeholder={"Full Name"}
                        />
                        <input
                            type="text"
                            name="email"
                            placeholder={"E-mail"}
                            className={s.firstLevelInput}
                        />
                    </div>
                    <div className={s.errorBlock}>
                        {/*{formik.touched.name && formik.errors.name &&*/}
                        {/*    <div style={{color: "red"}}>{formik.errors.name}</div>}*/}
                        {/*{formik.touched.email && formik.errors.email &&*/}
                        {/*    <div style={{color: "red"}}>{formik.errors.email}</div>}*/}
                    </div>
                    <input
                        type="text"
                        name="subject"
                        placeholder={"Subject"}
                        className={s.secondBlock}
                    />
                    <textarea
                        placeholder={"Message"}
                        name="message"
                        cols={30}
                        rows={10}
                        className={s.textArea}
                    > </textarea>
                    {/*{formik.touched.message && formik.errors.message &&*/}
                    {/*    <div style={{color: "red"}}>{formik.errors.message}</div>}*/}
                    <div className={s.button}>
                        <SecondButton text={"Send"} type={"submit"}/>
                        {sendMessage && <div className={s.answer}>Thank you, your information has been received!</div>}
                    </div>
                </form>
            </div>
        </Fade>
    );
};

export default ContactForm;


// type FormikErrorType = {
//     name?: string
//     email?: string
//     subject?: string
//     message?: string
// }