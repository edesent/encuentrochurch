// Central site configuration for Encuentro Church.
// Edit copy, links, service times, and images here — components read from this.

export const SITE = {
  name: "Encuentro Church",
  wordmark: "EL ENCUENTRO",
  tagline: "Iglesia Bilingüe · A Bilingual Church",
  script: "Un lugar para todos.",
  heroLine: "UN LUGAR PARA ENCONTRAR A DIOS Y COMUNIDAD",
  heroSub:
    "Una nueva iglesia hispana bilingüe en el suroeste de Houston. Ven tal como eres — aquí tienes un lugar.",
  heroSubEn: "A new bilingual church for southwest Houston. Come as you are.",
  description:
    "Encuentro Church es una nueva iglesia hispana bilingüe en el suroeste de Houston. Únete a nosotros los domingos a las 6:00 PM para tener un encuentro con Dios y con la comunidad. A bilingual church plant in Houston, TX.",
  shortDescription:
    "Iglesia hispana bilingüe en Houston, TX. Domingos 6:00 PM.",
  url: "https://encuentrochurch.org",
  email: "pastor@encuentrochurch.org",
  phone: "(832) 840-2066",
  phoneTel: "+18328402066",
  whatsapp: "https://wa.me/18328402066",

  pastors: "Pastor Rick y Maribel Vasquez",

  mission:
    "Guiar a las personas a una relación creciente con Jesucristo por medio de la adoración, el discipulado, la comunión y el alcance compasivo.",

  rickBio:
    "Rick Vasquez es un plantador de iglesias con décadas de experiencia ministerial en evangelismo, ministerio carcelario, discipulado y plantación bilingüe de iglesias. Hoy sirve como plantador de Encuentro Church en Houston junto a su esposa Maribel.",

  // Discipleship path from the prospectus (Página 5)
  ministryPath: [
    { step: "Encuentro", body: "Conocen a Jesús mediante la adoración y el evangelio." },
    { step: "Conectar", body: "Construyen relaciones y pertenecen a la familia de la iglesia." },
    { step: "Crecer", body: "Aprenden la Palabra de Dios y crecen como discípulos." },
    { step: "Servir", body: "Usan sus dones para bendecir a la iglesia y a la comunidad." },
    { step: "Enviar", body: "Viven en misión y hacen discípulos." },
  ],

  // Full church-planting prospectus (the branded deck)
  prospectus_pages: [
    { src: "/images/prospecto-1.jpg", title: "Prospecto de Plantación" },
    { src: "/images/prospecto-2.jpg", title: "¿Por qué Houston 77035?" },
    { src: "/images/prospecto-4.jpg", title: "Misión, Visión y Valores" },
    { src: "/images/prospecto-5.jpg", title: "Ruta Ministerial y Alcance" },
    { src: "/images/prospecto-6.jpg", title: "Metas del Primer Año" },
    { src: "/images/prospecto-7.jpg", title: "Cómo Colaborar" },
    { src: "/images/prospecto-8.jpg", title: "Liderazgo y Contacto" },
  ],

  story: [
    "Pastor Rick y Maribel han servido juntos desde el 11 de noviembre de 2011, plantando su primera iglesia —conocida en aquel entonces como Vision City Church, la cual se convirtió en Crosspoint Bellaire Español en 2014. Allí sirvieron juntos durante 10 años, hasta que el pastor Rick fue hospitalizado tras ser diagnosticado con Parkinson e insuficiencia renal, lo que le impidió continuar liderando el campo hispano.",
    "Tras dos años de cuidados médicos, el pastor Rick y Maribel se sienten lo suficientemente estables para continuar, en obediencia al llamado de Dios para la comunidad bilingüe de Houston, y lanzar una nueva plantación de iglesia: «El Encuentro». Sienten una profunda pasión por las almas y por ver a las familias convertirse en discípulos de Jesucristo, confiando siempre en la gracia del Espíritu Santo para brindar propósito y esperanza.",
    "Es un gozo para ellos invitarles a unirse a esta nueva obra y, juntos, tener un encuentro con Dios y con la comunidad.",
  ],

  service: {
    day: "Domingos",
    dayEn: "Sundays",
    time: "6:00 PM",
    parentClass: "5:00 PM",
  },

  serviceLocation: {
    label: "Lugar de reunión",
    venue: "Capilla de Willow Meadows Baptist Church",
    street: "4300 W Bellfort Ave",
    city: "Houston, TX 77035",
  },
  office: {
    label: "Oficina",
    street: "7520 Hillcroft St",
    city: "Houston, TX 77081",
  },

  // Brand colors (kept in sync with globals.css)
  backgroundColor: "#F5F2EB",
  themeColor: "#12345C",

  // External links (kept identical to the current site)
  links: {
    connectFlow: "https://encuentro-connect-flow.base44.app/",
    donate: "https://donorbox.org/encuentro-church",
    spiritualGifts: "https://dones-vida-guia.base44.app/",
    parentingClass: "http://spanishparentingclass.org/",
    prospectus:
      "https://acrobat.adobe.com/id/urn:aaid:sc:us:e335d180-f22e-4753-bf92-7af7b3079092",
    inviteFlyer:
      "https://drive.google.com/file/d/17bFLCNNZWuxc9CSTtBWTI-6sKhStzVPL/view?usp=sharing",
    facebook: "https://www.facebook.com/",
  },

  scripture: {
    ref: "Mateo 11:28-29",
    text:
      "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar. Llevad mi yugo sobre vosotros, y aprended de mí, que soy manso y humilde de corazón; y hallaréis descanso para vuestras almas.",
  },

  // Three pillars — straight from the church's brand
  pillars: [
    {
      key: "dios",
      title: "Un Encuentro con Dios",
      body: "Adoramos juntos y buscamos la presencia de Dios que transforma vidas y familias.",
      icon: "hands" as const,
    },
    {
      key: "palabra",
      title: "Un Encuentro con Su Palabra",
      body: "Abrimos la Biblia cada semana — enseñanza clara y práctica para la vida real.",
      icon: "book" as const,
    },
    {
      key: "pueblo",
      title: "Un Encuentro con Su Pueblo",
      body: "Una familia de la fe donde nadie camina solo. Hay lugar para ti.",
      icon: "people" as const,
    },
  ],
} as const;

export const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(
  `${SITE.serviceLocation.street}, ${SITE.serviceLocation.city}`,
)}`;

export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  `${SITE.serviceLocation.street}, ${SITE.serviceLocation.city}`,
)}&output=embed`;
