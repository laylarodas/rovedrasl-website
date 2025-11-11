import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-900 text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Columna 1: Sobre Rovedra */}
          <div>
            <h3 className="text-xl font-serif mb-4 text-white">Rovedra S.L.</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Especialistas en reformas integrales en Palma de Mallorca. 
              Más de 25 años transformando hogares con calidad y profesionalidad.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <svg className="w-4 h-4 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>100% Satisfacción garantizada</span>
            </div>
          </div>
          
          {/* Columna 2: Contacto */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contacto</h4>
            <div className="space-y-3 text-sm">
              <a 
                href="tel:+34665267715" 
                className="flex items-start gap-3 text-gray-400 hover:text-white transition group"
              >
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-brand-500 group-hover:text-brand-300 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+34 665 267 715</span>
              </a>
              
              <a 
                href="mailto:rovedra.sl@gmail.com" 
                className="flex items-start gap-3 text-gray-400 hover:text-white transition group"
              >
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-brand-500 group-hover:text-brand-300 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="break-all">rovedra.sl@gmail.com</span>
              </a>
              
              <div className="flex items-start gap-3 text-gray-400">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Palma de Mallorca<br />Islas Baleares, España</span>
              </div>
              
              <div className="flex items-start gap-3 text-gray-400 pt-2">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-medium text-white text-xs mb-1">Horario de Atención:</p>
                  <p>Lun - Vie: 9:00 - 18:00</p>
                  <p>Sáb: 10:00 - 14:00</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Columna 3: Enlaces Rápidos */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Enlaces Rápidos</h4>
            <div className="flex flex-col space-y-2.5 text-sm">
              <Link to="/" className="text-gray-400 hover:text-white transition inline-flex items-center gap-2 group">
                <svg className="w-4 h-4 text-brand-500 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Inicio
              </Link>
              <Link to="/services" className="text-gray-400 hover:text-white transition inline-flex items-center gap-2 group">
                <svg className="w-4 h-4 text-brand-500 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Servicios
              </Link>
              <Link to="/projects" className="text-gray-400 hover:text-white transition inline-flex items-center gap-2 group">
                <svg className="w-4 h-4 text-brand-500 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Proyectos
              </Link>
              <Link to="/about" className="text-gray-400 hover:text-white transition inline-flex items-center gap-2 group">
                <svg className="w-4 h-4 text-brand-500 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Nosotros
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition inline-flex items-center gap-2 group">
                <svg className="w-4 h-4 text-brand-500 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Contacto
              </Link>
            </div>
          </div>
          
          {/* Columna 4: Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <div className="flex flex-col space-y-2.5 text-sm mb-6">
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
            
            {/* CTA Presupuesto */}
            <Link 
              to="/contact"
              className="inline-block bg-brand-500 hover:bg-brand-500/90 text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-all hover:shadow-lg hover:shadow-brand-500/25"
            >
              Pedir Presupuesto
            </Link>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-brand-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Rovedra S.L. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
