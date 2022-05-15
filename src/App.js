import './App.css';

import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';




function App() {

  return (
    <div className='app-container'  >
      <div className='navbar-container' >
        <Navbar />
      </div>

      <Routes>
        <Route path='/About' element={<About />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}
export default App;
