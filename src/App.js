import './App.css';
import {  Routes, Route } from 'react-router-dom';
import RouteTitleUpdater from './Components/RouteTitleUpdater';
import Navbar from './Components/MyNavbar/Navbar';
import Home from './Components/MyHome/Home';
import About from './Components/MyAbout/About';
import ContactUs from './Components/MyContactUs/ContactUs';
import Privacy from './Components/MyPrivacy&Terms/Privacy';
import Services from './Components/MyServices/Services';
import File from './Components/VideoCarousel/VideoCraousel';


function App() {
  return (
    <>
    <Navbar/>
    <RouteTitleUpdater />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/service" element={<Services />} />
    </Routes>
    <File/>
    </>
  );
}

export default App;
