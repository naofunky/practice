import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './features/pages/home/components/Home';
import About from './features/pages/about/components/About';
import Contact from './features/pages/contact/components/Contact';
import Notfound from './features/Notfound/components/Notfound';
import Work from './features/pages/work/components/Work';

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="contents">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/work" element={<Work />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
