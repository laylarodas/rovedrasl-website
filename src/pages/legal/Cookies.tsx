import SEO from '../../components/SEO';

const Cookies = () => {
  return (
    <>
      <SEO
        title="Política de Cookies"
        description="Política de cookies del sitio web de Rovedra S.L."
        canonical="https://reformasrovedra.es/legal/cookies"
      />

      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-serif text-brand-900 mb-8">
          Política de Cookies
        </h1>

        <div className="prose prose-lg max-w-none space-y-6 text-brand-700">
          <section>
            <h2 className="text-2xl font-serif text-brand-900 mb-4">¿Qué son las Cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, tablet o 
              móvil) cuando visita un sitio web. Las cookies permiten que el sitio web reconozca su dispositivo y 
              recuerde información sobre su visita, como su idioma preferido y otras opciones.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-900 mb-4">Tipos de Cookies que Utilizamos</h2>
            
            <div className="space-y-6">
              <div className="bg-brand-100 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-brand-900 mb-3">Cookies Técnicas (Necesarias)</h3>
                <p>
                  Son imprescindibles para el correcto funcionamiento del sitio web. Permiten la navegación y el uso 
                  de las diferentes opciones y servicios que existen en ella.
                </p>
                <p className="text-sm mt-2">
                  <strong>Finalidad:</strong> Gestión de sesión, seguridad, recordar preferencias básicas.
                </p>
                <p className="text-sm">
                  <strong>Duración:</strong> Sesión (se eliminan al cerrar el navegador)
                </p>
              </div>

              <div className="bg-brand-100 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-brand-900 mb-3">Cookies de Análisis</h3>
                <p>
                  Permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico de la 
                  utilización que hacen los usuarios del sitio web.
                </p>
                <p className="text-sm mt-2">
                  <strong>Proveedor:</strong> Google Analytics (si se implementa)
                </p>
                <p className="text-sm">
                  <strong>Finalidad:</strong> Análisis estadístico del uso del sitio, mejora de la experiencia.
                </p>
                <p className="text-sm">
                  <strong>Duración:</strong> Hasta 2 años
                </p>
              </div>

              <div className="bg-brand-100 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-brand-900 mb-3">Cookies de Terceros</h3>
                <p>
                  Son cookies establecidas por dominios que no son el nuestro. Actualmente utilizamos:
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li><strong>Formspree:</strong> Para el funcionamiento del formulario de contacto</li>
                  <li><strong>Vercel:</strong> Para el hosting y funcionamiento técnico del sitio</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-900 mb-4">Cookies que NO Utilizamos</h2>
            <p>
              En ROVEDRA S.L. NO utilizamos:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Cookies publicitarias:</strong> No mostramos publicidad personalizada</li>
              <li><strong>Cookies de redes sociales:</strong> No integramos plugins de redes sociales que rastreen</li>
              <li><strong>Cookies de perfilado:</strong> No creamos perfiles de usuario para marketing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-900 mb-4">Legitimación</h2>
            <p>
              Las cookies técnicas no requieren consentimiento, ya que son estrictamente necesarias para la prestación 
              del servicio solicitado.
            </p>
            <p>
              Para el resto de cookies, le solicitamos su consentimiento mediante un banner informativo que aparece 
              en su primera visita al sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-900 mb-4">Cómo Gestionar las Cookies</h2>
            <p>
              Puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de 
              las opciones de su navegador:
            </p>
            
            <div className="bg-white border border-brand-300 p-6 rounded-xl space-y-2">
              <p><strong>Google Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</p>
              <p><strong>Firefox:</strong> Opciones → Privacidad y Seguridad → Cookies</p>
              <p><strong>Safari:</strong> Preferencias → Privacidad → Cookies</p>
              <p><strong>Microsoft Edge:</strong> Configuración → Privacidad → Cookies</p>
            </div>

            <p className="mt-4">
              <strong>Importante:</strong> Si bloquea todas las cookies, algunas funcionalidades del sitio web 
              pueden verse afectadas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-900 mb-4">Más Información</h2>
            <p>
              Para más información sobre las cookies, puede consultar:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <a 
                  href="https://www.aepd.es/es/areas-de-actuacion/internet-y-redes-sociales/cookies" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-500 hover:underline"
                >
                  Agencia Española de Protección de Datos (AEPD)
                </a>
              </li>
              <li>
                <a 
                  href="https://www.allaboutcookies.org/es/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-500 hover:underline"
                >
                  All About Cookies
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-900 mb-4">Actualizaciones</h2>
            <p>
              ROVEDRA S.L. puede modificar esta Política de Cookies en función de nuevos requisitos legislativos, 
              reglamentarios, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la 
              Agencia Española de Protección de Datos.
            </p>
            <p>
              Le recomendamos revisar esta página periódicamente para estar informado de cualquier cambio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-900 mb-4">Contacto</h2>
            <p>
              Si tiene dudas sobre esta Política de Cookies, puede contactar con nosotros en:
            </p>
            <div className="bg-brand-100 p-6 rounded-xl mt-4">
              <p><strong>Email:</strong> info@reformasrovedra.es</p>
              <p><strong>Web:</strong> reformasrovedra.es</p>
            </div>
          </section>

          <section>
            <p className="text-sm text-brand-700/80 mt-8">
              <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Cookies;

