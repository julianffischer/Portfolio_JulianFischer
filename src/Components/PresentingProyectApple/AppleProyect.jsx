import React from 'react'
import './Assets/Style.scss'
import apple from './Assets/images/AppleProyect.jpeg'
import ford from './Assets/images/Ford.jpeg'


export const AppleProyect = () => {
    return (
        
        <section className='container_project'>
            <hr/>
        <div className='container_proyect_apple'>
                <div className="container_proyect_apple-text">
                    <h4 className='container_proyect-tittle'>Proyecto Apple</h4>
                    <span className='container_proyect_apple-subText'>
                    Este es un proyecto en el cual creamos la simulación de un e-comerce como lo es Apple, tiene funciones las cuales te permiten
                    agregar productos a tu carrito, sacarlos, hacer un checkout, mostrarte un formulario y finalmente al realizar la compra 
                    mostrar un codigo aleatorio el cual te permite realizar un seguimiento de tu producto 
                    </span>
                </div>
                <img src={apple} alt="" className='container_proyect_apple-image' />
            </div>
            <hr />
        <div className='container_proyect_ford'>
                <div className="container_proyect_ford-text">
                    <h4 className='container_proyect-tittle'>Proyecto Ford</h4>
                    <span className='container_proyect_ford-subText'>
                    En esta ocasion creamos un e-commerce la cual consume una Api del dolar en tiempo real para poder actualizar el tiempo de los vehiculos, 
                    la misma esta compuesta por una interfaz muy sencilla la cual le va a permitir al usuario poder encontrar y adquirir un vehiculo rapidamente
                    </span>
                </div>
                <img src={ford} alt="" className='container_proyect_ford-image' />
            </div>
            <hr />
            
            </section>
    )
}
