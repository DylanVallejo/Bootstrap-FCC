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
                    {/* Proyecto 1 playground */}
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
                    {/* Proyecto 2 todo list*/}
                    <div className={`col-12 col-md-6 col-lg-4`}>
                        <div className={`${styles.proyecto}`}>
                            <img src={require('../resources/todo.png')} alt="playground"/>
                            <div className={`${styles.overlay}`}>
                                <p>To do List 📝</p>
                                <div className={`${styles.iconosContenedores}`}>
                                    <a href='https://github.com/DylanVallejo/kruger-to-do-list' target="_blank" rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className={`bi bi-github ${styles.svgLogo}`} viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                        </svg>
                                    </a>
                                    <a href='https://kruger-to-do-list.netlify.app' target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`bi bi-laptop ${styles.svgLogo}`} viewBox="0 0 16 16">
                                        <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                                    </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Proyecto 3 clima */}
                    <div className={`col-12 col-md-6 col-lg-4`}>
                        <div className={`${styles.proyecto}`}>
                            <img src={require('../resources/weather.png')} alt="playground"/>
                            <div className={`${styles.overlay}`}>
                                <p>Descubre cómo esta el clima!! 😎</p>
                                <div className={`${styles.iconosContenedores}`}>
                                    <a href='https://github.com/DylanVallejo/kruger-weather-app' target="_blank" rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className={`bi bi-github ${styles.svgLogo}`} viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                        </svg>
                                    </a>
                                    <a href='https://kruger-weather-app.netlify.app' target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`bi bi-laptop ${styles.svgLogo}`} viewBox="0 0 16 16">
                                        <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                                    </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Proyecto 4 libreria */}
                    <div className={`col-12 col-md-6 col-lg-4`}>
                        <div className={`${styles.proyecto}`}>
                            <img src={require('../resources/library.png')} alt="playground"/>
                            <div className={`${styles.overlay}`}>
                                <p>Crea tu propia librería 📚</p>
                                <div className={`${styles.iconosContenedores}`}>
                                    <a href='https://github.com/DylanVallejo/kruger-library' target="_blank" rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className={`bi bi-github ${styles.svgLogo}`} viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                        </svg>
                                    </a>
                                    <a href='https://kruger-library.netlify.app' target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`bi bi-laptop ${styles.svgLogo}`} viewBox="0 0 16 16">
                                        <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                                    </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Proyecto 5  buscador*/}
                    <div className={`col-12 col-md-6 col-lg-4`}>
                        <div className={`${styles.proyecto}`}>
                            <img src={require('../resources/buscador.png')} alt="playground"/>
                            <div className={`${styles.overlay}`}>
                                <p>Busca la información que necesitas 🔍</p>
                                <div className={`${styles.iconosContenedores}`}>
                                    <a href='https://github.com/DylanVallejo/kruger-buscador' target="_blank" rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className={`bi bi-github ${styles.svgLogo}`} viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                        </svg>
                                    </a>
                                    <a href='https://effervescent-sprite-38d5d7.netlify.app' target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`bi bi-laptop ${styles.svgLogo}`} viewBox="0 0 16 16">
                                        <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                                    </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Proyecto 6 emoji app */}
                    <div className={`col-12 col-md-6 col-lg-4`}>
                        <div className={`${styles.proyecto}`}>
                            <img src={require('../resources/emoji.png')} alt="playground"/>
                            <div className={`${styles.overlay}`}>
                                <p>Que emoji necesitas? 🤔</p>
                                <div className={`${styles.iconosContenedores}`}>
                                    <a href='https://github.com/DylanVallejo/kruger-emoji-app' target="_blank" rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className={`bi bi-github ${styles.svgLogo}`} viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                        </svg>
                                    </a>
                                    <a href='https://graceful-sfogliatella-4c81c5.netlify.app' target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`bi bi-laptop ${styles.svgLogo}`} viewBox="0 0 16 16">
                                        <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                                    </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Proyecto 7 Grupal nasa*/}
                    <div className={`col-12 col-md-6 col-lg-4`}>
                        <div className={`${styles.proyecto}`}>
                            <img src={require('../resources/stars.png')} alt="playground"/>
                            <div className={`${styles.overlay}`}>
                                <p>Descubre tu estrella 💫</p>
                                <div className={`${styles.iconosContenedores}`}>
                                    <a href='https://github.com/DylanVallejo/kruger-grupal-project' target="_blank" rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className={`bi bi-github ${styles.svgLogo}`} viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                        </svg>
                                    </a>
                                    <a href='https://kruger-grupal-project.vercel.app' target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`bi bi-laptop ${styles.svgLogo}`} viewBox="0 0 16 16">
                                        <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                                    </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Proyecto 8 fast food*/}
                    <div className={`col-12 col-md-6 col-lg-4`}>
                        <div className={`${styles.proyecto}`}>
                            <img src={require('../resources/fastfood.png')} alt="playground"/>
                            <div className={`${styles.overlay}`}>
                                <p>Con hambre? 🍔</p>
                                <div className={`${styles.iconosContenedores}`}>
                                    <a href='https://github.com/DylanVallejo/ecommerce-food-front' target="_blank" rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className={`bi bi-github ${styles.svgLogo}`} viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                        </svg>
                                    </a>
                                    <a href='https://kruger-fast-food-lu1v1syls-dylanvallejo.vercel.app' target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`bi bi-laptop ${styles.svgLogo}`} viewBox="0 0 16 16">
                                        <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                                    </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Proyecto 9 encriptador*/}
                    <div className={`col-12 col-md-6 col-lg-4`}>
                        <div className={`${styles.proyecto}`}>
                            <img src={require('../resources/encriptador.png')} alt="playground"/>
                            <div className={`${styles.overlay}`}>
                                <p>Encripta texto con tus amigos 🙈</p>
                                <div className={`${styles.iconosContenedores}`}>
                                    <a href='https://github.com/DylanVallejo/desencriptador-alura' target="_blank" rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className={`bi bi-github ${styles.svgLogo}`} viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                        </svg>
                                    </a>
                                    <a href='https://dylanvallejo.github.io/desencriptador-alura/' target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`bi bi-laptop ${styles.svgLogo}`} viewBox="0 0 16 16">
                                        <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                                    </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Proyecto 10 pokedex front*/}
                    <div className={`col-12 col-md-6 col-lg-4`}>
                        <div className={`${styles.proyecto}`}>
                            <img src={require('../resources/pokedex.png')} alt="playground"/>
                            <div className={`${styles.overlay}`}>
                                <p>Escoge tu pokemon favorito! 🐲 </p>
                                <div className={`${styles.iconosContenedores}`}>
                                    <a href='https://github.com/DylanVallejo/pokedex' target="_blank" rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className={`bi bi-github ${styles.svgLogo}`} viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                        </svg>
                                    </a>
                                    <a href='https://dylanvallejo.github.io/pokedex/' target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`bi bi-laptop ${styles.svgLogo}`} viewBox="0 0 16 16">
                                        <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                                    </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Proyecto 11 max score*/}
                    <div className={`col-12 col-md-6 col-lg-4`}>
                        <div className={`${styles.proyecto}`}>
                            <img src={require('../resources/max-score.png')} alt="playground"/>
                            <div className={`${styles.overlay}`}>
                                <p>Obten 20 puntos y gana! 🥳 </p>
                                <div className={`${styles.iconosContenedores}`}>
                                    <a href='https://github.com/DylanVallejo/MaxScoreGame' target="_blank" rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className={`bi bi-github ${styles.svgLogo}`} viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                        </svg>
                                    </a>
                                    <a href='https://dylanvallejo.github.io/MaxScoreGame/' target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`bi bi-laptop ${styles.svgLogo}`} viewBox="0 0 16 16">
                                        <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                                    </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Proyecto 12 adivina el numero*/}
                    <div className={`col-12 col-md-6 col-lg-4`}>
                        <div className={`${styles.proyecto}`}>
                            <img src={require('../resources/adivina.png')} alt="playground"/>
                            <div className={`${styles.overlay}`}>
                                <p>Acierta el número! 🕵️‍♂️ </p>
                                <div className={`${styles.iconosContenedores}`}>
                                    <a href='https://github.com/DylanVallejo/GuessNumbers' target="_blank" rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className={`bi bi-github ${styles.svgLogo}`} viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                        </svg>
                                    </a>
                                    <a href='https://dylanvallejo.github.io/GuessNumbers/' target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`bi bi-laptop ${styles.svgLogo}`} viewBox="0 0 16 16">
                                        <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                                    </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Proyecto 13 calculadora*/}
                    <div className={`col-12 col-md-6 col-lg-4`}>
                        <div className={`${styles.proyecto}`}>
                            <img src={require('../resources/calculadora.png')} alt="playground"/>
                            <div className={`${styles.overlay}`}>
                                <p>Haz tus cálculos 🧮 </p>
                                <div className={`${styles.iconosContenedores}`}>
                                    <a href='https://github.com/DylanVallejo/basic-calculator' target="_blank" rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className={`bi bi-github ${styles.svgLogo}`} viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                        </svg>
                                    </a>
                                    <a href='https://dylanvallejo.github.io/basic-calculator/' target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`bi bi-laptop ${styles.svgLogo}`} viewBox="0 0 16 16">
                                        <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                                    </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Proyecto 14 gift app*/}
                    <div className={`col-12 col-md-6 col-lg-4`}>
                        <div className={`${styles.proyecto}`}>
                            <img src={require('../resources/gift.png')} alt="playground"/>
                            <div className={`${styles.overlay}`}>
                                <p>Busca tus gifs favoritos! 😸 </p>
                                <div className={`${styles.iconosContenedores}`}>
                                    <a href='https://github.com/DylanVallejo/react-gift-app' target="_blank" rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className={`bi bi-github ${styles.svgLogo}`} viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                        </svg>
                                    </a>
                                    <a href='https://dylanvallejo.github.io/react-gift-app/' target="_blank" rel="noopener noreferrer">
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