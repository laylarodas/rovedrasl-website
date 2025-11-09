import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/legal/Privacy';
import LegalNotice from './pages/legal/LegalNotice';
import Cookies from './pages/legal/Cookies';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="legal/privacy" element={<Privacy />} />
          <Route path="legal/legal-notice" element={<LegalNotice />} />
          <Route path="legal/cookies" element={<Cookies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
