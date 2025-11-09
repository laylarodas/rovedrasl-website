import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle body scroll lock and keyboard events
  useEffect(() => {
    if (isMenuOpen) {
      // Lock body scroll
      document.body.style.overflow = 'hidden';

      // Close on Escape key
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          closeMenu();
        }
      };

      document.addEventListener('keydown', handleEscape);
      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleEscape);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-brand-300/40">
      <div className="max-w-6xl mx-auto px-4 py-3 md:py-4 flex items-center justify-between gap-3">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2 min-w-0">
          <svg 
            className="h-7 w-7 md:h-8 md:w-8 flex-shrink-0" 
            viewBox="0 0 32 32" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect width="32" height="32" rx="6" fill="#C6421E"/>
            <path d="M10 10h5c3 0 5 2 5 5s-2 5-5 5h-2v6h-3V10z M13 13v4h2c1.5 0 2.5-1 2.5-2s-1-2-2.5-2h-2z" fill="white"/>
          </svg>
          <span className="font-serif text-xl md:text-2xl leading-tight truncate text-brand-900">
            Rovedra S.L.
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/services" className="nav-link">
            Servicios
          </Link>
          <Link to="/projects" className="nav-link">
            Proyectos
          </Link>
          <Link to="/about" className="nav-link">
            Nosotros
          </Link>
          <Link to="/contact" className="btn-primary">
            Contacto
          </Link>
        </nav>

        {/* Mobile burger */}
        <button
          onClick={toggleMenu}
          aria-label="Abrir menú"
          aria-expanded={isMenuOpen}
          className="md:hidden inline-flex items-center justify-center rounded-xl border border-brand-300/60 px-3 py-2 hover:bg-brand-100 transition-colors"
        >
          <span className="hamburger-icon" />
        </button>
      </div>

      {/* Mobile panel */}
      {isMenuOpen && (
        <div
          id="mobile-nav"
          className="md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
        >
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={closeMenu}
            aria-hidden="true"
          />
          
          {/* Menu panel */}
          <div className="absolute inset-x-0 top-full bg-white border-b border-brand-300/40 shadow-lg">
            <div className="max-w-6xl mx-auto px-4 py-4 grid gap-2">
              <Link to="/services" className="mobile-link" onClick={closeMenu}>
                Servicios
              </Link>
              <Link to="/projects" className="mobile-link" onClick={closeMenu}>
                Proyectos
              </Link>
              <Link to="/about" className="mobile-link" onClick={closeMenu}>
                Nosotros
              </Link>
              <Link to="/contact" className="btn-primary w-full text-center mt-2" onClick={closeMenu}>
                Contacto
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
