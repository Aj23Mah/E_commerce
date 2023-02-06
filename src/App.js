import './App.css';
import About from './Components/About';
import Brand from './Components/Brand';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Preview from './Components/Preview';

// import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/brand' element={<Brand />} />
        <Route path='/contact' element={<Contact />} />
      </Routes> */}

      <Navbar/>
      <Home/>
      <Brand/>
      <About/>
      <Contact/>
      <Preview/>
      <Footer/>
    </div>
  );
}

export default App;
