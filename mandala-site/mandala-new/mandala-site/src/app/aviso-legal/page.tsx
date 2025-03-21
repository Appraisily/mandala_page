import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aviso Legal y Condiciones de Uso | Mandala Ourense",
  description: "Información legal y condiciones de uso de la página web de Mandala Ourense, centro de yoga y terapias holísticas.",
}

export default function AvisoLegalPage() {
  return (
    <main className="container-custom py-12 max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-heading font-semibold text-brand-purple mb-8">
        Aviso Legal y Condiciones de Uso
      </h1>

      <section className="prose prose-lg max-w-none">
        <h2 className="text-xl md:text-2xl font-heading font-medium text-brand-teal mt-8 mb-4">
          1. Datos del Titular/Responsable del Sitio Web (LSSI-CE)
        </h2>
        <p>
          En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los datos identificativos de los responsables de este sitio web:
        </p>
        <p>
          <strong>Responsable Conjunto (Corresponsables):</strong>
        </p>
        <ul>
          <li>
            <strong>Denominación Social:</strong> Alberto Cremades Díaz<br />
            <strong>NIF:</strong> 34990341G<br />
            <strong>Domicilio:</strong> C/ Dr. Marañón 2, entresuelo. 32005 - Ourense
          </li>
          <li className="mt-4">
            <strong>Denominación Social:</strong> Luz Iglesias Araujo<br />
            <strong>NIF:</strong> 44448549Z<br />
            <strong>Domicilio:</strong> C/ Dr. Marañón 2, entresuelo. 32005 - Ourense
          </li>
          <li className="mt-4">
            <strong>Denominación Social:</strong> Yolanda Pérez Sierra<br />
            <strong>NIF:</strong> 44470700Q<br />
            <strong>Domicilio:</strong> C/ Dr. Marañón 2, entresuelo. 32005 - Ourense
          </li>
          <li className="mt-4">
            <strong>Denominación Social:</strong> Iria Celtia González Domínguez<br />
            <strong>NIF:</strong> 76720316K<br />
            <strong>Domicilio:</strong> C/ Dr. Marañón 2, entresuelo. 32005 - Ourense
          </li>
        </ul>
        <p>
          <strong>Datos de Contacto Generales:</strong>
        </p>
        <ul>
          <li><strong>Dirección:</strong> C/ Dr. Marañón 2, entresuelo. 32005 - Ourense</li>
          <li><strong>Correo Electrónico General:</strong> info@mandalaourense.com</li>
          <li><strong>Nombre Comercial:</strong> Mandala</li>
        </ul>
        <p>
          <strong>Teléfonos de Contacto (Información e Inscripciones en Actividades):</strong>
        </p>
        <ul>
          <li>Alberto: 675091191</li>
          <li>Luz: 627305963</li>
          <li>Yolanda: 679144037</li>
          <li>Iria: 644503174</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-heading font-medium text-brand-teal mt-8 mb-4">
          2. Objeto y Aceptación (Condiciones de Uso)
        </h2>
        <p>
          El presente sitio web tiene como finalidad principal informar a usuarios, potenciales clientes y clientes sobre las actividades y servicios ofrecidos por Mandala. Asimismo, se proporciona contenido informativo que pueda ser de interés para los usuarios.
        </p>
        <p>
          El acceso y uso de este sitio web atribuye la condición de Usuario e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal y Condiciones de Uso, así como en la Política de Privacidad y la Política de Cookies (accesibles a través de enlaces específicos en el sitio web).
        </p>
        <p>
          Si el Usuario no está de acuerdo con alguna de las condiciones aquí establecidas, no debe acceder ni utilizar este sitio web.
        </p>

        <h2 className="text-xl md:text-2xl font-heading font-medium text-brand-teal mt-8 mb-4">
          3. Condiciones de Acceso y Utilización
        </h2>
        <p>
          <strong>Acceso Libre y Gratuito:</strong> El acceso al sitio web es libre y gratuito para todos los Usuarios. No obstante, algunas secciones o servicios pueden estar restringidos a clientes registrados, requiriendo un identificador de usuario y contraseña.
        </p>
        <p>
          <strong>Uso Diligente y Lícito:</strong> El Usuario se compromete a utilizar el sitio web, sus contenidos y servicios de conformidad con la Ley, las presentes Condiciones de Uso, las buenas costumbres y el orden público. Queda prohibido el uso del sitio web con fines ilícitos, lesivos para los derechos e intereses de terceros, o que de cualquier forma puedan dañar, inutilizar, sobrecargar, deteriorar o impedir la normal utilización del sitio web.
        </p>
        <p>
          <strong>Acceso a Zonas Restringidas:</strong> El Usuario no debe intentar acceder a las secciones de acceso restringido sin la debida autorización y credenciales. El acceso no autorizado puede ser considerado una infracción y estará sujeto a las acciones legales pertinentes.
        </p>
        <p>
          <strong>Veracidad de la Información:</strong> El Usuario garantiza la veracidad y exactitud de los datos que proporcione a través de los formularios de contacto o registro, siendo responsable de mantener dicha información actualizada.
        </p>

        <h2 className="text-xl md:text-2xl font-heading font-medium text-brand-teal mt-8 mb-4">
          4. Modificaciones del Sitio Web y Condiciones de Acceso
        </h2>
        <p>
          Mandala se reserva el derecho a modificar, unilateralmente y en cualquier momento, la presentación y configuración del sitio web, así como las presentes Condiciones de Uso. Dichas modificaciones serán debidamente publicadas en el sitio web. Asimismo, se reserva el derecho a interrumpir el acceso al sitio web de forma temporal o definitiva, sin previo aviso, por razones técnicas, de seguridad, mantenimiento o cualquier otra causa justificada.
        </p>

        <h2 className="text-xl md:text-2xl font-heading font-medium text-brand-teal mt-8 mb-4">
          5. Contenidos del Sitio Web y Exención de Responsabilidad
        </h2>
        <p>
          <strong>Carácter Informativo:</strong> La información contenida en este sitio web tiene carácter meramente informativo y divulgativo, y en ningún caso constituye asesoramiento profesional de ningún tipo (legal, médico, etc.). Mandala no se responsabiliza de las decisiones que el Usuario pueda tomar basándose en la información contenida en este sitio web sin la debida consulta profesional.
        </p>
        <p>
          <strong>Actualización de Contenidos:</strong> Mandala realiza sus mejores esfuerzos para mantener la información del sitio web actualizada, pero no garantiza la exactitud, integridad o actualidad de los contenidos.
        </p>
        <p>
          <strong>Opiniones y Contenidos de Terceros:</strong> Las opiniones vertidas en artículos o contenidos de terceros no reflejan necesariamente la opinión de Mandala.
        </p>
        <p>
          <strong>Enlaces Externos (Links):</strong>
        </p>
        <ul>
          <li>El sitio web puede contener enlaces a sitios web de terceros sobre los que Mandala no tiene control alguno. La inclusión de estos enlaces no implica la aprobación, recomendación o patrocinio por parte de Mandala de dichos sitios web ni de sus contenidos.</li>
          <li>Mandala no se hace responsable de los contenidos, funcionamiento, políticas de privacidad o prácticas de los sitios web enlazados. El Usuario accede a estos sitios bajo su propia responsabilidad y riesgo.</li>
          <li>La función de los enlaces es exclusivamente informativa, facilitando al Usuario el acceso a otras fuentes de información en Internet.</li>
          <li>Mandala no garantiza la ausencia de virus u otros elementos dañinos en los sitios web enlazados y declina cualquier responsabilidad por los daños que puedan derivarse del acceso o uso de dichos sitios.</li>
        </ul>
        <p>
          <strong>Uso Adecuado de Contenidos:</strong> El Usuario se compromete a hacer un uso adecuado de los contenidos y servicios ofrecidos en el sitio web, absteniéndose de:
        </p>
        <ul>
          <li>Utilizar los contenidos con fines ilícitos, ilegales o contrarios a la buena fe y al orden público.</li>
          <li>Reproducir, copiar, distribuir, transformar o modificar los contenidos, salvo autorización expresa de Mandala.</li>
          <li>Suprimir, manipular o alterar el "copyright" y demás datos identificativos de los derechos de propiedad intelectual o industrial de Mandala o de terceros.</li>
          <li>Introducir o difundir en la red virus informáticos o cualesquiera otros sistemas físicos o lógicos que sean susceptibles de provocar daños en los sistemas informáticos de Mandala, de sus proveedores o de terceros.</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-heading font-medium text-brand-teal mt-8 mb-4">
          6. Propiedad Intelectual e Industrial
        </h2>
        <p>
          Todos los derechos de propiedad intelectual e industrial del sitio web y de sus contenidos (a título enunciativo, imágenes, sonido, audio, vídeo, software, textos, marcas, logotipos, diseño, etc.) son titularidad de Mandala o de terceros que han autorizado su uso.
        </p>
        <p>
          Queda expresamente prohibida la reproducción, distribución, comunicación pública, transformación o modificación, total o parcial, de cualquier contenido del sitio web sin la previa autorización escrita de Mandala.
        </p>

        <h2 className="text-xl md:text-2xl font-heading font-medium text-brand-teal mt-8 mb-4">
          7. Protección de Datos Personales
        </h2>
        <p>
          Mandala cumple con la normativa vigente en materia de protección de datos personales, incluyendo el Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica de Protección de Datos y garantía de los derechos digitales (LOPDGDD).
        </p>
        <p>
          La información detallada sobre el tratamiento de datos personales realizado por Mandala se encuentra en la Política de Privacidad. Se recomienda al Usuario leer atentamente la Política de Privacidad antes de facilitar sus datos personales a través del sitio web.
        </p>

        <h2 className="text-xl md:text-2xl font-heading font-medium text-brand-teal mt-8 mb-4">
          8. Cookies
        </h2>
        <p>
          Este sitio web utiliza cookies propias y de terceros. La información detallada sobre el uso de cookies se encuentra en la Política de Cookies. Se recomienda al Usuario leer atentamente la Política de Cookies para conocer qué tipo de cookies se utilizan, con qué finalidad y cómo puede configurarlas o desactivarlas.
        </p>

        <h2 className="text-xl md:text-2xl font-heading font-medium text-brand-teal mt-8 mb-4">
          9. Seguridad
        </h2>
        <p>
          Mandala adopta las medidas de seguridad técnicas y organizativas necesarias para proteger los datos personales de los Usuarios y evitar su alteración, pérdida, tratamiento o acceso no autorizado, habida cuenta del estado de la tecnología, la naturaleza de los datos almacenados y los riesgos a que están expuestos.
        </p>

        <h2 className="text-xl md:text-2xl font-heading font-medium text-brand-teal mt-8 mb-4">
          10. Derecho de Exclusión
        </h2>
        <p>
          Mandala se reserva el derecho a denegar o retirar el acceso al sitio web y/o a los servicios ofrecidos sin necesidad de preaviso, a instancia propia o de un tercero, a aquellos Usuarios que incumplan las presentes Condiciones de Uso.
        </p>

        <h2 className="text-xl md:text-2xl font-heading font-medium text-brand-teal mt-8 mb-4">
          11. Legislación Aplicable y Jurisdicción
        </h2>
        <p>
          Las presentes Condiciones de Uso se rigen en todos y cada uno de sus extremos por la legislación española.
        </p>
        <p>
          Para la resolución de cualquier controversia o conflicto que pueda surgir con motivo del uso del sitio web, el Usuario y Mandala se someten a los Juzgados y Tribunales de Ourense, renunciando expresamente a cualquier otro fuero que pudiera corresponderles.
        </p>

        <h2 className="text-xl md:text-2xl font-heading font-medium text-brand-teal mt-8 mb-4">
          12. Contacto y Comunicación de Actividades Ilícitas
        </h2>
        <p>
          Si cualquier Usuario o tercero considera que existen hechos o circunstancias que revelen el carácter ilícito de la utilización de cualquier contenido y/o de la realización de cualquier actividad en las páginas web incluidas o accesibles a través del sitio web, le rogamos que se ponga en contacto con Mandala a través de la dirección de correo electrónico info@mandalaourense.com, o a través de los datos de contacto indicados en el apartado 1 de este Aviso Legal.
        </p>
      </section>
    </main>
  )
}