import { Link } from 'react-router-dom';
import type { Service } from '../data/types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <Link 
      to={`/services#${service.slug}`} 
      className="block rounded-2xl bg-white border border-brand-300/50 overflow-hidden hover:shadow-lg transition group"
    >
      {service.image && (
        <div className="aspect-video overflow-hidden">
          <img 
            src={service.image} 
            alt={`Servicio de ${service.title} en Palma de Mallorca`}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl">{service.icon}</span>
          <h3 className="text-xl font-serif text-brand-900">
            {service.title}
          </h3>
        </div>
        <p className="text-brand-700">
          {service.summary}
        </p>
      </div>
    </Link>
  );
};

export default ServiceCard;

