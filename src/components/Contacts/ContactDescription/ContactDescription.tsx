import React from 'react';
import s from "./ContactDescription.module.scss";
import Contact from "../Contact/Contact";
import {AiFillFacebook, AiFillGithub, AiFillLinkedin, AiOutlineHome, AiOutlineMail} from "react-icons/ai";
import {HiOutlinePhone} from "react-icons/hi";
import {BsInstagram} from "react-icons/bs";
import {SiCodewars} from "react-icons/si";
// @ts-ignore
import Fade from 'react-reveal/Fade';

const ContactDescription = () => {
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
    return (
        <div className={s.contactsBlock}>
            <Fade left>
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
            </Fade>
        </div>
    );
};

export default ContactDescription;