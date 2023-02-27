
import styles from './Header.module.scss';
// import { Link } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';


const Header = ( ) => { 
  return (
    // <header id="headerSection" className={` ${styles.headerContainer}`}>
    //   <h1 className={`  ${styles.headerDevName}`}>
    //       {/* <HashLink to="#nameSection"> */}
    //         <img  alt='Logo'  src={require('../resources/eva-l.png')  } className={  `${styles.imgLogo} `} />
    //       {/* </HashLink>                 */}
    //   </h1>
    //   <nav className={ `${styles.referencesList}`}>
    //     <ul>
    //       <li>
    //         {/* <HashLink to="#aboutSection"> */}
    //           About
    //         {/* </HashLink> */}
    //       </li>
    //       <li>
    //         {/* <HashLink smooth to="#proyectSection"> */}
    //           Proyects
    //         {/* </HashLink> */}
    //       </li>
    //       <li>
    //         {/* <HashLink smooth to="#contactSection"> */}
    //           Contact
    //         {/* </HashLink> */}
    //       </li>
    //     </ul>
    //   </nav>
      
    <nav className={`navbar navbar-expand-md navbar-light ${styles.navabar}`}>
      <div className={`container-fluid`}>
        <button className={`navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className={`navbar-toggler-icon`}></span>
        </button>
        <div className={`collapse navbar-collapse ${styles.navbarCollapse}`} id="navbar-toggler">
          <a className={`navbar-brand ${styles.navbarBrand}`} >
            <img  alt='Logo pagina web'  src={require('../resources/eva-l.png')  } className={  `${styles.imgLogo} `} />
          </a>
          <ul className={`navbar-nav d-flex justify-content-center align-items-center`}>
            <li className={`nav-item`}>
              <a className={`nav-link active`} aria-current="page" href='#'>Sobre mí</a>
            </li>
            <li className={`nav-item`}>
              <a className={`nav-link`}  href='#'>Proyectos</a>
            </li>
            <li className={`nav-item`}>
              <a className={`nav-link`} href='#' >Testimonios</a>
            </li>
            <li className={`nav-item`}>
              <a className={`nav-link`}  href='#'>Contactos</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      
      
      
      
      
    // </header>
  );
}
export default Header;



