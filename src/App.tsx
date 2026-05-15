import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FullGallery from './pages/FullGallery';
import FullVideoGallery from './pages/FullVideoGallery';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<FullGallery />} />
        <Route path="/videos" element={<FullVideoGallery />} />
      </Routes>
    </Router>
  );
}
