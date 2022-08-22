import React from 'react';
import s from "./Map.module.css"

const Map = () => {
    return (
        <div className={s.mapContainer}>

            <iframe className={s.map}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7686.010805115432!2d27.620608459853656!3d53.92346860731758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcefcfcb3ebdf%3A0x24224706bf5d6ae9!2svulica%20Makajonka%2012%2C%20Minsk!5e0!3m2!1sen!2sby!4v1661183979377!5m2!1sen!2sby"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
};

export default Map;