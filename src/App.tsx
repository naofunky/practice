import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './features/home/components/Home';
import About from './features/about/components/About';
import Contact from './features/contact/components/Contact';
import Notfound from './features/Notfound/components/Notfound';

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="contents">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
