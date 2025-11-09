import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const links = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/services', label: 'Servicios' },
  { to: '/projects', label: 'Proyectos' },
  { to: '/about', label: 'Nosotros' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [loc]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // Lock body scroll when open
  useEffect(() => {
    if (open) document.body.classList.add('overflow-hidden');
    else document.body.classList.remove('overflow-hidden');
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-brand-300/40">
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
            <rect width="32" height="32" rx="6" fill="#C6421E" />
            <path
              d="M10 10h5c3 0 5 2 5 5s-2 5-5 5h-2v6h-3V10z M13 13v4h2c1.5 0 2.5-1 2.5-2s-1-2-2.5-2h-2z"
              fill="white"
            />
          </svg>
          <span className="font-serif text-xl md:text-2xl leading-tight truncate">
            Rovedra S.L.
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                isActive
                  ? 'text-brand-900 font-medium'
                  : 'text-brand-900/80 hover:text-brand-900 transition'
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="px-4 py-2 rounded-xl bg-brand-500 text-white hover:opacity-90"
          >
            Contacto
          </Link>
        </nav>

        {/* Mobile burger */}
        <button
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-xl border border-brand-300/60 p-2"
        >
          {/* Animated hamburger → X */}
          <svg
            className="h-6 w-6 text-brand-900"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path
              className={
                open
                  ? 'opacity-0 transition-all duration-200'
                  : 'transition-all duration-200'
              }
              d="M4 7h16"
            />
            <path
              className={
                open
                  ? 'translate-y-0 rotate-45 transition-all duration-200 origin-center'
                  : 'transition-all duration-200'
              }
              d="M4 12h16"
              style={{ transformOrigin: '12px 12px' }}
            />
            <path
              className={
                open
                  ? 'opacity-0 transition-all duration-200'
                  : 'transition-all duration-200'
              }
              d="M4 17h16"
            />
            <path
              className={
                open
                  ? 'transition-all duration-200'
                  : 'opacity-0 transition-all duration-200'
              }
              d="M6 6l12 12"
            />
            <path
              className={
                open
                  ? 'transition-all duration-200'
                  : 'opacity-0 transition-all duration-200'
              }
              d="M18 6L6 18"
            />
          </svg>
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          {/* Sheet */}
          <div
            role="dialog"
            aria-modal="true"
            className="absolute inset-x-0 top-full bg-white border-b border-brand-300/40 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-w-6xl mx-auto px-4 py-4 grid gap-2">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.end}
                  className="px-2 py-2 text-lg text-brand-900/90 rounded-lg hover:bg-brand-100"
                >
                  {l.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                className="mt-2 px-4 py-3 rounded-xl bg-brand-500 text-white text-center hover:opacity-90"
              >
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
