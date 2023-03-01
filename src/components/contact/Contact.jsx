import React from 'react'
import styles from './Contact.module.scss'

function Contact() {
    return (
        <section id="contactos" className={`${styles.contacto} ${styles.seccionOscura}`}>
            <div className={`container ${styles.container}`}>
                <div className={`container text-center ${styles.rectangulo}  ${styles.container} d-flex justify-content-evenly`}>
                    <div className={`row ${styles.row}`}>
                        <div className={`col-12 col-md-4 ${styles.seccionTitulo}`}>
                            Hablemos!!
                        </div>
                        <div className={`col-12 col-md-4 ${styles.descripcion}`}>
                            Contáctame para iniciar tu proyecto de desarrollo web y haré que tu visión se vuelva realidad.
                        </div>
                        <div className={`col-12 col-md-4`}>
                            <a href='mailto:dylan1811vallejo@gmail.com'>
                                <button type='button'>
                                    Contacto 
                                    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-envelope-check-fill" viewBox="0 0 16 16">
                                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 4.697v4.974A4.491 4.491 0 0 0 12.5 8a4.49 4.49 0 0 0-1.965.45l-.338-.207L16 4.697Z"/>
                                        <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z"/>
                                    </svg>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact