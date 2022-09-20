import React from 'react';
import s from "./Contact.module.scss"
import home from "../../assets/png/hose.png"

export type ContactPropsType = {
    icon: string
    description?: string
}

const Contact: React.FC<ContactPropsType> = ({icon,description}) => {
    return (
        <div className={s.ContactContainer}>
            <div className={s.logo}><img src={icon} alt="icon"/></div>
            <div className={s.text}>{description}</div>
        </div>
    );
};

export default Contact;