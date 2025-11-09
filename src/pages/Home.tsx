import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import { services } from '../data/services';
import { projects } from '../data/projects';

const Home = () => {
  return (
    <>
      <SEO
        title="Reformas en Palma de Mallorca"
        description="Reformas integrales, cocinas y baños. Presupuesto en 24h."
        canonical="https://reformasrovedra.es/"
      />

      <Hero />

      {/* Services Section */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-brand-700 max-w-2xl mx-auto">
            Ofrecemos soluciones completas de reforma adaptadas a tus necesidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/services"
            className="inline-block border border-brand-300 text-brand-700 rounded-xl px-5 py-3 hover:bg-white transition"
          >
            Ver todos los servicios
          </Link>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-900 mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-lg text-brand-700 max-w-2xl mx-auto">
            Descubre nuestros trabajos más recientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/projects"
            className="inline-block border border-brand-300 text-brand-700 rounded-xl px-5 py-3 hover:bg-white transition"
          >
            Ver todos los proyectos
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="rounded-2xl bg-white border border-brand-300/50 p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-900 mb-4">
            ¿Listo para empezar tu reforma?
          </h2>
          <p className="text-lg text-brand-700 mb-8 max-w-2xl mx-auto">
            Contacta con nosotros y recibe un presupuesto personalizado en menos de 24 horas
          </p>
          <Link
            to="/contact"
            className="inline-block bg-brand-500 text-white rounded-xl px-5 py-3 hover:opacity-90 transition"
          >
            Pedir presupuesto gratuito
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
