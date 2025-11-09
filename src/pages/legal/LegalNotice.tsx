import SEO from '../../components/SEO';

const LegalNotice = () => {
  return (
    <>
      <SEO
        title="Aviso Legal"
        description="Aviso legal y condiciones de uso del sitio web de Rovedra S.L."
        canonical="https://reformasrovedra.es/legal/legal-notice"
      />

      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-serif text-brand-900 mb-8">
          Aviso Legal
        </h1>

        <div className="prose prose-lg max-w-none space-y-6 text-brand-700">
          <section>
            <h2 className="text-2xl font-serif text-brand-900 mb-4">Datos Identificativos</h2>
            <p>
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la 
              Información y Comercio Electrónico (LSSICE), se informa de los siguientes datos:
            </p>
            <div className="bg-brand-100 p-6 rounded-xl space-y-2">
              <p><strong>Denominación social:</strong> ROVEDRA S.L.</p>
              <p><strong>NIF:</strong> B-XXXXXXXX (pendiente de completar)</p>
              <p><strong>Domicilio social:</strong> Palma de Mallorca, Islas Baleares, España</p>
              <p><strong>Correo electrónico:</strong> info@reformasrovedra.es</p>
              <p><strong>Teléfono:</strong> +34 XXX XXX XXX (pendiente de completar)</p>
              <p><strong>Actividad:</strong> Reformas integrales, cocinas y baños</p>
              <p><strong>Registro Mercantil:</strong> (pendiente de completar)</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-900 mb-4">Objeto</h2>
            <p>
              El presente Aviso Legal regula el uso y utilización del sitio web <strong>reformasrovedra.es</strong>, 
              del que es titular ROVEDRA S.L.
            </p>
            <p>
              La navegación por el sitio web atribuye la condición de usuario del mismo e implica la aceptación plena 
              y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-900 mb-4">Condiciones de Uso</h2>
            <p>
              El acceso y utilización del sitio web se rige por la legalidad vigente y por el principio de buena fe. 
              El usuario se compromete a hacer un uso correcto del sitio web, de conformidad con la Ley y el presente 
              Aviso Legal.
            </p>
            <p>
              <strong>Queda expresamente prohibido:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Realizar acciones que puedan dañar, inutilizar o sobrecargar el sitio web</li>
              <li>Introducir o difundir virus informáticos o cualquier sistema que pueda dañar el sitio</li>
              <li>Intentar acceder a áreas restringidas del sitio web</li>
              <li>Utilizar el sitio con fines ilegales o contrarios a la buena fe</li>
              <li>Reproducir, copiar o distribuir contenidos sin autorización</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-900 mb-4">Propiedad Intelectual e Industrial</h2>
            <p>
              Todos los contenidos del sitio web, incluyendo sin limitación, textos, fotografías, gráficos, imágenes, 
              iconos, tecnología, software, así como su diseño gráfico y códigos fuente, son propiedad de ROVEDRA S.L. 
              o de terceros que han autorizado su uso.
            </p>
            <p>
              Quedan reservados todos los derechos sobre los mismos, quedando expresamente prohibida la reproducción, 
              distribución o comunicación pública de la totalidad o parte de los contenidos sin autorización previa.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-900 mb-4">Exclusión de Garantías y Responsabilidad</h2>
            <p>
              ROVEDRA S.L. no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza 
              que pudieran ocasionar, a título enunciativo:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Errores u omisiones en los contenidos</li>
              <li>Falta de disponibilidad del sitio web o transmisión de virus</li>
              <li>Presencia de virus o programas maliciosos en los contenidos</li>
              <li>Uso ilícito, negligente o fraudulento del sitio web</li>
            </ul>
            <p>
              ROVEDRA S.L. se reserva el derecho a suspender temporalmente el acceso al sitio web por operaciones 
              de mantenimiento, reparación o mejora.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-900 mb-4">Enlaces a Terceros</h2>
            <p>
              El sitio web puede contener enlaces a sitios web de terceros. ROVEDRA S.L. no asume ninguna 
              responsabilidad sobre el contenido, exactitud o funcionamiento de dichos sitios web externos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-900 mb-4">Modificaciones</h2>
            <p>
              ROVEDRA S.L. se reserva el derecho de efectuar sin previo aviso las modificaciones que considere 
              oportunas en su sitio web, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que 
              se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-900 mb-4">Legislación Aplicable y Jurisdicción</h2>
            <p>
              Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier 
              controversia que pudiera suscitarse con ocasión de la visita al sitio web o del uso de los servicios 
              que en él se puedan ofertar, ROVEDRA S.L. y el usuario acuerdan someterse a los Juzgados y Tribunales 
              de Palma de Mallorca, Islas Baleares, España.
            </p>
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

export default LegalNotice;

