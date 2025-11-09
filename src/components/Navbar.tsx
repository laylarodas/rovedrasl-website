import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-brand-300/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-serif text-brand-900">
            Rovedra
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-brand-700 hover:text-brand-500 transition">
              Inicio
            </Link>
            <Link to="/services" className="text-brand-700 hover:text-brand-500 transition">
              Servicios
            </Link>
            <Link to="/projects" className="text-brand-700 hover:text-brand-500 transition">
              Proyectos
            </Link>
            <Link to="/about" className="text-brand-700 hover:text-brand-500 transition">
              Nosotros
            </Link>
            <Link 
              to="/contact" 
              className="bg-brand-500 text-white rounded-xl px-5 py-3 hover:opacity-90 transition"
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
