import React from 'react';
import s from "./Contact.module.scss"


export type ContactPropsType = {
    icon: any
    description?: string
    link?: string
}

const Contact: React.FC<ContactPropsType> = ({icon, description, link}) => {

    return (
        <div className={s.ContactContainer}>
            {link
                ? <a href={link}><div className={s.logoLink}>{icon}</div></a>
                : <div className={s.logo}>{icon}</div>
            }
            <div className={s.text}>{description}</div>
        </div>
    );
};

export default Contact;
