import React from 'react';
import s from "./Contacts.module.css"
import sContainer from "../assets/styles/Container.module.css";
import Contact from "./Contact/Contact";
import home from "../assets/png/hose.png"
import phone from "../assets/png/phone.png"
import message from "../assets/png/message.png"
import fb from "../assets/png/fb.png"
import ln from "../assets/png/in.png"


const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${sContainer.container} ${s.contactsContainer}`}>
                <div className={s.contacts}>
                    <h2 className={s.title}>Contacts</h2>
                    {/*<Title title={"Contact Adress"}/>*/}
                    <Contact icon={home} description={"Republic of Belarus, Minsk, st. Makaenka 12B"}/>
                    <Contact icon={phone} description={"+375(29) 356-23-08"}/>
                    <Contact icon={message} description={"nazaruk-dima@mail.ru"}/>
                    <div className={s.links}>
                        <Contact icon={fb}/>
                        <Contact icon={ln}/>
                        <Contact icon={fb}/>
                        <Contact icon={ln}/>
                    </div>
                </div>

                <div className={s.revForm}>
                    <form action="" className={s.form}>
                        <div className={s.fBlock}>
                            <input type="text" value={"Name"} className={s.inp1}/>
                            <input type="text" value={"E-mail"} className={s.inp1}/>
                        </div>
                        <input type="text" value={"Subject"} className={s.inp3}/>
                        <textarea value={"Message"} name="" id="" cols={30} rows={10} className={s.textArea}></textarea>
                        <button>Send</button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contacts;