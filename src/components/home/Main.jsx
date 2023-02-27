import React from 'react'
import styles from './Main.module.scss'

function Main() {
  return (
    <section className={`${styles.hero} align-items-stretch`}>
      <div className={`${styles.heroPrincipal} d-flex flex-column justify-content-center align-items-center` }>
        <img src={require('../resources/dylan.jpeg')} className={`${styles.imagen}`} alt="Dylan Vallejo"/>
        <h1>
          Hola, soy Dylan Vallejo
        </h1>
        <h2>
          Full Stack developer 
        </h2>
      </div>
      <div className={` ${styles.heroInferior }`}>
        <img className={`${styles.heroInferiorImagen} img-fluid`} src='' alt='React , HTML CSS, JavaScript' />
      </div>
    </section>
  )
}

export default Main;