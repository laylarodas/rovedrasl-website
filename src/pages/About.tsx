import SEO from '../components/SEO';

const About = () => {
  return (
    <>
      <SEO
        title="Nosotros"
        description="Equipo de reformas con experiencia en Mallorca."
        canonical="https://reformasrovedra.es/about"
      />

      <div className="space-y-8 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-serif text-brand-900">
          Sobre Nosotros
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-brand-700 leading-relaxed">
            En Rovedra somos especialistas en reformas integrales en Palma de Mallorca. 
            Con más de 15 años de experiencia, transformamos espacios en hogares únicos 
            que reflejan el estilo y las necesidades de cada cliente.
          </p>

          <p className="text-lg text-brand-700 leading-relaxed">
            Nuestro equipo de profesionales altamente cualificados se encarga de cada detalle, 
            desde el diseño inicial hasta la entrega final. Trabajamos con los mejores materiales 
            y las técnicas más modernas para garantizar resultados de máxima calidad.
          </p>

          <p className="text-lg text-brand-700 leading-relaxed">
            Nos especializamos en reformas de cocinas, baños y proyectos integrales. 
            Te ofrecemos presupuesto en menos de 24 horas y acompañamiento durante todo el proceso.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
