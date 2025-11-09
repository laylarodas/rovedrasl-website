import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-900 text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">Rovedra</h3>
            <p className="text-gray-400 text-sm">
              Reformas integrales en Palma de Mallorca
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Enlaces</h4>
            <div className="flex flex-col space-y-2 text-sm">
              <Link to="/" className="text-gray-400 hover:text-white transition">
                Inicio
              </Link>
              <Link to="/services" className="text-gray-400 hover:text-white transition">
                Servicios
              </Link>
              <Link to="/projects" className="text-gray-400 hover:text-white transition">
                Proyectos
              </Link>
              <Link to="/about" className="text-gray-400 hover:text-white transition">
                Nosotros
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition">
                Contacto
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <div className="flex flex-col space-y-2 text-sm">
              <Link to="/legal/legal-notice" className="text-gray-400 hover:text-white transition">
                Aviso Legal
              </Link>
              <Link to="/legal/privacy" className="text-gray-400 hover:text-white transition">
                Política de Privacidad
              </Link>
              <Link to="/legal/cookies" className="text-gray-400 hover:text-white transition">
                Política de Cookies
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-brand-700 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Rovedra. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
