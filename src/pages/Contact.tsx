import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <>
      <SEO
        title="Contacto 📞 Pide tu Presupuesto Gratis | Palma de Mallorca"
        description="Contacta con Rovedra S.L. para tu reforma en Palma. Presupuesto gratuito en 24h. ☎️ 665 267 715 | 📧 rovedra.sl@gmail.com | +25 años de experiencia."
        canonical="https://reformasrovedra.es/contact"
      />

      {/* Schema.org ContactPage */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contacto - Rovedra S.L.",
          "description": "Contacta con nuestra empresa de reformas en Palma de Mallorca",
          "url": "https://reformasrovedra.es/contact",
          "mainEntity": {
            "@type": "LocalBusiness",
            "name": "Rovedra S.L.",
            "telephone": "+34665267715",
            "email": "rovedra.sl@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Palma",
              "addressLocality": "Palma de Mallorca",
              "addressRegion": "Islas Baleares",
              "postalCode": "07011",
              "addressCountry": "ES"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:00"
              }
            ]
          }
        })}
      </script>

      <div className="space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-4 py-8 animate-fadeIn">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-50 rounded-full border border-brand-200">
            <span className="text-xl">📞</span>
            <span className="text-sm font-medium text-brand-800">Respuesta en 24 horas</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif text-brand-900">
            Contacta con Nosotros
          </h1>
          
          <p className="text-xl text-brand-700 max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente? Cuéntanoslo y te enviaremos un <strong>presupuesto gratuito</strong> en menos de 24 horas.
          </p>
        </section>

        {/* Main Content - 2 Columns */}
        <section className="grid lg:grid-cols-2 gap-12 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
          {/* Left Column - Contact Form */}
          <div>
            <h2 className="text-2xl font-serif text-brand-900 mb-6">
              Solicita tu Presupuesto
            </h2>
            <ContactForm />
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-white rounded-2xl border border-brand-300/50 p-8 space-y-6 shadow-lg">
              <h2 className="text-2xl font-serif text-brand-900 mb-4">
                Información de Contacto
              </h2>

              {/* Phone */}
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center group-hover:bg-brand-100 transition">
                  <svg className="w-6 h-6 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-brand-600 font-medium mb-1">Teléfono</div>
                  <a 
                    href="tel:+34665267715" 
                    className="text-lg font-semibold text-brand-900 hover:text-brand-600 transition"
                  >
                    +34 665 267 715
                  </a>
                  <div className="text-sm text-brand-600 mt-1">Llámanos de Lunes a Viernes</div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center group-hover:bg-brand-100 transition">
                  <svg className="w-6 h-6 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-brand-600 font-medium mb-1">Email</div>
                  <a 
                    href="mailto:rovedra.sl@gmail.com" 
                    className="text-lg font-semibold text-brand-900 hover:text-brand-600 transition break-all"
                  >
                    rovedra.sl@gmail.com
                  </a>
                  <div className="text-sm text-brand-600 mt-1">Respuesta en 24h</div>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center group-hover:bg-brand-100 transition">
                  <svg className="w-6 h-6 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-brand-600 font-medium mb-1">Dirección</div>
                  <div className="text-brand-900 font-semibold">
                    Palma
                  </div>
                  <div className="text-brand-700">
                    Palma de Mallorca 07011
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center group-hover:bg-brand-100 transition">
                  <svg className="w-6 h-6 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-brand-600 font-medium mb-1">Horario</div>
                  <div className="text-brand-900 font-semibold">Lunes a Viernes</div>
                  <div className="text-brand-700">8:00 - 18:00</div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-white rounded-2xl border border-brand-300/50 overflow-hidden shadow-lg">
              <div className="p-4 border-b border-brand-200 bg-brand-50">
                <h3 className="font-semibold text-brand-900 flex items-center gap-2">
                  <span>📍</span>
                  <span>Encuéntranos en el Mapa</span>
                </h3>
              </div>
              <div className="aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3075.0668738034896!2d2.6722222!3d39.5944444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1297925c4c0e3c3d%3A0x0!2zMznCsDM1JzQwLjAiTiAywrA0MCcyMC4wIkU!5e0!3m2!1sen!2ses!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Rovedra S.L. en Palma de Mallorca"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-white border-2 border-brand-300 rounded-2xl p-8 text-center shadow-xl">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-2xl font-serif mb-3 text-brand-900">¿Prefieres hablar directamente?</h3>
              <p className="text-brand-700 mb-6">
                Llámanos ahora y te atenderemos personalmente
              </p>
              <a
                href="tel:+34665267715"
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-brand-600 text-gray-900 font-semibold rounded-xl px-8 py-4 hover:bg-brand-50 hover:border-brand-700 transition-all shadow-lg hover:scale-105 animate-pulse-slow"
              >
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-red-600">665 267 715</span>
              </a>
            </div>
          </div>
        </section>

        {/* Trust Badges - Full Width */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          <div className="text-center p-4 bg-brand-50 rounded-xl border border-brand-200">
            <div className="text-3xl mb-2">⚡</div>
            <div className="font-bold text-brand-900">24 horas</div>
            <div className="text-sm text-brand-600">Respuesta rápida</div>
          </div>
          
          <div className="text-center p-4 bg-brand-50 rounded-xl border border-brand-200">
            <div className="text-3xl mb-2">🏆</div>
            <div className="font-bold text-brand-900">+25 años</div>
            <div className="text-sm text-brand-600">Experiencia</div>
          </div>
          
          <div className="text-center p-4 bg-brand-50 rounded-xl border border-brand-200">
            <div className="text-3xl mb-2">💰</div>
            <div className="font-bold text-brand-900">Gratis</div>
            <div className="text-sm text-brand-600">Sin compromiso</div>
          </div>
          
          <div className="text-center p-4 bg-brand-50 rounded-xl border border-brand-200">
            <div className="text-3xl mb-2">✓</div>
            <div className="font-bold text-brand-900">Garantía</div>
            <div className="text-sm text-brand-600">Oficial</div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto space-y-6 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif text-brand-900 mb-4">
              Preguntas sobre Presupuestos
            </h2>
            <p className="text-brand-700">
              Resolvemos tus dudas más comunes
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: '¿Cuánto tarda en llegar el presupuesto?',
                answer: 'Nos comprometemos a enviarte un presupuesto detallado en menos de 24 horas laborables. En muchos casos, podemos responder el mismo día.'
              },
              {
                question: '¿El presupuesto tiene algún coste?',
                answer: 'No, todos nuestros presupuestos son completamente gratuitos y sin ningún tipo de compromiso. Solo pagarás si decides contratar nuestros servicios.'
              },
              {
                question: '¿Qué información necesitan para el presupuesto?',
                answer: 'Cuéntanos qué tipo de reforma necesitas, las dimensiones aproximadas del espacio, tu ubicación en Palma y cualquier detalle específico que tengas en mente. Cuanta más información nos des, más preciso será el presupuesto.'
              },
              {
                question: '¿Hacen visitas previas?',
                answer: 'Sí, para proyectos de cierta envergadura realizamos una visita gratuita a tu domicilio para evaluar el trabajo necesario y ofrecerte un presupuesto más ajustado.'
              }
            ].map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-xl border border-brand-300/30 overflow-hidden group hover:border-brand-400 transition-all hover:shadow-md"
              >
                <summary className="cursor-pointer p-6 font-semibold text-brand-900 flex items-center justify-between hover:bg-brand-50 transition">
                  <span>{faq.question}</span>
                  <svg className="w-5 h-5 text-brand-500 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-brand-700 leading-relaxed">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;

// Add inline styles for animations
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes pulseSlow {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }

  .animate-fadeIn {
    animation: fadeIn 0.6s ease-out forwards;
    opacity: 0;
  }

  .animate-pulse-slow {
    animation: pulseSlow 3s ease-in-out infinite;
  }
`;
if (typeof document !== 'undefined') {
  document.head.appendChild(style);
}
