import React from 'react';
import s from "./Block.module.scss"

export type BlockPropsType = {
    year: string
    place: string
    title400: string
    title700: string
    description: string
}

const Block: React.FC<BlockPropsType> = ({year, place, title400, title700, description}) => {
    return (
        <div className={s.blockContainer}>
            <div>
                <div className={s.yearText}>
                    {year}
                </div>
                <div className={s.placeText}>
                    <h4>{place}</h4>
                </div>
            </div>
            <div className={s.mainInformation}>
                <div><h4 className={s.title400}>{title400}<span className={s.title700}>{title700}</span></h4></div>
                <div className={s.description}>{description}</div>

            </div>

        </div>
    );
};

export default Block;