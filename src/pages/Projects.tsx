import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');

  // Filter categories
  const categories = ['Todos', 'Cocina', 'Baño', 'Integral'];

  // Filtered projects
  const filteredProjects = activeFilter === 'Todos' 
    ? projects 
    : projects.filter(project => 
        project.tags.some(tag => tag.toLowerCase().includes(activeFilter.toLowerCase()))
      );

  return (
    <>
      <SEO
        title="Proyectos de Reformas en Palma 🏗️ Portfolio | Rovedra S.L."
        description="✅ Descubre nuestros proyectos de reformas en Palma de Mallorca: cocinas, baños y pisos completos. +500 reformas realizadas en 25 años. Ver portfolio."
        canonical="https://reformasrovedra.es/projects"
      />

      {/* Schema.org for Portfolio */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Portfolio de Proyectos - Rovedra S.L.",
          "description": "Proyectos de reformas realizados en Palma de Mallorca",
          "url": "https://reformasrovedra.es/projects",
          "publisher": {
            "@type": "Organization",
            "name": "Rovedra S.L.",
            "telephone": "+34665267715",
            "email": "rovedra.sl@gmail.com"
          }
        })}
      </script>

      <div className="space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-6 py-8 animate-fadeIn">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-50 rounded-full border border-brand-200">
            <span className="text-xl">🏗️</span>
            <span className="text-sm font-medium text-brand-800">Portfolio de proyectos</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif text-brand-900">
            Nuestros Proyectos
          </h1>
          
          <p className="text-xl text-brand-700 max-w-3xl mx-auto">
            Descubre las <strong>reformas de calidad</strong> que hemos realizado para nuestros clientes en Palma de Mallorca
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto pt-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-900">500+</div>
              <div className="text-sm text-brand-600">Proyectos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-900">25</div>
              <div className="text-sm text-brand-600">Años</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-900">100%</div>
              <div className="text-sm text-brand-600">Satisfacción</div>
            </div>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="animate-fadeIn" style={{ animationDelay: '0.1s' }}>
          <div className="flex justify-center gap-2 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-brand-500 text-white shadow-lg scale-105'
                    : 'bg-white border border-brand-300 text-brand-700 hover:bg-brand-50 hover:border-brand-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="text-center mt-4 text-brand-600">
            Mostrando <strong className="text-brand-900">{filteredProjects.length}</strong> proyecto{filteredProjects.length !== 1 ? 's' : ''}
          </div>
        </section>

        {/* Projects Grid */}
        <section className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.slug}
                  className="animate-fadeIn"
                  style={{ animationDelay: `${0.3 + index * 0.05}s` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-xl text-brand-700">
                No hay proyectos en esta categoría
              </p>
            </div>
          )}
        </section>

        {/* Process Section */}
        <section className="py-12 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-900 mb-4">
              Cómo Trabajamos
            </h2>
            <p className="text-lg text-brand-700 max-w-2xl mx-auto">
              Un proceso claro y transparente para que tu reforma sea un éxito
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="relative animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <div className="bg-white rounded-2xl border border-brand-300/50 p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1 h-full">
                <div className="w-16 h-16 bg-brand-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg animate-scale-in" style={{ animationDelay: '0.3s' }}>
                  1
                </div>
                <h3 className="text-lg font-semibold text-brand-900 mb-3">
                  Contacto y Visita
                </h3>
                <p className="text-brand-700 text-sm leading-relaxed">
                  Nos desplazamos a tu domicilio para conocer tu proyecto y evaluar el espacio
                </p>
              </div>
              {/* Arrow (hidden on mobile) */}
              <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-brand-300 animate-pulse-arrow" style={{ animationDelay: '0.5s' }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white rounded-2xl border border-brand-300/50 p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1 h-full">
                <div className="w-16 h-16 bg-brand-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg animate-scale-in" style={{ animationDelay: '0.4s' }}>
                  2
                </div>
                <h3 className="text-lg font-semibold text-brand-900 mb-3">
                  Presupuesto Detallado
                </h3>
                <p className="text-brand-700 text-sm leading-relaxed">
                  Elaboramos un presupuesto completo con materiales, plazos y costes desglosados
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-brand-300 animate-pulse-arrow" style={{ animationDelay: '0.6s' }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <div className="bg-white rounded-2xl border border-brand-300/50 p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1 h-full">
                <div className="w-16 h-16 bg-brand-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg animate-scale-in" style={{ animationDelay: '0.5s' }}>
                  3
                </div>
                <h3 className="text-lg font-semibold text-brand-900 mb-3">
                  Ejecución de Obra
                </h3>
                <p className="text-brand-700 text-sm leading-relaxed">
                  Realizamos la reforma con profesionales cualificados y seguimiento constante
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-brand-300 animate-pulse-arrow" style={{ animationDelay: '0.7s' }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <div className="bg-white rounded-2xl border border-brand-300/50 p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1 h-full">
                <div className="w-16 h-16 bg-brand-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg animate-scale-in" style={{ animationDelay: '0.6s' }}>
                  4
                </div>
                <h3 className="text-lg font-semibold text-brand-900 mb-3">
                  Entrega Final
                </h3>
                <p className="text-brand-700 text-sm leading-relaxed">
                  Revisión completa, limpieza y entrega de tu reforma lista para disfrutar
                </p>
              </div>
            </div>
          </div>

          {/* Additional info */}
          <div className="mt-12 bg-brand-50 rounded-2xl border border-brand-200 p-6 md:p-8 animate-fadeIn" style={{ animationDelay: '0.7s' }}>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
                <div className="text-3xl mb-2">📋</div>
                <div className="font-semibold text-brand-900 mb-1">Sin Sorpresas</div>
                <div className="text-sm text-brand-700">Presupuesto cerrado y transparente</div>
              </div>
              <div className="animate-fadeInUp" style={{ animationDelay: '0.9s' }}>
                <div className="text-3xl mb-2">🏗️</div>
                <div className="font-semibold text-brand-900 mb-1">Obra Limpia</div>
                <div className="text-sm text-brand-700">Respetamos tu hogar y tu tiempo</div>
              </div>
              <div className="animate-fadeInUp" style={{ animationDelay: '1s' }}>
                <div className="text-3xl mb-2">✓</div>
                <div className="font-semibold text-brand-900 mb-1">Garantía Oficial</div>
                <div className="text-sm text-brand-700">En todos nuestros trabajos</div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-12 animate-fadeIn" style={{ animationDelay: '0.5s' }}>
          <div className="rounded-2xl bg-gradient-to-br from-brand-50 to-white border border-brand-300/50 p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-serif text-brand-900 mb-4">
                  ¿Quieres ver tu proyecto aquí?
                </h2>
                <p className="text-brand-700 mb-6 leading-relaxed">
                  Cada reforma es única y está diseñada específicamente para las necesidades de nuestros clientes. 
                  Con más de 25 años de experiencia, garantizamos acabados profesionales y cumplimiento de plazos.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-brand-700">
                    <span className="text-brand-500">✓</span>
                    <span>Presupuesto gratuito en 24 horas</span>
                  </li>
                  <li className="flex items-center gap-2 text-brand-700">
                    <span className="text-brand-500">✓</span>
                    <span>Materiales de primera calidad</span>
                  </li>
                  <li className="flex items-center gap-2 text-brand-700">
                    <span className="text-brand-500">✓</span>
                    <span>Garantía oficial en todos los trabajos</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-center md:text-right">
                <div className="text-6xl mb-4">🏆</div>
                <div className="text-4xl font-bold text-brand-900 mb-2">+500</div>
                <div className="text-xl text-brand-700 mb-6">Clientes satisfechos</div>
                <Link
                  to="/contact"
                  className="inline-block bg-brand-500 text-white rounded-xl px-8 py-4 hover:bg-brand-600 transition-all hover:scale-105 font-semibold shadow-lg"
                >
                  Pedir Presupuesto Gratis
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-12 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
          <div className="rounded-2xl bg-white border border-brand-300/50 p-10 md:p-12 text-center shadow-xl">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-900 mb-4">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-lg text-brand-700 mb-8 max-w-2xl mx-auto">
              Cuéntanos tu idea y te ayudaremos a hacerla realidad. Presupuesto gratuito y sin compromiso en menos de 24 horas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-block bg-brand-500 text-white rounded-xl px-8 py-4 hover:bg-brand-600 transition-all hover:scale-105 font-semibold shadow-lg"
              >
                Solicitar Presupuesto
              </Link>
              <a
                href="tel:+34665267715"
                className="inline-flex items-center justify-center gap-2 border-2 border-brand-300 text-brand-700 rounded-xl px-8 py-4 hover:bg-brand-50 hover:border-brand-400 transition-all hover:scale-105 font-semibold"
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

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </>
  );
};

export default Projects;
