import React from 'react';
import s from "./Contacts.module.scss"
import ItemContact from "./Contact/Contact";
import home from "../assets/png/hose.png"
import phone from "../assets/png/phone.png"
import message from "../assets/png/message.png"
import fb from "../assets/png/fb.png"
import ln from "../assets/png/in.png"
import SecondButton from "../common/components/button/SecondButton";


const Contacts = () => {
    return (
        <div className={s.mainBlock}>
            <div className={s.contactsBlock}>
                <div className={s.contants}>
                    <h2 className={s.title}>Contact address</h2>
                    <ItemContact icon={home} description={"Republic of Belarus, Minsk, st. Makaenka 12B"}/>
                    <ItemContact icon={phone} description={"+375(29) 356-23-08"}/>
                    <ItemContact icon={message} description={"nazaruk-dima@mail.ru"}/>
                    <div className={s.links}>
                        <ItemContact icon={fb}/>
                        <ItemContact icon={ln}/>
                        <ItemContact icon={fb}/>
                        <ItemContact icon={ln}/>
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