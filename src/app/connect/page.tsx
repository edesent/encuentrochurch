import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Encuentro Connect",
  description:
    "Encuentro Connect is the bilingual digital pathway for visitors, membership, baptism, volunteers, prayer requests, spiritual gifts, events, and giving at Encuentro Church.",
  alternates: { canonical: "/connect" },
};

const pathways = [
  {
    title: "Visitante",
    subtitle: "Visitor",
    body: "Registra tu visita, comparte cómo podemos orar por ti y da tu próximo paso.",
  },
  {
    title: "Membresía",
    subtitle: "Membership",
    body: "Inicia el proceso para conocer la visión, la fe y la familia de Encuentro Church.",
  },
  {
    title: "Bautismo",
    subtitle: "Baptism",
    body: "Cuéntanos tu historia y permite que nuestro equipo te ayude a prepararte.",
  },
  {
    title: "Voluntarios",
    subtitle: "Volunteers",
    body: "Descubre un lugar para servir con tus dones, experiencia y disponibilidad.",
  },
];

const dashboardItems = [
  "Decisiones espirituales",
  "Peticiones de oración",
  "Seguimiento de invitados",
  "Asistencia y grupos",
  "Voluntarios y eventos",
  "Dones espirituales y ubicación ministerial",
];

export default function ConnectPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Encuentro Connect"
          title="Visitante o membresía"
          subtitle="Una ruta bilingüe para conectar visitantes, miembros, bautismos, voluntarios, oración, grupos, eventos y próximos pasos."
        />

        <section className="bg-cream py-14 sm:py-18">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <p className="font-script text-4xl text-green-dark">Bienvenido a Encuentro Connect</p>
                <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
                  Un solo lugar para dar tu próximo paso.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-body">
                  Usa esta página para abrir la aplicación de Encuentro Church desde el sitio web, escanear un código QR en los materiales impresos o compartir el enlace con visitantes y miembros.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={SITE.links.connectFlow}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-green px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-green/25 transition-all hover:-translate-y-0.5 hover:bg-green-dark"
                  >
                    Abrir la aplicación
                  </a>
                  <a
                    href={SITE.links.donate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border-2 border-navy/20 px-8 py-4 text-sm font-semibold text-navy transition-all hover:-translate-y-0.5 hover:border-navy"
                  >
                    Donar en línea
                  </a>
                  <a
                    href={SITE.links.spiritualGifts}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border-2 border-navy/20 px-8 py-4 text-sm font-semibold text-navy transition-all hover:-translate-y-0.5 hover:border-navy"
                  >
                    Test de dones
                  </a>
                </div>

                <div className="mt-10 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-navy/10">
                  <h3 className="font-display text-xl font-bold text-navy">Panel pastoral y seguimiento</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">
                    Esta ruta prepara el sistema para que el equipo pueda revisar actividad, oración, decisiones, seguimiento y colocación ministerial desde una experiencia centralizada.
                  </p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {dashboardItems.map((item) => (
                      <div key={item} className="rounded-2xl bg-cream px-4 py-3 text-sm font-semibold text-navy">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-xl">
                <div className="flex items-center justify-between gap-4 bg-navy px-5 py-4 text-white">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-green-light">App integrada</p>
                    <h3 className="font-display text-xl font-bold">Encuentro Connect Flow</h3>
                  </div>
                  <a
                    href={SITE.links.connectFlow}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-green px-4 py-2 text-xs font-semibold text-white transition hover:bg-green-dark"
                  >
                    Abrir
                  </a>
                </div>
                <div className="bg-white">
                  <div className="relative overflow-hidden bg-cream">
                    <img
                      src="/images/prospecto-5.jpg"
                      alt="Proceso de conexión y discipulado de Encuentro Church"
                      className="h-[520px] w-full object-cover object-center opacity-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/25 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-green-light">
                        Proceso de conexión
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-extrabold sm:text-3xl">
                        Encuentro → Conectar → Crecer → Servir → Enviar
                      </h3>
                      <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/80">
                        Esta imagen cubre el área donde la app no puede mostrarse dentro del sitio. Los visitantes todavía pueden abrir la aplicación directamente con el botón.
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-navy/10 bg-cream px-5 py-5 text-center">
                    <p className="text-sm text-body">
                      Para llenar el formulario y continuar el proceso, abre la aplicación directamente.
                    </p>
                    <a
                      href={SITE.links.connectFlow}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex rounded-full bg-green px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-dark"
                    >
                      Abrir Encuentro Connect Flow
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-cream-dark py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-green-dark">
                <span className="brand-rule" />
                Ruta digital
                <span className="brand-rule" />
              </p>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
                Visitor → Membership → Baptism → Volunteer
              </h2>
              <p className="mt-4 text-body">
                Una ruta clara ayuda a cada persona a pasar de una primera visita a comunidad, discipulado y servicio.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {pathways.map((item, index) => (
                <article key={item.title} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-navy/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green text-lg font-bold text-white">
                    {index + 1}
                  </div>
                  <h3 className="mt-5 font-display text-xl font-extrabold text-navy">{item.title}</h3>
                  <p className="text-sm font-semibold text-green-dark">{item.subtitle}</p>
                  <p className="mt-3 text-sm leading-relaxed text-body">{item.body}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-3xl bg-navy p-6 text-white shadow-xl sm:p-8">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="font-script text-3xl text-green-light">QR code listo para impresión</p>
                  <h3 className="mt-2 font-display text-2xl font-extrabold">Usa este enlace en tarjetas, folletos y anuncios.</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75">
                    Para tus materiales impresos, el código QR debe dirigir a encuentrochurch.org/connect. Esa página mantiene el diseño profesional de la iglesia y abre la aplicación de conexión.
                  </p>
                </div>
                <Link href="/connect" className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-navy transition hover:-translate-y-0.5">
                  encuentrochurch.org/connect
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
