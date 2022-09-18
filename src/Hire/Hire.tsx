import React, {useEffect, useRef, useState} from 'react'
// @ts-ignore
import BIRDS from 'vanta/dist/vanta.fog.min'
// @ts-ignore
import * as THREE from 'three'
import s from './Hire.module.css'
import DistantWork from "../DistantWork/DistantWork";


export const Hire = () => {
    const [vantaEffect, setVantaEffect] = useState<any>(null)
    const myRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(BIRDS({
                el: myRef.current,
                THREE: THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                highlightColor: 0x7d7d7d,
                midtoneColor: 0x4d4d4d,
                lowlightColor: 0x7f7f7f,
                baseColor: 0xd2cdcd,
                zoom: 0.4,
                speed:0.8,

            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    return <div className={s.hire}>
        <div className={s.distanceWork}>
            <DistantWork/>
        </div>
        <div ref={myRef} className={s.vanta}></div>
    </div>
}
