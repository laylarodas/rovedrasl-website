import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <>
      <SEO
        title="Contacto"
        description="Solicita tu presupuesto de reforma en Palma de Mallorca."
        canonical="https://reformasrovedra.es/contact"
      />

      <div className="space-y-12 max-w-3xl">
        <div>
          <h1 className="text-4xl md:text-5xl font-serif text-brand-900 mb-6">
            Contacta con Nosotros
          </h1>
          <p className="text-xl text-brand-700">
            Cuéntanos tu proyecto y te enviaremos un presupuesto personalizado en menos de 24 horas.
          </p>
        </div>

        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
