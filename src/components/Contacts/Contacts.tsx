import React from 'react';
import s from "./Contacts.module.scss"
import Contact from "./Contact/Contact";
import SecondButton from "../../common/components/button/SecondButton";
import {
    AiFillFacebook,
    AiFillGithub,
    AiFillLinkedin,
    AiOutlineHome,
    AiOutlineMail,
    AiOutlineYoutube
} from "react-icons/ai";
import {HiOutlinePhone} from "react-icons/hi";
import {BsInstagram} from "react-icons/bs";
import {SiCodewars} from "react-icons/si";
import {useFormik} from "formik";


type FormikErrorType = {
    name?: string
    email?: string
    subject?: string
    message?: string
}


const Contacts = () => {

    const contacts = [
        {
            icon: <AiOutlineHome/>,
            description: "Republic of Belarus, Minsk, st. Makaenka 12B"
        },
        {
            icon: <HiOutlinePhone/>,
            description: "+375(29) 356-23-08"
        },
        {
            icon: <AiOutlineMail/>,
            description: "nazaruk-dima@mail.ru"
        },
    ]
    const social = [
        {
            icon: <AiFillFacebook/>,
            link: "https://www.facebook.com/nazaruk.dima"
        },
        {
            icon: <AiFillLinkedin/>,
            link: "https://www.linkedin.com/in/dzmitry-nazaruk-959927163/"
        },
        {
            icon: <BsInstagram/>,
            link: "https://www.instagram.com/nazaruk_dzmitry/"
        },
        {
            icon: <AiFillGithub/>,
            link: "https://github.com/Nazaruk-D"
        },
        {
            icon: <SiCodewars/>,
            link: "https://www.codewars.com/users/Nazaruk-D"
        },
        // {
        //     icon: <AiOutlineYoutube/>,
        //     link: "https://www.youtube.com/channel/UCU3EioEIrdAYLmV4rNskdRw"
        // },
    ]


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
        <div className={s.mainBlock} id={'contacts'}>
            <div className={s.contactsBlock}>
                <div className={s.contacts}>
                    <h2 className={s.title}>Contact address</h2>
                    {
                        contacts.map((c, index) => <Contact key={index} icon={c.icon} description={c.description}/>)
                    }
                    <div className={s.links}>
                        {
                            social.map((s, index) => <Contact key={index} icon={s.icon} link={s.link}/>)
                        }
                    </div>
                </div>
            </div>

            <div className={s.feedbackFormBlock}>
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
                        { formik.touched.name && formik.errors.name && <div style={{color:"red"}}>{formik.errors.name}</div>}
                        { formik.touched.email && formik.errors.email && <div style={{color:"red"}}>{formik.errors.email}</div>}
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
                    { formik.touched.message && formik.errors.message && <div style={{color:"red"}}>{formik.errors.message}</div>}
                    <div className={s.button}>
                        <SecondButton text={"Send"} type={"submit"}/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contacts;