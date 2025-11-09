import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="py-16 md:py-24 text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-900 mb-6">
        Reformas integrales en Palma de Mallorca
      </h1>
      <p className="text-xl md:text-2xl text-brand-700 mb-10 max-w-3xl mx-auto">
        Cocinas, baños y obras completas con acabado profesional. Presupuesto en 24h.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link 
          to="/contact" 
          className="bg-brand-500 text-white rounded-xl px-5 py-3 hover:opacity-90 transition"
        >
          Pedir presupuesto
        </Link>
        <Link 
          to="/projects" 
          className="border border-brand-300 text-brand-700 rounded-xl px-5 py-3 hover:bg-white transition"
        >
          Ver proyectos
        </Link>
      </div>
    </section>
  );
};

export default Hero;

