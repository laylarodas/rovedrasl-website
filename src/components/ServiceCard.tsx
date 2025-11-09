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
            alt={service.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-serif text-brand-900 mb-2">
          {service.title}
        </h3>
        <p className="text-brand-700">
          {service.summary}
        </p>
      </div>
    </Link>
  );
};

export default ServiceCard;

