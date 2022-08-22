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
            <div className={s.yearPlace}>{year}<br/>{place}</div>
            <div className={s.text}>{title}<br/> {description} </div>
        </div>
    );
};

export default Block;