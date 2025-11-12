import { Link } from 'react-router-dom';
import type { Project } from '../data/types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link 
      to={`/projects#${project.slug}`} 
      className="block rounded-2xl bg-white border border-brand-300/50 overflow-hidden hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1"
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <img 
          src={project.cover} 
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
        
        {/* Overlay - dark by default, clear on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900/70 via-brand-900/40 to-brand-900/20 group-hover:opacity-0 transition-opacity duration-300" />
        
        {/* Featured badge (for first project) */}
        {project.slug === 'cocina-moderna-palma-centro' && (
          <div className="absolute top-4 left-4 bg-brand-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1">
            <span>⭐</span>
            <span>Destacado</span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex gap-2 mb-3 flex-wrap">
          {project.tags.map((tag) => (
            <span 
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-brand-100 text-brand-700 border border-brand-300/50 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-serif text-brand-900 mb-2 group-hover:text-brand-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-brand-700 leading-relaxed">
          {project.excerpt}
        </p>
      </div>
    </Link>
  );
};

export default ProjectCard;

