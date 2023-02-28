import React from 'react'
import styles from './Proyects.module.scss'
// import styles from './Main.module.scss'


function Proyects() {
    return (
        <section className={` d-flex flex-column ${styles.proyectosRecientes} ${styles.seccionClara}`}>
            <h2 className={`${styles.seccionTitulo} ${styles.textoNegro}`}>Mis ultimos proyectos </h2>
            <p className={`${styles.seccionDescripcion}`}>Estos son algunos proyectos que he creado recientemente 🦾</p>
            {/* galeria de proyectos */}
            <div className={`container `}>
                <div className={`row`}>
                    <div className={`col-12 col-md-6 col-lg-4`}>
                        <div className={`${styles.proyecto}`}>
                            <img src={require('../resources/Playground.png')}/>
                            <div className={`${styles.overlay}`}>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Proyects