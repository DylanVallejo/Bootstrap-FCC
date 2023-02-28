import React from 'react'
import styles from './Proyects.module.scss'
// import styles from './Main.module.scss'


function Proyects() {
    return (
        <section className={` d-flex flex-column ${styles.proyectosRecientes} ${styles.seccionClara}`}>
            <h2 className={`${styles.seccionTitulo} ${styles.textoNegro}`}>Mis últimos proyectos </h2>
            <p className={`${styles.seccionDescripcion}`}>Estos son algunos proyectos que he creado recientemente 🦾</p>
            {/* galeria de proyectos */}
            <div className={`container text-center ${styles.proyectoContenedor} `}>
                <div className={`row`}>
                    {/* Proyecto 1 */}
                    <div className={`col-12 col-md-6 col-lg-4`}>
                        <div className={`${styles.proyecto}`}>
                            <img src={require('../resources/Playground.png')} alt="playground"/>
                            <div className={`${styles.overlay}`}>
                                <p>Mi playground es una recopilación de mini proyectos</p>
                                <div className={`${styles.iconosContenedores}`}>
                                    <a href='https://github.com/DylanVallejo/krugerPlayGround' target="_blank" rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className={`bi bi-github ${styles.svgLogo}`} viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                        </svg>
                                    </a>
                                    <a href='https://dylan-playground.vercel.app' target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`bi bi-laptop ${styles.svgLogo}`} viewBox="0 0 16 16">
                                        <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                                    </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                     {/* Proyecto 2 */}
                    <div className={`col-12 col-md-6 col-lg-4`}>
                        <div className={`${styles.proyecto}`}>
                            <img src={require('../resources/Playground.png')} alt="playground"/>
                            <div className={`${styles.overlay}`}>
                                <p>Mi playground es una recopilación de mini proyectos</p>
                                <div className={`${styles.iconosContenedores}`}>
                                    <a href='https://github.com/DylanVallejo/krugerPlayGround' target="_blank" rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className={`bi bi-github ${styles.svgLogo}`} viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                        </svg>
                                    </a>
                                    <a href='https://dylan-playground.vercel.app' target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`bi bi-laptop ${styles.svgLogo}`} viewBox="0 0 16 16">
                                        <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                                    </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Proyecto 3 */}
                    <div className={`col-12 col-md-6 col-lg-4`}>
                        <div className={`${styles.proyecto}`}>
                            <img src={require('../resources/Playground.png')} alt="playground"/>
                            <div className={`${styles.overlay}`}>
                                <p>Mi playground es una recopilación de mini proyectos</p>
                                <div className={`${styles.iconosContenedores}`}>
                                    <a href='https://github.com/DylanVallejo/krugerPlayGround' target="_blank" rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className={`bi bi-github ${styles.svgLogo}`} viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                        </svg>
                                    </a>
                                    <a href='https://dylan-playground.vercel.app' target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`bi bi-laptop ${styles.svgLogo}`} viewBox="0 0 16 16">
                                        <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                                    </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Proyecto 4 */}
                    <div className={`col-12 col-md-6 col-lg-4`}>
                        <div className={`${styles.proyecto}`}>
                            <img src={require('../resources/Playground.png')} alt="playground"/>
                            <div className={`${styles.overlay}`}>
                                <p>Mi playground es una recopilación de mini proyectos</p>
                                <div className={`${styles.iconosContenedores}`}>
                                    <a href='https://github.com/DylanVallejo/krugerPlayGround' target="_blank" rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className={`bi bi-github ${styles.svgLogo}`} viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                        </svg>
                                    </a>
                                    <a href='https://dylan-playground.vercel.app' target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`bi bi-laptop ${styles.svgLogo}`} viewBox="0 0 16 16">
                                        <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                                    </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Proyecto 5 */}
                    <div className={`col-12 col-md-6 col-lg-4`}>
                        <div className={`${styles.proyecto}`}>
                            <img src={require('../resources/Playground.png')} alt="playground"/>
                            <div className={`${styles.overlay}`}>
                                <p>Mi playground es una recopilación de mini proyectos</p>
                                <div className={`${styles.iconosContenedores}`}>
                                    <a href='https://github.com/DylanVallejo/krugerPlayGround' target="_blank" rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className={`bi bi-github ${styles.svgLogo}`} viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                        </svg>
                                    </a>
                                    <a href='https://dylan-playground.vercel.app' target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`bi bi-laptop ${styles.svgLogo}`} viewBox="0 0 16 16">
                                        <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                                    </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Proyecto 6 */}
                    <div className={`col-12 col-md-6 col-lg-4`}>
                        <div className={`${styles.proyecto}`}>
                            <img src={require('../resources/Playground.png')} alt="playground"/>
                            <div className={`${styles.overlay}`}>
                                <p>Mi playground es una recopilación de mini proyectos</p>
                                <div className={`${styles.iconosContenedores}`}>
                                    <a href='https://github.com/DylanVallejo/krugerPlayGround' target="_blank" rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className={`bi bi-github ${styles.svgLogo}`} viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                        </svg>
                                    </a>
                                    <a href='https://dylan-playground.vercel.app' target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`bi bi-laptop ${styles.svgLogo}`} viewBox="0 0 16 16">
                                        <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                                    </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Proyects