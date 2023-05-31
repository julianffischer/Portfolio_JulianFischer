import React from 'react'
import './Assets/Style.scss' 
import { AppleProyect } from '../PresentingProyectApple/AppleProyect'

export const Body = () => {
    return (
        <body>
            <h4 className='tittle_Proyect'>
                PROYECTOS
            </h4>
            <AppleProyect/>
        </body>
    )
}
