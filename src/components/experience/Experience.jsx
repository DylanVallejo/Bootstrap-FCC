import React from 'react'
import styles from './Experience.module.scss'

function Experience() {
    return (
        <section className={`${styles.experiencia} ${styles.seccionClara} `}>
            <div className={`container text-center`}>
                <div className={`row ${styles.row}`}>
                    {/* desarrollo web */}
                    <div className={`col-12 col-md-4 ${styles.columna} `}>   
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-laptop" viewBox="0 0 16 16">
                            <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                        </svg>
                        <p className={`${styles.experienciaTitulo}`}>
                            Desarrollo Web 
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit.
                        </p>
                        <div className={`${styles.badgesContenedor}`}>
                            <span className={`badge bg-primary ${styles.badge}`}>CSS</span>
                            <span className={`badge bg-primary ${styles.badge}`}>HTML</span>
                            <span className={`badge bg-primary ${styles.badge}`}>JavaScript</span>
                            <span className={`badge bg-primary ${styles.badge}`}>React</span>
                            <span className={`badge bg-primary ${styles.badge}`}>Redux</span>
                            <span className={`badge bg-primary ${styles.badge}`}>Bootstrap</span>
                            <span className={`badge bg-primary ${styles.badge}`}>NodeJs</span>
                            <span className={`badge bg-primary ${styles.badge}`}>Java</span>
                            <span className={`badge bg-primary ${styles.badge}`}>Spring Boot</span>
                            <span className={`badge bg-primary ${styles.badge}`}>PostgreSql</span>
                            <span className={`badge bg-primary ${styles.badge}`}>Mongo</span>
                            <span className={`badge bg-primary ${styles.badge}`}>UML</span>
                            <span className={`badge bg-primary ${styles.badge}`}>AWS</span>
                            
                        </div>
                    </div>
                    {/* articulos */}
                    <div className={`col-12 col-md-4  ${styles.columna}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-laptop" viewBox="0 0 16 16">
                            <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                        </svg>
                        <p className={`${styles.experienciaTitulo}`}>
                            Articulos
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit.
                        </p>
                        <div className={`${styles.badgesContenedor}`}>
                            <span className={`badge bg-primary ${styles.badge}`}>Escribir</span>
                            <span className={`badge bg-primary ${styles.badge}`}>Editar</span>
                            <span className={`badge bg-primary ${styles.badge}`}>Blogs</span>

                        </div>
                    </div>
                    {/* experiencia como estudiante */}
                    <div className={`col-12 col-md-4 ${styles.columna} `}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-laptop" viewBox="0 0 16 16">
                            <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                        </svg>
                        <p className={`${styles.experienciaTitulo}`}>
                            Estudios
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit.
                        </p>
                        <div className={`${styles.badgesContenedor}`}>
                            <span className={`badge bg-primary ${styles.badge}`}>Alura</span>
                            <span className={`badge bg-primary ${styles.badge}`}>freeCodeCamp</span>
                            <span className={`badge bg-primary ${styles.badge}`}>Udemy</span>
                            <span className={`badge bg-primary ${styles.badge}`}>Udla Full Stack Development</span>
                            <span className={`badge bg-primary ${styles.badge}`}>MERN</span>
                            <span className={`badge bg-primary ${styles.badge}`}>Python</span>
                            <span className={`badge bg-primary ${styles.badge}`}>JavaScript</span>
                            <span className={`badge bg-primary ${styles.badge}`}>React</span>
                            <span className={`badge bg-primary ${styles.badge}`}>Java</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience