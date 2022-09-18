import React from 'react';
import s from "./Block.module.css"

export type BlockPropsType = {
    year: string
    place: string
    title: string
    description: string
}

const Block: React.FC<BlockPropsType> = ({year, place, title, description}) => {
    return (
        <div className={s.blockContainer}>
            <div>
                <div className={s.yearText}>
                    {year}
                </div>
                <div className={s.place}>
                    <h4>{place}</h4>
                </div>
                <div className={s.reset}></div>
            </div>
            <div className={s.descr}>
                <div><h4 className={s.text}>{title}</h4></div>
                <div className={s.description}>{description}</div>

            </div>

        </div>
    );
};

export default Block;