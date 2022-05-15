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
          {/* MADE TODAY - 10/05 */}
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


// MADE TODAY - 10/05
// Home Page
// const Home = () => (
//   <Fragment>
//     <h1>Home</h1>
//     <FakeText />
//   </Fragment>
// );
// // About Page
// const About = () => (
//   <Fragment>
//     <h1>About</h1>
//     <FakeText />
//   </Fragment>
// );
// // Contact Page
// const Contact = () => (
//   <Fragment>
//     <h1>Contact</h1>
//     <FakeText />
//   </Fragment>
// );

// const FakeText = () => (
//   <p>
//   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//   </p>
// )

export default App;
