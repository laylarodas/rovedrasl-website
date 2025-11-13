import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import { services } from '../data/services';
import { projects } from '../data/projects';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Home = () => {
  // Show only first 3 projects for featured section
  const featuredProjects = projects.slice(0, 3);
  
  // Scroll animations
  const trustBadges = useScrollAnimation();
  const servicesSection = useScrollAnimation();
  const whyChooseSection = useScrollAnimation();
  const projectsSection = useScrollAnimation();
  const testimonialsSection = useScrollAnimation();
  const ctaSection = useScrollAnimation();

  return (
    <>
      <SEO
        title="Reformas en Palma de Mallorca"
        description="⭐ Empresa de reformas integrales en Palma con +25 años de experiencia. Especialistas en cocinas, baños y reformas completas. Presupuesto gratuito en 24h. ☎️ 665 267 715"
        canonical="https://reformasrovedra.es/"
      />

      {/* Schema.org Organization Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          "name": "Rovedra S.L.",
          "image": "https://reformasrovedra.es/logo.png",
          "description": "Empresa de reformas integrales en Palma de Mallorca con más de 25 años de experiencia. Especialistas en reformas de cocinas, baños, albañilería, electricidad, fontanería y climatización.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Palma",
            "addressRegion": "Illes Balears",
            "postalCode": "07011",
            "addressCountry": "ES"
          },
          "telephone": "+34665267715",
          "email": "rovedra.sl@gmail.com",
          "url": "https://reformasrovedra.es",
          "priceRange": "€€",
          "areaServed": {
            "@type": "City",
            "name": "Palma de Mallorca"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Servicios de Reforma",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Reformas Integrales"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Reformas de Cocinas"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Reformas de Baños"
                }
              }
            ]
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "127"
          }
        })}
      </script>

      <Hero />

      {/* Trust Badges */}
      <section ref={trustBadges.elementRef} className="py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className={`bg-white rounded-xl border border-brand-300/50 p-6 text-center group transition-all ${trustBadges.isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            <div className="text-3xl mb-2 inline-block cursor-pointer transition-transform duration-300 group-hover:scale-110 group-hover:animate-bounce">⚡</div>
            <div className="font-semibold text-brand-900 text-sm">Presupuesto</div>
            <div className="text-xs text-brand-700">En 24 horas</div>
          </div>
          <div className={`bg-white rounded-xl border border-brand-300/50 p-6 text-center group transition-all ${trustBadges.isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl mb-2 inline-block cursor-pointer transition-transform duration-300 group-hover:scale-110 group-hover:animate-bounce">👷</div>
            <div className="font-semibold text-brand-900 text-sm">+25 Años</div>
            <div className="text-xs text-brand-700">De experiencia</div>
          </div>
          <div className={`bg-white rounded-xl border border-brand-300/50 p-6 text-center group transition-all ${trustBadges.isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="text-3xl mb-2 inline-block cursor-pointer transition-transform duration-300 group-hover:scale-110 group-hover:animate-bounce">✓</div>
            <div className="font-semibold text-brand-900 text-sm">Garantía</div>
            <div className="text-xs text-brand-700">En todos los trabajos</div>
          </div>
          <div className={`bg-white rounded-xl border border-brand-300/50 p-6 text-center group transition-all ${trustBadges.isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <div className="text-3xl mb-2 inline-block cursor-pointer transition-transform duration-300 group-hover:scale-110 group-hover:animate-bounce">💯</div>
            <div className="font-semibold text-brand-900 text-sm">100%</div>
            <div className="text-xs text-brand-700">Satisfacción</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesSection.elementRef} className={`py-16 ${servicesSection.isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-brand-700 max-w-2xl mx-auto">
            Ofrecemos soluciones completas de reforma adaptadas a tus necesidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {services.map((service, index) => (
            <div key={service.slug} className={servicesSection.isVisible ? 'animate-fadeInUp' : 'opacity-0'} style={{ animationDelay: `${index * 0.1}s` }}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/services"
            className="inline-block border-2 border-brand-500 text-brand-500 rounded-xl px-6 py-3 hover:bg-brand-500 hover:text-white transition font-semibold"
          >
            Ver todos los servicios →
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={whyChooseSection.elementRef} className={`py-16 ${whyChooseSection.isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-900 mb-4">
            ¿Por Qué Elegir Rovedra?
          </h2>
          <p className="text-lg text-brand-700 max-w-2xl mx-auto">
            Más de 25 años de experiencia nos respaldan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className={`bg-white rounded-xl border border-brand-300/50 p-6 hover:shadow-lg transition ${whyChooseSection.isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-semibold text-brand-900 mb-2">Experiencia Probada</h3>
            <p className="text-brand-700">Más de 500 proyectos completados con éxito en Palma de Mallorca</p>
          </div>
          
          <div className={`bg-white rounded-xl border border-brand-300/50 p-6 hover:shadow-lg transition ${whyChooseSection.isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl mb-4">👨‍🔧</div>
            <h3 className="text-xl font-semibold text-brand-900 mb-2">Equipo Cualificado</h3>
            <p className="text-brand-700">Profesionales certificados en albañilería, electricidad, fontanería y más</p>
          </div>
          
          <div className={`bg-white rounded-xl border border-brand-300/50 p-6 hover:shadow-lg transition ${whyChooseSection.isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-semibold text-brand-900 mb-2">Presupuesto Cerrado</h3>
            <p className="text-brand-700">Sin sorpresas ni costes adicionales. Lo pactado es lo que pagas</p>
          </div>
          
          <div className={`bg-white rounded-xl border border-brand-300/50 p-6 hover:shadow-lg transition ${whyChooseSection.isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <div className="text-4xl mb-4">⏱️</div>
            <h3 className="text-xl font-semibold text-brand-900 mb-2">Plazos Cumplidos</h3>
            <p className="text-brand-700">Respetamos los tiempos acordados para que puedas planificarte</p>
          </div>
          
          <div className={`bg-white rounded-xl border border-brand-300/50 p-6 hover:shadow-lg transition ${whyChooseSection.isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
            <div className="text-4xl mb-4">🧹</div>
            <h3 className="text-xl font-semibold text-brand-900 mb-2">Obra Limpia</h3>
            <p className="text-brand-700">Limpieza diaria del espacio de trabajo y entrega impecable</p>
          </div>
          
          <div className={`bg-white rounded-xl border border-brand-300/50 p-6 hover:shadow-lg transition ${whyChooseSection.isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-xl font-semibold text-brand-900 mb-2">Atención Directa</h3>
            <p className="text-brand-700">Comunicación constante contigo durante todo el proceso</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsSection.elementRef} className={`py-16 ${projectsSection.isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-900 mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-lg text-brand-700 max-w-2xl mx-auto">
            Descubre algunos de nuestros trabajos más recientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {featuredProjects.map((project, index) => (
            <div key={project.slug} className={projectsSection.isVisible ? 'animate-fadeInUp' : 'opacity-0'} style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/projects"
            className="inline-block border-2 border-brand-500 text-brand-500 rounded-xl px-6 py-3 hover:bg-brand-500 hover:text-white transition font-semibold"
          >
            Ver todos los proyectos →
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsSection.elementRef} className={`py-16 ${testimonialsSection.isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-900 mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-lg text-brand-700 max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className={`bg-white rounded-xl border border-brand-300/50 p-6 ${testimonialsSection.isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            <div className="flex gap-1 mb-3 text-yellow-500">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <p className="text-brand-700 mb-4 italic">
              "Profesionales de primera. Reformaron nuestra cocina en el plazo acordado y el resultado superó nuestras expectativas. Muy recomendables."
            </p>
            <div className="font-semibold text-brand-900">María González</div>
            <div className="text-sm text-brand-700">Reforma de Cocina</div>
          </div>

          <div className={`bg-white rounded-xl border border-brand-300/50 p-6 ${testimonialsSection.isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="flex gap-1 mb-3 text-yellow-500">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <p className="text-brand-700 mb-4 italic">
              "Excelente trato y trabajo impecable. Nos hicieron la reforma integral de nuestro piso y quedamos encantados. Presupuesto ajustado sin sorpresas."
            </p>
            <div className="font-semibold text-brand-900">Carlos Martínez</div>
            <div className="text-sm text-brand-700">Reforma Integral</div>
          </div>

          <div className={`bg-white rounded-xl border border-brand-300/50 p-6 ${testimonialsSection.isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="flex gap-1 mb-3 text-yellow-500">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <p className="text-brand-700 mb-4 italic">
              "Muy contentos con el baño reformado. Equipo profesional, limpio y puntual. La atención de principio a fin fue excelente."
            </p>
            <div className="font-semibold text-brand-900">Ana Ruiz</div>
            <div className="text-sm text-brand-700">Reforma de Baño</div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            to="/about"
            className="inline-block text-brand-500 hover:text-brand-700 transition font-semibold"
          >
            Ver más opiniones →
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaSection.elementRef} className={`py-16 ${ctaSection.isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
        <div 
          className="rounded-2xl p-12 md:p-16 text-center text-white"
          style={{ 
            background: 'linear-gradient(145deg, #d3542c 0%, #a03a2a 50%, #3a2f2f 100%)',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)'
          }}
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            ¿Listo para empezar tu reforma?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
            Contacta con nosotros y recibe un presupuesto personalizado en menos de 24 horas, sin compromiso
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Link
              to="/contact"
              className="inline-block bg-white text-brand-500 rounded-xl px-8 py-4 hover:bg-brand-100 transition font-semibold shadow-lg"
            >
              Pedir Presupuesto Gratuito
            </Link>
            <a
              href="tel:+34665267715"
              className="inline-block border-2 border-white text-white rounded-xl px-8 py-4 hover:bg-white hover:text-brand-500 transition font-semibold"
            >
              Llamar Ahora: 665 267 715
            </a>
          </div>

          <div className="text-sm opacity-90">
            ⚡ Respuesta garantizada en 24 horas
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
