
// import { BrowserRouter,Route,Routes } from 'react-router-dom';

import './App.scss';
import AboutMe from './components/aboutMe/AboutMe';
import Experience from './components/experience/Experience';
import Header from './components/header/Header';
import Main from './components/home/Main';
// import Header from './components/header/Header';
// import Header from './components/header/Header'


function App() {
  return (
    // <div className="container text-center">
    <div className='container-fluid'>
      <Header/>
      <Main/>
      <AboutMe/>
      <Experience/>
    </div>
  );
}

export default App;
