import SEO from '../components/SEO';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <>
      <SEO
        title="Proyectos"
        description="Obras y reformas realizadas por Rovedra S.L."
        canonical="https://reformasrovedra.es/projects"
      />

      <div className="space-y-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-900 mb-6">
            Nuestros Proyectos
          </h1>
          <p className="text-xl text-brand-700 max-w-3xl mx-auto">
            Descubre las reformas que hemos realizado para nuestros clientes en Palma de Mallorca
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
