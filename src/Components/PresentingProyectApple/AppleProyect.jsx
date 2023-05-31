import React from 'react'
import './Assets/Style.scss'
import apple from './Assets/images/AppleProyect.jpeg'

export const AppleProyect = () => {
    return (
        <section className='container_proyect_apple'>
                <div className="container_proyect_apple-text">
                    <h4 className='container_proyect-tittle'>Proyecto Apple</h4>
                    Este es un proyecto en el cual creamos la simulación de un e-comerce como lo es Apple, tiene funciones las cuales te permiten
                    agregar productos a tu carrito, sacarlos, hacer un checkout, mostrarte un formulario y finalmente al realizar la compra 
                    mostrar un codigo aleatorio el cual te permite realizar un seguimiento de tu producto 
                </div>
                <img src={apple} alt="" className='container_proyect_apple-image' />
            </section>
    )
}
