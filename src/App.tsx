import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './features/pages/home/components/Home';
import About from './features/pages/about/components/About';
import Contact from './features/pages/contact/components/Contact';
import Notfound from './features/Notfound/components/Notfound';
import Work from './features/pages/work/components/Work';
import { Search } from './features/pages/search/components/Search';
import Policy from './features/pages/policy/components/Policy';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="wrapper">
        <div className="contents">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/work" element={<Work />} />
            <Route path="/search" element={<Search />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
