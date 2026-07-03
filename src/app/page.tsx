import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import Story from "@/components/Story";
import ScriptureBanner from "@/components/ScriptureBanner";
import Visit from "@/components/Visit";
import Resources from "@/components/Resources";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { SITE, mapsUrl } from "@/config/site";

const churchSchema = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: SITE.name,
  alternateName: "El Encuentro",
  url: SITE.url,
  logo: `${SITE.url}/logo.png`,
  image: `${SITE.url}/og-image.jpg`,
  description: SITE.shortDescription,
  telephone: SITE.phoneTel,
  email: SITE.email,
  hasMap: mapsUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.serviceLocation.street,
    addressLocality: "Houston",
    addressRegion: "TX",
    postalCode: "77035",
    addressCountry: "US",
  },
  founder: SITE.pastors,
  knowsLanguage: ["es", "en"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "18:00",
      closes: "20:00",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(churchSchema) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <Story />
        <ScriptureBanner />
        <Visit />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
