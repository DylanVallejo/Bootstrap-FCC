import React from 'react'
import styles from '../aboutMe/AboutMe.module.scss'

function AboutMe() {
    return (
        <section className={`${styles.sobreMi} ${styles.seccionOscura} `}>
            <div className={`${styles.contenedor}`}>
                <h2 className={`${styles.seccionTitulo} ${styles.textoBlanco}`}>Conoce más sobre mi 🤓</h2>
                <p className={`${styles.seccionTexto}`}>
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Sed accumsan tristique maximus. 
                    Praesent eu pharetra ex. Mauris fermentum lorem erat, eu fermentum metus hendrerit ac.
                    Fusce non sollicitudin leo. Maecenas ornare dolor massa, ac mollis nisl rhoncus ac. 
                    Vestibulum tristique sem ut sodales molestie. 
                    Phasellus nec quam ac massa gravida pretium nec 
                    eget lacus. Pellentesque 
                    dignissim vitae massa quis laoreet. 
                    Aenean sed tincidunt augue.
                </p>
            </div>
        </section>
    )
}

export default AboutMe