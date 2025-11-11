import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const About = () => {
  return (
    <>
      <SEO
        title="Sobre Rovedra S.L. | 25 Años en Reformas Integrales Palma de Mallorca"
        description="Empresa de reformas integrales en Palma de Mallorca con +25 años de experiencia. +500 proyectos completados. Equipo profesional completo: electricistas, fontaneros, albañiles. Presupuesto en 24h ⭐"
        canonical="https://reformasrovedra.es/about"
      />
      
      {/* Schema.org LocalBusiness - SEO Local */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://reformasrovedra.es",
          "name": "Rovedra S.L.",
          "legalName": "Rovedra Sociedad Limitada",
          "description": "Empresa líder en reformas integrales en Palma de Mallorca con más de 25 años de experiencia. Especialistas en reformas de cocinas, baños y reformas completas.",
          "url": "https://reformasrovedra.es",
          "logo": "https://reformasrovedra.es/logo.svg",
          "image": "https://reformasrovedra.es/og-default.jpg",
          "telephone": "+34665267715",
          "email": "rovedra.sl@gmail.com",
          "priceRange": "€€",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Palma de Mallorca",
            "addressRegion": "Islas Baleares",
            "addressCountry": "ES"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "39.5696",
            "longitude": "2.6502"
          },
          "areaServed": [
            {
              "@type": "City",
              "name": "Palma de Mallorca"
            },
            {
              "@type": "City",
              "name": "Mallorca"
            }
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Servicios de Reformas",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Reformas Integrales",
                  "description": "Reformas integrales completas en Palma de Mallorca"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Reformas de Cocinas",
                  "description": "Reformas de cocinas completas con diseño moderno"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Reformas de Baños",
                  "description": "Reformas de baños completas con materiales de calidad"
                }
              }
            ]
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "3"
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "09:00",
              "closes": "18:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Saturday",
              "opens": "10:00",
              "closes": "14:00"
            }
          ],
          "sameAs": [
            "https://reformasrovedra.es"
          ]
        })}
      </script>

      <div className="space-y-16 md:space-y-20">
        {/* Hero Section - Sin imagen */}
        <section className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-900 mb-6">
            Empresa Líder en Reformas en <span className="text-brand-500">Palma de Mallorca</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-700 leading-relaxed">
            Más de 25 años transformando hogares con calidad y profesionalidad
          </p>
        </section>

        {/* Introducción con Fotos de Socios */}
        <section className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Fotos de los Socios Fundadores */}
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/images/socios-fundadores.jpg" 
                  alt="Socios fundadores de Rovedra - Empresa líder en reformas Palma de Mallorca" 
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden bg-brand-100 p-12 text-center">
                  <svg className="w-20 h-20 mx-auto text-brand-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <p className="text-brand-700 text-sm">Coloca aquí la foto de los socios fundadores</p>
                  <p className="text-brand-700 text-xs mt-2">
                    <code className="bg-white px-2 py-1 rounded">public/images/socios-fundadores.jpg</code>
                  </p>
                </div>
              </div>
              <p className="text-center text-sm text-brand-700 italic">
                Los socios fundadores que iniciaron Rovedra S.L.
              </p>
            </div>

            {/* Texto de Presentación */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-serif text-brand-900 mb-4">
                  25 Años de Experiencia en Reformas
                </h2>
                <p className="text-lg text-brand-700 leading-relaxed mb-4">
                  <strong className="text-brand-900">Rovedra S.L.</strong> es una <strong>empresa líder en reformas integrales en Palma de Mallorca</strong>, 
                  con más de 25 años transformando hogares en toda la isla. Nos hemos convertido en una referencia 
                  de confianza y profesionalidad en el sector de las reformas.
                </p>
                <p className="text-lg text-brand-700 leading-relaxed">
                  Ubicados en Palma, ofrecemos un servicio completo que incluye todos los oficios necesarios: 
                  <strong> electricistas autorizados, fontaneros certificados, albañiles expertos, carpinteros y pintores profesionales</strong>. 
                  Nos encargamos de todo para que tú solo tengas que disfrutar del resultado final.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Estadísticas */}
        <section className="bg-brand-500 text-white py-12 -mx-4 md:-mx-6 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-serif font-bold mb-2">+25</div>
                <div className="text-sm md:text-base opacity-90">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-serif font-bold mb-2">+500</div>
                <div className="text-sm md:text-base opacity-90">Reformas Integrales</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-serif font-bold mb-2">+1000</div>
                <div className="text-sm md:text-base opacity-90">Cocinas y Baños</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-serif font-bold mb-2">100%</div>
                <div className="text-sm md:text-base opacity-90">Satisfacción</div>
              </div>
            </div>
          </div>
        </section>

        {/* Cómo Trabajamos - Proceso */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-900 mb-4 text-center">
            Cómo Trabajamos
          </h2>
          <p className="text-center text-lg text-brand-700 mb-12 max-w-3xl mx-auto">
            Un proceso claro y transparente, desde el primer contacto hasta la entrega final
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Paso 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-brand-900 mb-3">Contacto</h3>
              <p className="text-brand-700">
                Llámanos o escríbenos. Te ofrecemos una <strong>visita gratuita</strong> para conocer tu proyecto.
              </p>
            </div>

            {/* Paso 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-brand-900 mb-3">Presupuesto</h3>
              <p className="text-brand-700">
                Recibes un presupuesto <strong>detallado y transparente en 24 horas</strong>, sin sorpresas ni costes ocultos.
              </p>
            </div>

            {/* Paso 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-brand-900 mb-3">Ejecución</h3>
              <p className="text-brand-700">
                Nuestro equipo trabaja con <strong>limpieza y orden</strong>, respetando los plazos acordados.
              </p>
            </div>

            {/* Paso 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-brand-900 mb-3">Entrega</h3>
              <p className="text-brand-700">
                Revisión final completa. <strong>Tu satisfacción es nuestra garantía</strong> de trabajo bien hecho.
              </p>
            </div>
          </div>
        </section>

        {/* Servicios Completos */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-900 mb-8 text-center">
            Servicio de Reformas Completo
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-brand-100 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-brand-900 mb-3">Reformas Integrales Completas</h3>
              <p className="text-brand-700 mb-4">
                Realizamos <strong>reformas integrales en Palma de Mallorca</strong> con servicio completo. 
                Desde el diseño inicial hasta la limpieza final, nos encargamos de todo. No tendrás que preocuparte 
                por contratar diferentes profesionales: nosotros coordinamos todos los trabajos necesarios.
              </p>
              <p className="text-brand-700">
                Nuestros proyectos incluyen reformas de pisos completos, garantizando diseño y funcionalidad 
                en cada espacio transformado.
              </p>
            </div>
            
            <div className="bg-brand-100 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-brand-900 mb-3">Reformas de Cocinas y Baños</h3>
              <p className="text-brand-700 mb-4">
                Especialistas en <strong>reformas de cocinas y baños</strong> completas. Transformamos estos espacios clave 
                con materiales de alta calidad, diseño moderno y máxima funcionalidad.
              </p>
              <p className="text-brand-700">
                Más de 1000 cocinas y baños renovados con resultados excepcionales y durabilidad garantizada.
              </p>
            </div>
          </div>
        </section>

        {/* Equipo Profesional */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-900 mb-8 text-center">
            Equipo de Profesionales Cualificados
          </h2>
          <p className="text-center text-lg text-brand-700 mb-10 max-w-3xl mx-auto">
            Como empresa de construcciones y reformas, nuestro <strong>equipo de profesionales</strong> incluye 
            especialistas cualificados en todos los oficios:
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-4 bg-white p-6 rounded-xl border border-brand-300/30">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-brand-900 mb-1">Electricista Autorizado</h3>
                <p className="text-sm text-brand-700">Instalación eléctrica certificada y servicios especializados</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-xl border border-brand-300/30">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-brand-900 mb-1">Fontanero Certificado</h3>
                <p className="text-sm text-brand-700">Instalación de fontanería y servicio de emergencia</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-xl border border-brand-300/30">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-brand-900 mb-1">Albañil Experto</h3>
                <p className="text-sm text-brand-700">Servicios de albañilería y obra especializada</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-xl border border-brand-300/30">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-brand-900 mb-1">Carpinteros Especializados</h3>
                <p className="text-sm text-brand-700">Muebles personalizados siguiendo tendencias</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-xl border border-brand-300/30">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-brand-900 mb-1">Pintores Profesionales</h3>
                <p className="text-sm text-brand-700">Acabados de calidad en todo tipo de superficies</p>
              </div>
            </div>
          </div>
        </section>

        {/* Filosofía y Valores */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-900 mb-8 text-center">
            Compromiso con la Calidad
          </h2>
          <p className="text-lg text-brand-700 text-center mb-10">
            En Rovedra S.L., empresa de reformas en Mallorca, trabajamos con <strong>compromiso con la calidad</strong> absoluto. 
            Como expertos en reformas, creemos que cada proyecto merece atención al detalle y garantía de calidad.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-brand-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="font-semibold text-brand-900">Materiales de Alta Calidad</h3>
                <p className="text-sm text-brand-700">Seleccionados cuidadosamente para durabilidad</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-brand-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="font-semibold text-brand-900">Experiencia Demostrada</h3>
                <p className="text-sm text-brand-700">Más de 25 años en el sector de reformas</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-brand-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="font-semibold text-brand-900">Presupuestos Transparentes</h3>
                <p className="text-sm text-brand-700">Adaptados a las necesidades del cliente</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-brand-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="font-semibold text-brand-900">Cumplimiento de Plazos</h3>
                <p className="text-sm text-brand-700">Respetamos los tiempos acordados</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-brand-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="font-semibold text-brand-900">Servicio Completo</h3>
                <p className="text-sm text-brand-700">Reformas integrales de principio a fin</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-brand-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="font-semibold text-brand-900">Atención Personalizada</h3>
                <p className="text-sm text-brand-700">Escuchamos tus necesidades y te asesoramos</p>
              </div>
            </div>
          </div>
        </section>

        {/* Zonas de Trabajo */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-900 mb-8 text-center">
            Reformas en Palma de Mallorca y Toda la Isla
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-brand-300/30">
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-brand-900 mb-3">Centro y Casco Histórico</h3>
              <p className="text-brand-700">
                Especialistas en reformas de edificios antiguos respetando su carácter histórico. Reformas adaptadas 
                a normativa patrimonial trabajando con comunidades de propietarios.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-brand-300/30">
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-brand-900 mb-3">Zonas Residenciales Modernas</h3>
              <p className="text-brand-700">
                Reformas integrales en Son Armadams, Santa Catalina, El Terreno y Génova. Adaptamos espacios modernos 
                siguiendo las últimas tendencias en diseño y remodelación funcional.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-brand-300/30">
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-brand-900 mb-3">Zona Costera</h3>
              <p className="text-brand-700">
                Trabajamos en Portixol, Molinar y zona marítima. Reformas resistentes a humedad marina, 
                utilizando materiales específicos para construcción especializada costera.
              </p>
            </div>
          </div>
        </section>

        {/* Nuestro Trabajo */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-900 mb-8 text-center">
            Nuestro Trabajo Habla por Nosotros
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Imagen proyecto antes/después */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/images/proyecto-antes-despues.jpg" 
                alt="Ejemplo de reforma integral antes y después - Rovedra Palma de Mallorca" 
                className="w-full h-64 md:h-80 object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden bg-brand-100 h-64 md:h-80 flex items-center justify-center">
                <div className="text-center p-6">
                  <svg className="w-16 h-16 mx-auto text-brand-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm text-brand-700">Coloca tu imagen en: <code className="text-xs bg-white px-2 py-1 rounded">public/images/proyecto-antes-despues.jpg</code></p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-center space-y-6">
              <div className="bg-brand-100 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-brand-900 mb-3">Empresa Seria y de Confianza</h3>
                <p className="text-brand-700 mb-4">
                  Rovedra S.L. es una <strong>empresa seria y de confianza</strong> con más de 25 años en el sector. 
                  Trabajamos de forma profesional y responsable en cada proyecto.
                </p>
                <ul className="space-y-2 text-sm text-brand-700">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Obra limpia y ordenada
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Trabajo profesional garantizado
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Seguros y toda la documentación en regla
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Trato directo con los propietarios
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-900 mb-4 text-center">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-center text-lg text-brand-700 mb-12 max-w-3xl mx-auto">
            La satisfacción de nuestros clientes es nuestro mejor aval
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Testimonio 1 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-brand-300/30">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-brand-700 mb-4 italic">
                "Excelente trabajo en la reforma de nuestra cocina. Muy profesionales, puntuales y atentos. 
                El resultado superó nuestras expectativas."
              </p>
              <div className="border-t border-brand-300/30 pt-4">
                <p className="font-semibold text-brand-900">María González</p>
                <p className="text-sm text-brand-700">Reforma Cocina • Palma Centro</p>
              </div>
            </div>

            {/* Testimonio 2 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-brand-300/30">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-brand-700 mb-4 italic">
                "Reforma integral de nuestro piso. Todo perfecto, desde el presupuesto hasta la entrega. 
                Trato cercano y obra muy limpia. Totalmente recomendables."
              </p>
              <div className="border-t border-brand-300/30 pt-4">
                <p className="font-semibold text-brand-900">Carlos Ruiz</p>
                <p className="text-sm text-brand-700">Reforma Integral • Santa Catalina</p>
              </div>
            </div>

            {/* Testimonio 3 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-brand-300/30">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-brand-700 mb-4 italic">
                "Reformaron nuestro baño y quedó espectacular. Gran equipo de profesionales, 
                presupuesto ajustado y cero problemas durante toda la obra."
              </p>
              <div className="border-t border-brand-300/30 pt-4">
                <p className="font-semibold text-brand-900">Ana Martínez</p>
                <p className="text-sm text-brand-700">Reforma Baño • Son Armadams</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ - Preguntas Frecuentes */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-900 mb-4 text-center">
            Preguntas Frecuentes
          </h2>
          <p className="text-center text-lg text-brand-700 mb-12 max-w-3xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestro servicio de <strong>reformas en Palma de Mallorca</strong>
          </p>

          <div className="space-y-4">
            {/* Pregunta 1 */}
            <details className="bg-white rounded-xl border border-brand-300/30 overflow-hidden group">
              <summary className="cursor-pointer p-6 font-semibold text-brand-900 text-lg flex items-center justify-between hover:bg-brand-50 transition">
                ¿Cuánto cuesta una reforma integral en Palma de Mallorca?
                <svg className="w-5 h-5 text-brand-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-brand-700 leading-relaxed">
                <p className="mb-3">
                  El coste de una <strong>reforma integral</strong> depende de varios factores: tamaño del espacio, 
                  materiales elegidos, complejidad del proyecto y acabados. Como referencia general:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Reforma básica:</strong> desde 400-500€/m²</li>
                  <li><strong>Reforma media:</strong> 600-800€/m²</li>
                  <li><strong>Reforma alta gama:</strong> más de 900€/m²</li>
                </ul>
                <p className="mt-3">
                  Te ofrecemos un <strong>presupuesto gratuito y sin compromiso en 24 horas</strong>. 
                  <Link to="/contact" className="text-brand-500 font-semibold hover:underline ml-1">Contáctanos aquí</Link>.
                </p>
              </div>
            </details>

            {/* Pregunta 2 */}
            <details className="bg-white rounded-xl border border-brand-300/30 overflow-hidden group">
              <summary className="cursor-pointer p-6 font-semibold text-brand-900 text-lg flex items-center justify-between hover:bg-brand-50 transition">
                ¿Cuánto tiempo tarda una reforma completa?
                <svg className="w-5 h-5 text-brand-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-brand-700 leading-relaxed">
                <p className="mb-3">
                  El plazo de ejecución varía según el tipo de reforma:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Reforma de cocina o baño:</strong> 2-4 semanas</li>
                  <li><strong>Reforma integral de piso (70-90m²):</strong> 6-10 semanas</li>
                  <li><strong>Reformas grandes (+100m²):</strong> 10-14 semanas</li>
                </ul>
                <p className="mt-3">
                  En Rovedra cumplimos los plazos acordados y te mantenemos informado del progreso en cada fase del proyecto.
                </p>
              </div>
            </details>

            {/* Pregunta 3 */}
            <details className="bg-white rounded-xl border border-brand-300/30 overflow-hidden group">
              <summary className="cursor-pointer p-6 font-semibold text-brand-900 text-lg flex items-center justify-between hover:bg-brand-50 transition">
                ¿Qué incluye el servicio de reforma integral?
                <svg className="w-5 h-5 text-brand-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-brand-700 leading-relaxed">
                <p className="mb-3">
                  Nuestro servicio de <strong>reforma integral</strong> incluye:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Diseño y planificación completa del proyecto</li>
                  <li>Demolición y preparación del espacio</li>
                  <li>Albañilería, electricidad y fontanería</li>
                  <li>Carpintería y pintura profesional</li>
                  <li>Instalación de suelos, azulejos y revestimientos</li>
                  <li>Gestión de permisos y licencias necesarias</li>
                  <li>Limpieza final y retirada de escombros</li>
                </ul>
                <p className="mt-3">
                  Nos encargamos de todo para que no tengas que preocuparte por nada. 
                  Conoce más sobre nuestros <Link to="/services" className="text-brand-500 font-semibold hover:underline">servicios aquí</Link>.
                </p>
              </div>
            </details>

            {/* Pregunta 4 */}
            <details className="bg-white rounded-xl border border-brand-300/30 overflow-hidden group">
              <summary className="cursor-pointer p-6 font-semibold text-brand-900 text-lg flex items-center justify-between hover:bg-brand-50 transition">
                ¿Necesito permiso para hacer una reforma en Palma?
                <svg className="w-5 h-5 text-brand-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-brand-700 leading-relaxed">
                <p className="mb-3">
                  Depende del tipo de reforma:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Obras menores</strong> (pintura, suelos, cambio de cocina/baño): normalmente solo comunicación previa</li>
                  <li><strong>Obras mayores</strong> (afectan estructura, fachada, distribución): requieren licencia de obra mayor</li>
                  <li><strong>Edificios protegidos</strong> en el casco histórico: permisos especiales</li>
                </ul>
                <p className="mt-3">
                  En Rovedra te asesoramos sobre los <strong>permisos necesarios</strong> y nos encargamos de toda la gestión 
                  ante el Ayuntamiento de Palma.
                </p>
              </div>
            </details>

            {/* Pregunta 5 */}
            <details className="bg-white rounded-xl border border-brand-300/30 overflow-hidden group">
              <summary className="cursor-pointer p-6 font-semibold text-brand-900 text-lg flex items-center justify-between hover:bg-brand-50 transition">
                ¿Trabajan en todas las zonas de Palma?
                <svg className="w-5 h-5 text-brand-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-brand-700 leading-relaxed">
                <p className="mb-3">
                  Sí, realizamos <strong>reformas en toda Palma de Mallorca</strong> y alrededores:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Centro y Casco Histórico:</strong> especialistas en edificios antiguos</li>
                  <li><strong>Zonas residenciales:</strong> Son Armadams, Santa Catalina, El Terreno, Génova</li>
                  <li><strong>Zona costera:</strong> Portixol, Molinar, Ciudad Jardín</li>
                  <li><strong>Extrarradio:</strong> Son Rapinya, Son Cladera, Polígono de Llevant</li>
                </ul>
                <p className="mt-3">
                  También trabajamos en otros municipios de Mallorca. 
                  <Link to="/contact" className="text-brand-500 font-semibold hover:underline ml-1">Consúltanos tu ubicación</Link>.
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* CTA Final */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-brand-500 text-white rounded-2xl p-10 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              ¿Listo para Tu Próxima Reforma?
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Más de 25 años de experiencia transformando hogares en Palma de Mallorca. 
              Visita gratuita y servicio personalizado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact"
                className="inline-block bg-white text-brand-500 font-semibold rounded-xl px-8 py-4 hover:bg-brand-100 transition-all shadow-lg"
              >
                Pedir Presupuesto Gratis
              </Link>
              <a 
                href="tel:+34665267715"
                className="inline-flex items-center gap-2 bg-brand-700 text-white font-semibold rounded-xl px-8 py-4 hover:bg-brand-900 transition-all"
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
    </>
  );
};

export default About;
