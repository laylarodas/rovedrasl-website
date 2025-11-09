import SEO from '../components/SEO';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';

const Services = () => {
  return (
    <>
      <SEO
        title="Servicios"
        description="Reformas integrales, cocinas y baños en Palma de Mallorca."
        canonical="https://reformasrovedra.es/services"
      />

      <div className="space-y-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-900 mb-6">
            Nuestros Servicios
          </h1>
          <p className="text-xl text-brand-700 max-w-3xl mx-auto">
            Ofrecemos soluciones completas de reforma con acabados profesionales y atención personalizada
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
