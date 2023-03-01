import React from 'react'
import styles from './Testimonies.module.scss'
import cliente1 from '../resources/cliente1.svg'
import cliente2 from '../resources/cliente2.svg'
import cliente3 from '../resources/cliente3.svg'


function Testimonies() {
    return (
        <section id="testimonios" className={`${styles.testimonios} ${styles.seccionClara}`}>
            <h2 className={`${styles.seccionTitulo}`}>Testimonios</h2>
            <h3 className={` ${styles.seccionDescripcion}`} >Testimonios de mis clientes..</h3>
            {/* carrusel */}
            
            <div id="testimoniosCarrusel" className={`carousel ${styles.carousel} carousel-dark slide `} data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className={`carousel-item  ${styles.carouselItem} active`}>
                        <div className={`container ${styles.container}`}>
                            
                            <img className={`${styles.testimonioImagen} rounded-circle`} src={cliente1} alt="Gino"/>
                            <p className={`${styles.testimonioTexto}`}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan tristique maximus. Praesent eu pharetra ex. Mauris fermentum lorem erat, eu fermentum metus hendrerit ac. 
                            </p>
                            <div className={`${styles.testimonioInfo}`}>
                                <p className={`${styles.cliente}`}>Gino</p>
                                <p className={`${styles.cargo}`}>Gerente de proyectos en Desarrollo Web</p>
                            </div>
                        </div>
                    </div>
                    <div className={`carousel-item  ${styles.carouselItem}`}>
                        <div className={`container ${styles.container}`}>
                            <img className={`${styles.testimonioImagen} rounded-circle`} src={cliente2} alt="Nora"/>
                            <p className={`${styles.testimonioTexto}`}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan tristique maximus.Mauris fermentum lorem erat, eu fermentum metus hendrerit ac. 
                            </p>
                            <div className={`${styles.testimonioInfo}`}>
                                <p className={`${styles.cliente}`}>Nora</p>
                                <p className={`${styles.cargo}`}>Gerente de DiseñaMiPáginaWeb</p>
                            </div>
                        </div>
                    </div>
                    <div className={`carousel-item  ${styles.carouselItem}`}>
                        <div className={`container ${styles.container}`}>
                            <img className={`${styles.testimonioImagen} rounded-circle`} src={cliente3} alt="Leonardo"/>
                            <p className={`${styles.testimonioTexto}`}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu pharetra ex. Mauris fermentum lorem erat, eu fermentum metus hendrerit ac. 
                            </p>
                            <div className={`${styles.testimonioInfo}`}>
                                <p className={`${styles.cliente}`}>Leonardo</p>
                                <p className={`${styles.cargo}`}>Director de AprendeAProgramar</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#testimoniosCarrusel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#testimoniosCarrusel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>
            
        </section>
    )
}

export default Testimonies