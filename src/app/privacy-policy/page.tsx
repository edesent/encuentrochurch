import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import PrivacyPolicyContent from "@/components/PrivacyPolicyContent";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Conozca cómo Encuentro Church recopila, usa, comparte y protege la información personal de los visitantes de encuentrochurch.org.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Encuentro Church"
          title="Política de Privacidad"
          subtitle="Cómo cuidamos la información personal que usted comparte con nosotros."
        />
        <section className="bg-cream py-14 sm:py-20">
          <div className="mx-auto max-w-4xl px-6">
            <PrivacyPolicyContent />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
