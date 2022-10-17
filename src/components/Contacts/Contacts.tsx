import React from 'react';
import s from "./Contacts.module.scss"
import ContactForm from "./ContactForm/ContactForm";

import ContactDescription from "./ContactDescription/ContactDescription";


const Contacts = () => {
    return (
        <div className={s.mainBlock} id={'contacts'}>
            <ContactDescription/>
            <ContactForm/>
        </div>
    );
};

export default Contacts;