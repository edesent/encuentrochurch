import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Conéctate",
  description:
    "Ponte en contacto con Encuentro Church en Houston. Llámanos, escríbenos por WhatsApp o envíanos un mensaje — el pastor Rick te responderá personalmente.",
  alternates: { canonical: "/contact-us" },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Conéctate"
          title="Hablemos"
          subtitle={`¿Preguntas, peticiones de oración o quieres visitarnos? Escríbenos o llámanos al ${SITE.phone}.`}
        />
        <Contact id="contacto" />
      </main>
      <Footer />
    </>
  );
}
