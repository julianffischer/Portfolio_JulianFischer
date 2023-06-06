import React from 'react'
import './Assets/Style.scss' 
import { AppleProyect } from '../PresentingProyectApple/AppleProyect'
import { AboutMe } from '../AboutMe/Assets/AboutMe'

export const Body = () => {
    return (
        <body>
            <h4 className='tittle_Proyect'>
                PROYECTOS
            </h4>
            <AppleProyect/>
            <AboutMe/>
        </body>
    )
}
