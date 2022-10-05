import React from 'react';
import s from "./Contacts.module.scss"
import Contact from "./Contact/Contact";
import SecondButton from "../common/components/button/SecondButton";
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
        {
            icon: <AiOutlineYoutube/>,
            link: "https://www.youtube.com/channel/UCU3EioEIrdAYLmV4rNskdRw"
        },
    ]

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
                <form action="" className={s.form}>
                    <div className={s.firstBlock}>
                        <input type="text" value={"Name"} className={s.firstLevelInput}/>
                        <input type="text" value={"E-mail"} className={s.firstLevelInput}/>
                    </div>
                    <input type="text" value={"Subject"} className={s.secondBlock}/>
                    <textarea value={"Message"} name="" id="" cols={30} rows={10} className={s.textArea}></textarea>
                    <div className={s.button}>
                        <SecondButton text={"Send"}/>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Contacts;