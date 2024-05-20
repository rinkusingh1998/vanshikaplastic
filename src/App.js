
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Header from './components/Header';
import './pages/style.css';
import './pages/responsive.css';
import Footer from './components/Footer';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import ScrollToTop from './components/Scrolltop';
import Eprservices from './pages/Eprservices';
import Hdpegranules from './pages/Hdpegranules';
import LLdpegranules from './pages/LLdpegranules';
import PPCPgranules from './pages/PPCPgranules';



function App() {
  return (
    <>
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" Component={Home}/>
    <Route path="/About" Component={Aboutus}/>
    <Route path="/Contact" Component={Contactus}/>
    <Route path="/Eprservices" Component={Eprservices}/>
    <Route path="/hdpegranules" Component={Hdpegranules}/>
    <Route path="/lldpegranules" Component={LLdpegranules}/>
    <Route path="/ppcpgranules" Component={PPCPgranules}/>
  </Routes>
  <Footer/>
  <ScrollToTop/>
  </BrowserRouter>
  
    </>
  );
}


export default App;
