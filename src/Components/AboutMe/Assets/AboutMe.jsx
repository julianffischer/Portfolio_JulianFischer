import React from 'react'
import './Assets/Style.scss'

export const AboutMe = () => {
    return (
    <section>
        <h1 className='tittle'> Sobre Mi </h1>
        <body className='aboutMeFlex'>
            <div className='description'>
            <h2 className='description__tittle'>Descripción:</h2>
                <span className='description__text'>
                    Mi Nombre es Julian Fischer, actualmente tengo 21 años, realicé un curso en CoderHouse durante 6 meses y
                    busco mi primera experiencia como desarrollador Front-end React Developer. 
                </span>
            </div>
            <div className='contact'>
            <h2 className='contact__tittle'>Contacto:</h2>
                <div className='contact__text'>
                    <div className='data'>Nombre: <span className='text-color'>Julian</span></div>
                    <div className='data'>Apellido:  <span className='text-color'>Fischer</span></div>
                    <div className='data'>Fecha de nacimiento: <span className='text-color'>09/02/2002</span></div>
                    <div className='data'>Telefono:  <span className='text-color'>341 606-4006</span></div>
                    <div className='data'>Email: <span className='text-color'>Fischerjulianroman@gmail.com</span></div>
                </div>
            </div>  
        </body>
    </section>
    )
}   
