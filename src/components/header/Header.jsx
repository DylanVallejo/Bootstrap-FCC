
import styles from './Header.module.scss';
// import { Link } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';


const Header = ( ) => { 
  return (
    <nav className={`navbar navbar-expand-md navbar-light ${styles.navbar}`}>
      <div className={`container-fluid`}>
        <button className={`navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className={`navbar-toggler-icon`}></span>
        </button>
        <div className={`collapse navbar-collapse ${styles.navbarCollapse}`} id="navbar-toggler">
          <a href="https://www.linkedin.com/in/dylan-vallejo/" target="_blank" rel="noopener noreferrer" className={`navbar-brand ${styles.navbarBrand}`} >
            <img  alt='Logo pagina web'  src={require('../resources/eva-l.png')  } className={  `${styles.imgLogo} `} />
          </a>
          <ul className={`navbar-nav d-flex justify-content-center align-items-center`}>
            <li className={`nav-item`}>
              <a className={`nav-link active`} aria-current="page" href='#sobreMi'>Sobre mí</a>
            </li>
            <li className={`nav-item`}>
              <a className={`nav-link`}  href='#proyectos'>Proyectos</a>
            </li>
            <li className={`nav-item`}>
              <a className={`nav-link`} href='#testimonios' >Testimonios</a>
            </li>
            <li className={`nav-item`}>
              <a className={`nav-link`}  href='#contactos'>Contactos</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Header;



