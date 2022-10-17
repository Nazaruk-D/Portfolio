import React from 'react';
import s from "./ContactForm.module.scss";
import SecondButton from "../../../common/components/button/SecondButton";
import {useFormik} from "formik";
// @ts-ignore
import Fade from 'react-reveal/Fade';

const ContactForm = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: '',

        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.name) {
                errors.name = 'Enter your name'
            }
            if (!values.email) {
                errors.email = 'Enter your email'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            if (!values.message) {
                errors.message = 'Enter your message'
            }
            return errors
        },
        onSubmit: values => {
            alert(JSON.stringify(values));
            formik.resetForm()
        },
    })

    return (
        <div className={s.feedbackFormBlock}>
            <Fade right>
                <form action="src/components/Contacts/Contacts" className={s.form} onSubmit={formik.handleSubmit}>
                    <div className={s.firstBlock}>
                        <input
                            {...formik.getFieldProps('name')}
                            type="text"
                            className={s.firstLevelInput}
                            placeholder={"Full Name"}
                        />
                        <input
                            {...formik.getFieldProps('email')}
                            type="text"
                            placeholder={"E-mail"}
                            className={s.firstLevelInput}
                        />
                    </div>
                    <div className={s.errorBlock}>
                        {formik.touched.name && formik.errors.name &&
                            <div style={{color: "red"}}>{formik.errors.name}</div>}
                        {formik.touched.email && formik.errors.email &&
                            <div style={{color: "red"}}>{formik.errors.email}</div>}
                    </div>
                    <input
                        {...formik.getFieldProps('subject')}
                        type="text"
                        placeholder={"Subject"}
                        className={s.secondBlock}
                    />
                    <textarea
                        {...formik.getFieldProps('message')}
                        placeholder={"Message"}
                        cols={30}
                        rows={10}
                        className={s.textArea}
                    > </textarea>
                    {formik.touched.message && formik.errors.message &&
                        <div style={{color: "red"}}>{formik.errors.message}</div>}
                    <div className={s.button}>
                        <SecondButton text={"Send"} type={"submit"}/>
                    </div>
                </form>
            </Fade>
        </div>
    );
};

export default ContactForm;


type FormikErrorType = {
    name?: string
    email?: string
    subject?: string
    message?: string
}