import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-4 pb-12 md:pt-8 md:pb-20 lg:pt-12 lg:pb-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-100 to-transparent opacity-50" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-300/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl" />
      </div>

      <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        {/* Left content */}
        <div className="space-y-6 md:space-y-8">
          {/* Badge - Mejorado con más contraste */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-brand-500/30 shadow-md">
            <span className="flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-brand-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            <span className="text-sm font-semibold text-brand-900">
              Presupuesto en 24 horas
            </span>
          </div>

          {/* Main heading - Optimizado para mobile */}
          <div className="space-y-3 md:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-brand-900 leading-tight">
              Reformas integrales en{' '}
              <span className="text-brand-500">Palma de Mallorca</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-brand-700 leading-relaxed max-w-xl">
              Cocinas, baños y obras completas con acabado profesional. 
              Transformamos tu hogar con calidad, experiencia y garantía.
            </p>
          </div>

          {/* CTAs - Full width en mobile */}
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-brand-500 text-white rounded-xl px-6 py-3.5 sm:py-4 font-medium hover:opacity-90 transition shadow-lg shadow-brand-500/25 w-full sm:w-auto"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Pedir presupuesto gratis
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center border-2 border-brand-300 text-brand-900 rounded-xl px-6 py-3.5 sm:py-4 font-medium hover:bg-white transition w-full sm:w-auto"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Ver proyectos
              </Link>
            </div>
            
            {/* Micro-textos de confianza */}
            <p className="text-xs sm:text-sm text-brand-700 text-center sm:text-left flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1">
              <span className="inline-flex items-center gap-1">
                <svg className="w-3.5 h-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Sin compromiso
              </span>
              <span className="inline-flex items-center gap-1">
                <svg className="w-3.5 h-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Respuesta en 24h
              </span>
              <span className="inline-flex items-center gap-1">
                <svg className="w-3.5 h-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                100% gratis
              </span>
            </p>
          </div>

          {/* Trust badges - Optimizado para mobile (2 columnas en mobile) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-brand-300/50">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-brand-900 mb-1">+15</div>
              <div className="text-xs sm:text-sm text-brand-700">Años experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-brand-900 mb-1">+500</div>
              <div className="text-xs sm:text-sm text-brand-700">Proyectos completados</div>
            </div>
            <div className="text-center col-span-2 sm:col-span-1">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-brand-900 mb-1">100%</div>
              <div className="text-xs sm:text-sm text-brand-700">Satisfacción garantizada</div>
            </div>
          </div>
        </div>

        {/* Right content - Image/Visual */}
        <div className="relative lg:h-[600px] flex items-center justify-center mt-8 lg:mt-0">
          {/* Image container */}
          <div className="relative w-full h-[350px] sm:h-[400px] lg:h-full rounded-2xl overflow-hidden shadow-2xl">
            {/* Placeholder with overlay - Replace with real image */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500 to-brand-700">
              <img
                src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&auto=format&fit=crop&q=80"
                alt="Reforma moderna en Palma de Mallorca"
                className="w-full h-full object-cover opacity-80 mix-blend-overlay"
                loading="lazy"
              />
            </div>
            
            {/* Floating cards - Ocultas en mobile y tablet, visibles en desktop */}
            <div className="hidden lg:block absolute top-6 right-6 bg-white rounded-xl shadow-xl p-4 max-w-[200px] backdrop-blur-sm bg-white/95">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-brand-900 text-sm">Garantía de calidad</div>
                  <div className="text-xs text-brand-700">Materiales premium</div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block absolute bottom-6 left-6 bg-white rounded-xl shadow-xl p-4 max-w-[200px] backdrop-blur-sm bg-white/95">
              <div className="flex items-center gap-3">
                <div className="bg-brand-100 rounded-full p-2 flex-shrink-0">
                  <svg className="w-5 h-5 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-brand-900 text-sm">Entrega puntual</div>
                  <div className="text-xs text-brand-700">Cumplimos plazos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

