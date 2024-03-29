//Stylesheets
import './App.css';
import './Pages/Home/Home.css';
import './Pages/Contact/Contact.css';
import './Pages/About/About.css';
import './Pages/Projects/Projects.css';
import './Pages/CV/CV.css'



//Components
import Navbar from './components/Navbar/Navbar';


//Pages
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';
import CV from './Pages/CV/CV';






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
        <Route path='/CV' element={<CV />} />
        <Route path='/' element={<Home />} />
      </Routes>

    </div>
  );
}
export default App;
