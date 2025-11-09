import { Link } from 'react-router-dom';
import { Project } from '../data/types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link 
      to={`/projects#${project.slug}`} 
      className="block rounded-2xl bg-white border border-brand-300/50 overflow-hidden hover:shadow-lg transition group"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={project.cover} 
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex gap-2 mb-3">
          {project.tags.map((tag) => (
            <span 
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-brand-100 text-brand-700 border border-brand-300/50"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-serif text-brand-900 mb-2">
          {project.title}
        </h3>
        <p className="text-brand-700">
          {project.excerpt}
        </p>
      </div>
    </Link>
  );
};

export default ProjectCard;

