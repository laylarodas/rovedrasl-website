import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Check if user has already accepted/rejected cookies
    const cookieConsent = localStorage.getItem('rovedra-cookie-consent');
    
    if (!cookieConsent) {
      // Show banner after a small delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('rovedra-cookie-consent', 'accepted');
    closeBanner();
  };

  const handleReject = () => {
    localStorage.setItem('rovedra-cookie-consent', 'rejected');
    closeBanner();
  };

  const closeBanner = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 300); // Match animation duration
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transform transition-transform duration-300 ${
        isClosing ? 'translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="bg-white border-t-4 border-brand-500 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Cookie Icon + Text */}
            <div className="flex items-start gap-3 flex-1">
              {/* Cookie Icon */}
              <div className="flex-shrink-0 w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center">
                <svg 
                  className="w-6 h-6 text-brand-600" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM7 9a1 1 0 110-2 1 1 0 010 2zm3 4a1 1 0 110-2 1 1 0 010 2zm3-3a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-semibold text-brand-900 mb-1">
                  🍪 Usamos cookies
                </h3>
                <p className="text-sm text-brand-700">
                  Utilizamos cookies técnicas necesarias para el funcionamiento del sitio y cookies de análisis para mejorar tu experiencia. 
                  <Link 
                    to="/legal/cookies" 
                    className="text-brand-500 hover:underline font-medium ml-1"
                  >
                    Más información
                  </Link>
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={handleReject}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl border-2 border-brand-300 text-brand-900 hover:bg-brand-50 transition font-medium text-sm"
              >
                Rechazar
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-brand-500 text-white hover:bg-brand-600 transition font-medium text-sm shadow-md hover:shadow-lg"
              >
                Aceptar todas
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;

