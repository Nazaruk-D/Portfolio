import React, {useEffect, useRef, useState} from 'react'
// @ts-ignore
import BIRDS from 'vanta/dist/vanta.clouds.min'
// @ts-ignore
import * as THREE from 'three'
import s from './Vanta.module.css'
import Home from "../../Home/Home";


export const Vanta = () => {
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
                minWidth: 200.00
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    return <>
        <div ref={myRef} className={s.vanta}>
            Foreground content goes here
        </div>
    </>
}
