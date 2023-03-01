import React from 'react'
import styles from './Articles.module.scss'
function Articles() {
    return (
        <section className={`justify-content-start ${styles.articulos} `}>
            <h2 className={`${styles.seccionTitulo} ${styles.textoNegro}`}>Artículos</h2>
            <div className={`card ${styles.card}`} >
                <div className={`card-header ${styles.cardHeader}`}>
                    Blogs de interés
                </div>
                <ul className="list-group list-group-flush">
                    <a href='https://www.freecodecamp.org/news/technical-blogging-basics/' target="_blank" rel='noopneer noreferrer'>
                        <li className="list-group-item">Como crear un blog técnico para nuestros sitios web</li>
                    </a>
                    <a href='https://www.freecodecamp.org/news/how-to-build-your-own-blog-with-next-js-and-mdx/' target="_blank" rel='noopneer noreferrer'>
                        <li className="list-group-item">Crea un blog con Next.js</li>
                    </a>
                    {/* <a href='https://www.freecodecamp.org/news/tag/blog/' target="_blank" rel='noopneer noreferrer'>
                        <li className="list-group-item">De todo un poco</li>
                    </a> */}
                </ul>
            </div>
            
            {/* <button>
                Ver más artículos
            </button> */}
            
            <a href='https://www.freecodecamp.org/news/tag/blog/' target= "_blank" rel= "noopener noreferrer">
                <button type="button" class={`btn btn-info ${styles.btnInfo}`}>
                    Ver más artículos
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                    </svg>
                </button>
            </a>
            
        </section>
    )
}

export default Articles