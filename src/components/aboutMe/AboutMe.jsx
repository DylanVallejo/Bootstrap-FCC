import React from 'react'
import styles from '../aboutMe/AboutMe.module.scss'

function AboutMe() {
    return (
        <section id="sobreMi" className={`${styles.sobreMi} ${styles.seccionOscura} `}>
            <div className={`${styles.contenedor}`}>
                <h2 className={`${styles.seccionTitulo} ${styles.textoBlanco}`}>Conoce más sobre mi 🤓</h2>
                <p className={`${styles.seccionTexto}`}>
                    Aficionado a la tecnología con continua formación en el desarrollo de software, adquiriendo las mejores habilidades competitivas. Me encanta cuidar los detalles y asegurarme de entregar un trabajo de alta calidad. Además, valoro mucho la importancia de formar amistades con personas geniales e innovadoras.
                </p>
            </div>
        </section>
    )
}

export default AboutMe