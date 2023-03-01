
// import { BrowserRouter,Route,Routes } from 'react-router-dom';

import './App.scss';
import AboutMe from './components/aboutMe/AboutMe';
import Articles from './components/articles/Articles';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/home/Main';
import Proyects from './components/proyects/Proyects';
import Testimonies from './components/testimonies/Testimonies';
// import Header from './components/header/Header';
// import Header from './components/header/Header'


function App() {
  return (
    // <div className="container text-center">
    // <div className='container-fluid'>
    
    <div>
      <Header/>
      <Main/>
      <AboutMe/>
      <Experience/>
      <Proyects/>
      <Articles/>
      <Testimonies/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
