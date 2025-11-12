import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { services } from '../data/services';

const Services = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // Scroll to service section if hash is present
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setActiveSection(id);
        }, 100);
      }
    }

    // Track active section on scroll
    const handleScroll = () => {
      const sections = services.map(s => document.getElementById(s.slug));
      const scrollPosition = window.scrollY + 300; // Ajustado para mejor detección
      
      let foundActive = false;

      for (const section of sections) {
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(section.id);
            foundActive = true;
            break;
          }
        }
      }

      // Si no hay ninguna sección visible, no marcar nada
      if (!foundActive) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToService = (slug: string) => {
    const element = document.getElementById(slug);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(slug);
    }
  };

  return (
    <>
      <SEO
        title="Servicios de Reformas en Palma 🛠️ Albañilería, Fontanería, Electricidad"
        description="⭐ Servicios profesionales de reformas en Palma de Mallorca: albañilería, carpintería, electricidad, fontanería y climatización. +25 años de experiencia. Presupuesto gratuito."
        canonical="https://reformasrovedra.es/services"
      />

      {/* Schema.org Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Rovedra S.L. - Servicios de Reformas",
          "image": "https://reformasrovedra.es/logo.png",
          "description": "Empresa de reformas en Palma de Mallorca especializada en albañilería, carpintería, electricidad, fontanería y climatización",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "C/ Gremi de Sabaters, 21 Polígono Son Castelló",
            "addressLocality": "Palma",
            "addressRegion": "Islas Baleares",
            "postalCode": "07009",
            "addressCountry": "ES"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 39.594444,
            "longitude": 2.672222
          },
          "telephone": "+34665267715",
          "email": "rovedra.sl@gmail.com",
          "url": "https://reformasrovedra.es",
          "priceRange": "€€",
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "08:00",
              "closes": "18:00"
            }
          ],
          "areaServed": {
            "@type": "City",
            "name": "Palma de Mallorca"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Servicios de Reformas",
            "itemListElement": services.map((service, index) => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": service.title,
                "description": service.description,
                "provider": {
                  "@type": "Organization",
                  "name": "Rovedra S.L."
                }
              },
              "position": index + 1
            }))
          }
        })}
      </script>

      {/* Sticky Navigation Menu */}
      <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-sm border-b border-brand-200 shadow-md mb-8 animate-fadeIn">
        <div className="max-w-7xl mx-auto px-4 relative">
          {/* Gradient indicators for scroll - Mobile only */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white/90 to-transparent pointer-events-none z-10 md:hidden"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white/90 to-transparent pointer-events-none z-10 md:hidden"></div>
          
          <nav className="flex md:justify-start overflow-x-auto py-2 gap-2 md:gap-3 scrollbar-hide">
            {services.map((service) => (
              <button
                key={service.slug}
                onClick={() => scrollToService(service.slug)}
                className={`flex md:flex-row items-center justify-center md:gap-2 rounded-lg transition-all duration-300 hover:scale-105 flex-shrink-0 ${
                  activeSection === service.slug
                    ? 'bg-brand-500 text-white shadow-lg'
                    : 'bg-brand-50 text-brand-700 hover:bg-brand-100'
                }`}
                title={service.title}
              >
                {/* Mobile: Solo icono */}
                <span className="md:hidden text-3xl p-2.5">{service.icon}</span>
                
                {/* Desktop: Icono + Texto */}
                <span className="hidden md:inline text-xl">{service.icon}</span>
                <span className="hidden md:inline font-medium px-3 py-2 whitespace-nowrap">{service.title}</span>
              </button>
            ))}
          </nav>
          
          {/* Scroll hint - Mobile only */}
          <div className="md:hidden text-center pb-1">
            <span className="text-brand-400 flex items-center justify-center gap-2 text-sm">
              <span>←</span>
              <span>→</span>
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-16">
        {/* Hero Section with Background */}
        <section className="relative text-center space-y-6 py-16 md:py-20 rounded-2xl overflow-hidden animate-fadeIn">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&auto=format&fit=crop)' }}
          >
            <div className="absolute inset-0 bg-brand-900/85"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
              Nuestros Servicios
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto px-4">
              Soluciones completas de <strong>albañilería, carpintería, electricidad, fontanería y climatización</strong> en Palma de Mallorca. 
              Más de 25 años de experiencia.
            </p>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="animate-slideUp">
          <div className="bg-gradient-to-br from-brand-50 to-white rounded-2xl border border-brand-300/50 p-8 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="group hover:scale-105 transition-all duration-300 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
                <div className="text-5xl mb-3">🏆</div>
                <div className="text-2xl font-bold text-brand-900">+25 años</div>
                <div className="text-sm text-brand-600">Experiencia</div>
              </div>
              
              <div className="group hover:scale-105 transition-all duration-300 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                <div className="text-5xl mb-3">⚡</div>
                <div className="text-2xl font-bold text-brand-900">24h</div>
                <div className="text-sm text-brand-600">Presupuesto</div>
              </div>
              
              <div className="group hover:scale-105 transition-all duration-300 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                <div className="text-5xl mb-3">✓</div>
                <div className="text-2xl font-bold text-brand-900">Garantía</div>
                <div className="text-sm text-brand-600">Oficial</div>
              </div>
              
              <div className="group hover:scale-105 transition-all duration-300 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                <div className="text-5xl mb-3">🔧</div>
                <div className="text-2xl font-bold text-brand-900">500+</div>
                <div className="text-sm text-brand-600">Proyectos</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services List */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <section
              key={service.slug}
              id={service.slug}
              className="scroll-mt-40 pt-8 animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Service Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 mb-4">
                  <span className="text-4xl animate-bounce-slow">{service.icon}</span>
                  <h2 className="text-3xl md:text-4xl font-serif text-brand-900">
                    {service.title}
                  </h2>
                </div>
                <p className="text-lg text-brand-700 max-w-2xl mx-auto">
                  {service.summary}
                </p>
              </div>

              {/* Service Content - Two Columns */}
              <div className="bg-white rounded-2xl border border-brand-300/50 overflow-hidden p-8 md:p-10 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className={`grid lg:grid-cols-2 gap-8 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Image & Gallery */}
                  <div className={`space-y-4 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                    {/* Main Image */}
                    {service.image && (
                      <div className="rounded-xl overflow-hidden shadow-lg group">
                        <img
                          src={service.image}
                          alt={`${service.title} profesional en Palma de Mallorca - Rovedra S.L.`}
                          loading="lazy"
                          className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    
                    {/* Gallery */}
                    {service.gallery && service.gallery.length > 0 && (
                      <div className="grid grid-cols-3 gap-3">
                        {service.gallery.map((img, idx) => (
                          <div 
                            key={idx} 
                            className="rounded-lg overflow-hidden shadow-md group cursor-pointer hover:scale-105 transition-transform duration-300"
                            style={{ animationDelay: `${idx * 0.1}s` }}
                          >
                            <img
                              src={img}
                              alt={`${service.title} ejemplo ${idx + 1}`}
                              loading="lazy"
                              className="w-full aspect-square object-cover group-hover:brightness-110 transition-all duration-300"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                    {/* Description */}
                    <div>
                      <h3 className="text-xl font-semibold text-brand-900 mb-3">
                        Servicio Profesional de {service.title} en Palma
                      </h3>
                      <p className="text-brand-700 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="text-lg font-semibold text-brand-900 mb-3">
                        ¿Qué incluye?
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li 
                            key={idx} 
                            className="flex items-start gap-2 group hover:translate-x-1 transition-transform duration-200"
                          >
                            <span className="text-brand-500 mt-1 flex-shrink-0 group-hover:scale-125 transition-transform">✓</span>
                            <span className="text-brand-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <Link
                        to="/contact"
                        className="inline-block bg-brand-500 text-white rounded-xl px-6 py-3 hover:bg-brand-600 hover:shadow-lg transition-all duration-300 hover:scale-105 text-center font-semibold"
                      >
                        Solicitar Presupuesto
                      </Link>
                      <a
                        href="tel:+34665267715"
                        className="inline-block border border-brand-300 text-brand-700 rounded-xl px-6 py-3 hover:bg-brand-50 hover:border-brand-400 transition-all duration-300 hover:scale-105 text-center font-semibold"
                      >
                        Llamar al 665 267 715
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Why Choose Us - Enhanced */}
        <section className="py-12 animate-fadeIn">
          <div className="rounded-2xl bg-white border border-brand-300/50 p-8 md:p-10 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-900 text-center mb-8">
              ¿Por qué elegir Rovedra S.L.?
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-brand-50 border border-brand-200 rounded-xl p-6 hover:bg-brand-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-3">📋</div>
                <h3 className="font-bold text-lg mb-2 text-brand-900">Electricistas Autorizados</h3>
                <p className="text-brand-700 text-sm">Boletines y certificados oficiales válidos en Baleares</p>
              </div>
              
              <div className="bg-brand-50 border border-brand-200 rounded-xl p-6 hover:bg-brand-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-3">🏠</div>
                <h3 className="font-bold text-lg mb-2 text-brand-900">Reformas Integrales</h3>
                <p className="text-brand-700 text-sm">Coordinamos todos los oficios en un solo proyecto</p>
              </div>
              
              <div className="bg-brand-50 border border-brand-200 rounded-xl p-6 hover:bg-brand-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-3">⏰</div>
                <h3 className="font-bold text-lg mb-2 text-brand-900">Servicio Urgente 24h</h3>
                <p className="text-brand-700 text-sm">Fontanería y electricidad disponible para emergencias</p>
              </div>
              
              <div className="bg-brand-50 border border-brand-200 rounded-xl p-6 hover:bg-brand-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-3">🔨</div>
                <h3 className="font-bold text-lg mb-2 text-brand-900">Taller Propio</h3>
                <p className="text-brand-700 text-sm">Carpintería personalizada fabricada en nuestras instalaciones</p>
              </div>
              
              <div className="bg-brand-50 border border-brand-200 rounded-xl p-6 hover:bg-brand-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-3">❄️</div>
                <h3 className="font-bold text-lg mb-2 text-brand-900">Marcas Líderes</h3>
                <p className="text-brand-700 text-sm">Equipos de climatización de máxima eficiencia energética</p>
              </div>
              
              <div className="bg-brand-50 border border-brand-200 rounded-xl p-6 hover:bg-brand-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-3">✓</div>
                <h3 className="font-bold text-lg mb-2 text-brand-900">Garantía Total</h3>
                <p className="text-brand-700 text-sm">Materiales de primera calidad en todos nuestros trabajos</p>
              </div>
            </div>

            <p className="text-lg text-center text-brand-700 max-w-2xl mx-auto">
              Empresa familiar con más de 25 años en Palma de Mallorca. Cumplimos plazos, 
              ofrecemos atención personalizada y garantizamos tu satisfacción.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="space-y-8 animate-fadeIn">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-900 mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-brand-700">
              Resolvemos las dudas más comunes sobre nuestros servicios
            </p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              {
                question: '¿Ofrecen presupuesto gratuito?',
                answer: 'Sí, todos nuestros presupuestos son completamente gratuitos y sin compromiso. Nos desplazamos a tu domicilio en Palma de Mallorca para evaluar el trabajo y ofrecerte un presupuesto detallado en 24 horas.'
              },
              {
                question: '¿Cuánto tiempo tardan en comenzar una reforma?',
                answer: 'Dependiendo de la disponibilidad y tipo de reforma, podemos comenzar en pocos días. Para trabajos urgentes de fontanería o electricidad, ofrecemos servicio de emergencia 24 horas.'
              },
              {
                question: '¿Trabajan en toda Palma de Mallorca?',
                answer: 'Sí, realizamos servicios de reformas en toda Palma de Mallorca y alrededores: centro histórico, Son Vida, Portixol, El Terreno, Santa Catalina, y todas las zonas de la ciudad.'
              },
              {
                question: '¿Qué garantía ofrecen en sus trabajos?',
                answer: 'Todos nuestros trabajos están garantizados. Utilizamos materiales de primera calidad de marcas reconocidas y nuestros profesionales están certificados en cada especialidad.'
              },
              {
                question: '¿Puedo contratar varios servicios a la vez?',
                answer: 'Por supuesto. Ofrecemos <a href="/about" class="text-brand-500 hover:underline">reformas integrales</a> donde coordinamos todos los oficios para completar tu proyecto de forma eficiente.'
              },
              {
                question: '¿Emiten certificados y boletines oficiales?',
                answer: 'Sí, nuestros electricistas están autorizados para emitir boletines eléctricos y certificados oficiales que tienen validez en las Islas Baleares.'
              }
            ].map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-xl border border-brand-300/30 overflow-hidden group hover:border-brand-400 transition-all duration-300 hover:shadow-lg"
              >
                <summary className="cursor-pointer p-6 font-semibold text-brand-900 flex items-center justify-between hover:bg-brand-50 transition">
                  <span>{faq.question}</span>
                  <svg className="w-5 h-5 text-brand-500 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-brand-700 leading-relaxed animate-fadeIn">
                  <p dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 animate-fadeIn">
          <div className="rounded-2xl bg-white border border-brand-300/50 p-10 md:p-12 text-center shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-900 mb-4">
              ¿Listo para empezar tu reforma?
            </h2>
            <p className="text-lg text-brand-700 mb-8 max-w-2xl mx-auto">
              Más de 25 años de experiencia en Palma de Mallorca. Contacta con nosotros y recibe un presupuesto personalizado en menos de 24 horas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-block bg-brand-500 text-white rounded-xl px-8 py-4 hover:bg-brand-600 hover:shadow-lg transition-all duration-300 hover:scale-105 font-semibold"
              >
                Pedir Presupuesto Gratis
              </Link>
              <a
                href="tel:+34665267715"
                className="inline-flex items-center justify-center gap-2 border border-brand-300 text-brand-700 rounded-xl px-8 py-4 hover:bg-brand-50 hover:border-brand-400 transition-all duration-300 hover:scale-105 font-semibold"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +34 665 267 715
              </a>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounceSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-bounce-slow {
          animation: bounceSlow 2s ease-in-out infinite;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
};

export default Services;
