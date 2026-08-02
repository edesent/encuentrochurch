import { SITE } from "@/config/site";

const sections = [
  {
    title: "1. Información que recopilamos",
    body: (
      <>
        <p>
          Podemos recibir la información que usted decide compartir con nosotros,
          como su nombre, teléfono, correo electrónico, mensaje, petición de
          oración, interés en membresía, bautismo, voluntariado, eventos o
          donaciones.
        </p>
        <p>
          El formulario de contacto de este sitio prepara un correo en la
          aplicación de correo de su dispositivo; Encuentro Church recibe esa
          información únicamente cuando usted envía el correo. Nuestros
          proveedores de alojamiento también pueden procesar datos técnicos
          básicos, como dirección IP, tipo de navegador, páginas visitadas y
          registros de seguridad.
        </p>
      </>
    ),
  },
  {
    title: "2. Cómo usamos su información",
    body: (
      <p>
        Usamos la información para responder a sus preguntas y peticiones de
        oración, ayudarle a conectarse con la iglesia, coordinar actividades y
        ministerios, procesar donaciones mediante proveedores autorizados,
        mantener la seguridad del sitio, cumplir obligaciones legales y
        mejorar nuestros servicios. La información sensible que usted comparta
        voluntariamente para recibir cuidado ministerial se limita a ese
        propósito.
      </p>
    ),
  },
  {
    title: "3. Compartir información",
    body: (
      <p>
        No vendemos ni alquilamos su información personal. Podemos compartir la
        información solamente con líderes o voluntarios autorizados que la
        necesiten para atender su solicitud, con proveedores que prestan
        servicios para la iglesia, cuando usted lo autorice, o cuando la ley lo
        exija. Procuramos limitar el acceso a lo necesario para cada propósito.
      </p>
    ),
  },
  {
    title: "4. Servicios de terceros",
    body: (
      <p>
        Este sitio puede enlazar o conectarse con servicios externos, incluidos
        correo electrónico, WhatsApp, Google Translate, Google Maps, Donorbox y
        aplicaciones de conexión o dones espirituales. Cuando usted utiliza
        esos servicios, sus propias políticas de privacidad y prácticas de
        datos también se aplican. Encuentro Church no controla las prácticas de
        sitios externos.
      </p>
    ),
  },
  {
    title: "5. Cookies y preferencias",
    body: (
      <p>
        El sitio puede usar cookies o almacenamiento local para recordar su
        idioma y permitir funciones esenciales. Algunos proveedores externos
        pueden colocar sus propias cookies. Usted puede borrar o bloquear
        cookies desde la configuración de su navegador, aunque algunas
        funciones podrían dejar de trabajar correctamente.
      </p>
    ),
  },
  {
    title: "6. Conservación y seguridad",
    body: (
      <p>
        Conservamos la información solo durante el tiempo razonablemente
        necesario para responder, prestar el ministerio solicitado, mantener
        registros apropiados y cumplir la ley. Aplicamos medidas razonables para
        protegerla, pero ningún sistema electrónico puede garantizar seguridad
        absoluta.
      </p>
    ),
  },
  {
    title: "7. Privacidad de menores",
    body: (
      <p>
        Este sitio no está dirigido a recopilar deliberadamente información
        personal de menores de 13 años sin el consentimiento de un padre o
        tutor. Si cree que un menor nos proporcionó información de esa manera,
        comuníquese con nosotros para solicitar su eliminación.
      </p>
    ),
  },
  {
    title: "8. Sus opciones",
    body: (
      <p>
        Puede pedir acceso, corrección o eliminación de la información personal
        que Encuentro Church mantiene sobre usted, o solicitar que dejemos de
        enviarle comunicaciones. Algunas solicitudes pueden estar sujetas a
        obligaciones legales o necesidades legítimas de conservación.
      </p>
    ),
  },
  {
    title: "9. Cambios a esta política",
    body: (
      <p>
        Podemos actualizar esta política cuando cambien nuestras prácticas o
        servicios. La fecha indicada abajo mostrará la revisión más reciente.
        Los cambios entran en vigor cuando se publican en esta página.
      </p>
    ),
  },
];

export default function PrivacyPolicyContent() {
  return (
    <div className="space-y-6 text-sm leading-7 text-body sm:text-base">
      <div className="rounded-2xl border border-green/20 bg-white p-5">
        <p className="font-semibold text-navy">Fecha de entrada en vigor: 2 de agosto de 2026</p>
        <p className="mt-2">
          Encuentro Church respeta su privacidad. Esta política explica cómo
          recopilamos, usamos, compartimos y protegemos la información personal
          cuando usted visita {SITE.url}, se comunica con nosotros o utiliza
          servicios enlazados desde el sitio.
        </p>
      </div>

      {sections.map((section) => (
        <section key={section.title}>
          <h2 className="font-display text-lg font-extrabold text-navy">
            {section.title}
          </h2>
          <div className="mt-2 space-y-3">{section.body}</div>
        </section>
      ))}

      <section className="rounded-2xl bg-navy p-5 text-white">
        <h2 className="font-display text-lg font-extrabold">10. Contacto</h2>
        <p className="mt-2 text-white/80">
          Para preguntas o solicitudes relacionadas con esta política, escriba
          a{" "}
          <a
            href={"mailto:" + SITE.email}
            className="font-semibold text-green-light underline underline-offset-4"
          >
            {SITE.email}
          </a>{" "}
          o llame al{" "}
          <a
            href={"tel:" + SITE.phoneTel}
            className="font-semibold text-green-light underline underline-offset-4"
          >
            {SITE.phone}
          </a>
          .
        </p>
      </section>
    </div>
  );
}
