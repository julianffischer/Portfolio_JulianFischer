import './Assets/Styles.scss'
import  arrow  from './Assets/Images/arrowhead-down-outline.svg'
export const Header = () => {
    return (
        <>
        <section className='container'>
            <div className='container_header'>
                <h1 className='tittle_presenting'>
                    <span>Hola</span> ,<br/> mi nombre es Julian! 
                </h1>
                <h6 className='tittle_Information'>
                    Te <span>invito <br/></span>a conocerme
                </h6>
            </div>
            <img src={arrow} alt="" className='image_arrow' />
        </section>

        <div className='skew'></div>
        </>
        )
    
}
