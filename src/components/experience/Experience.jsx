import React from 'react'
import styles from '../experience/Experience.module.scss'

function Experience() {
    return (
        <section className={`${styles.seccionClara} ${styles.experiencia}`}>
            <div className={`container text-center`}>
                <div className={`row`}>
                    {/* desarrollo web */}
                    <div className={`col-12 col-md-4 `}>
                        Desarrollo Web 
                    </div>
                    {/* articulos */}
                    <div className={`col-12 col-md-4 `}>
                        Articulos
                    </div>
                    {/* experiencia como estudiante */}
                    <div className={`col-12 col-md-4 `}>
                        Experiencia como estudiante
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience