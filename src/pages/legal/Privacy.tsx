import SEO from '../../components/SEO';

const Privacy = () => {
  return (
    <>
      <SEO
        title="Política de Privacidad"
        description="Política de privacidad y protección de datos de Rovedra S.L."
        canonical="https://reformasrovedra.es/legal/privacy"
      />

      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-serif text-brand-900 mb-8">
          Política de Privacidad
        </h1>

        <div className="prose prose-lg max-w-none space-y-6 text-brand-700">
          <section>
            <h2 className="text-2xl font-serif text-brand-900 mb-4">Información al Usuario</h2>
            <p>
              <strong>ROVEDRA S.L.</strong>, como Responsable del Tratamiento, le informa que, según lo dispuesto en el 
              Reglamento (UE) 2016/679, de 27 de abril, (RGPD) y en la L.O. 3/2018, de 5 de diciembre, de Protección de 
              Datos y Garantía de los Derechos Digitales (LOPDGDD), trataremos su datos tal y como reflejamos en la 
              presente Política de Privacidad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-900 mb-4">Responsable del Tratamiento</h2>
            <div className="bg-brand-100 p-6 rounded-xl">
              <p><strong>Denominación social:</strong> ROVEDRA S.L.</p>
              <p><strong>Dirección:</strong> Palma de Mallorca, Islas Baleares, España</p>
              <p><strong>Email de contacto:</strong> rovedra.sl@gmail.com</p>
              <p><strong>Actividad:</strong> Reformas integrales, cocinas y baños</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-900 mb-4">Finalidad del Tratamiento de Datos</h2>
            <p>¿Con qué finalidad trataremos sus datos personales?</p>
            <p>
              En ROVEDRA S.L. trataremos sus datos para las siguientes finalidades:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Gestionar las solicitudes de presupuesto y contacto recibidas a través del formulario web</li>
              <li>Responder a sus consultas y proporcionarle información sobre nuestros servicios</li>
              <li>Elaborar presupuestos personalizados de reforma</li>
              <li>Gestionar la relación comercial y contractual</li>
              <li>Enviar comunicaciones comerciales si ha prestado su consentimiento</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-900 mb-4">Legitimación y Conservación</h2>
            <p>
              <strong>Base legal:</strong> El tratamiento de sus datos se basa en el consentimiento del interesado 
              (art. 6.1.a RGPD) y en la ejecución de un contrato (art. 6.1.b RGPD).
            </p>
            <p>
              <strong>Conservación:</strong> Los datos personales serán conservados mientras se mantenga la relación 
              comercial o durante los años necesarios para cumplir con las obligaciones legales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-900 mb-4">Destinatarios de los Datos</h2>
            <p>
              Sus datos no serán comunicados a terceros, salvo obligación legal. No se realizan transferencias 
              internacionales de datos.
            </p>
            <p>
              Los datos pueden ser accedidos por:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Proveedores de servicios de hosting y mantenimiento web</li>
              <li>Plataformas de gestión de formularios (Formspree)</li>
              <li>Gestorías para cumplimiento de obligaciones fiscales y laborales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-900 mb-4">Derechos del Usuario</h2>
            <p>
              Cualquier persona tiene derecho a obtener confirmación sobre si en ROVEDRA S.L. estamos tratando 
              datos personales que les conciernan o no.
            </p>
            <p>
              <strong>Puede ejercer los siguientes derechos:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Derecho de acceso:</strong> Conocer qué datos estamos tratando</li>
              <li><strong>Derecho de rectificación:</strong> Modificar datos inexactos</li>
              <li><strong>Derecho de supresión:</strong> Solicitar la eliminación de sus datos</li>
              <li><strong>Derecho de oposición:</strong> Oponerse al tratamiento de sus datos</li>
              <li><strong>Derecho a la limitación:</strong> Solicitar la limitación del tratamiento</li>
              <li><strong>Derecho a la portabilidad:</strong> Recibir sus datos en formato estructurado</li>
            </ul>
            <p className="mt-4">
              Para ejercer estos derechos, puede dirigirse a: <strong>rovedra.sl@gmail.com</strong>
            </p>
            <p>
              También tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos 
              (www.aepd.es).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-900 mb-4">Seguridad de los Datos</h2>
            <p>
              ROVEDRA S.L. ha adoptado medidas técnicas y organizativas necesarias para garantizar la seguridad de 
              los datos de carácter personal y evitar su alteración, pérdida, tratamiento o acceso no autorizado.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-900 mb-4">Menores de Edad</h2>
            <p>
              Los servicios de ROVEDRA S.L. están dirigidos a mayores de 18 años. No recogemos de forma consciente 
              información de menores de edad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-brand-900 mb-4">Actualización de la Política</h2>
            <p>
              ROVEDRA S.L. se reserva el derecho de modificar la presente Política de Privacidad para adaptarla a 
              novedades legislativas o jurisprudenciales, así como a prácticas de la industria.
            </p>
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

export default Privacy;

