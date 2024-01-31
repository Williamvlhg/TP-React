import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';  
import Avis from './pages/Avis';
import Contact from './pages/Contact';
import Mentions from './pages/Mentions';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/avis" element={<Avis />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions" element={<Mentions />} />

        </Routes>
        
        
        
        </BrowserRouter>
    </div>
  );
}

export default App;
