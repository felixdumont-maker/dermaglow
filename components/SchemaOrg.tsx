const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://dermaglow-lime.vercel.app";

export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "BeautySalon"],
        "@id": `${SITE_URL}/#business`,
        name: "Dermaglow by Hanane",
        description:
          "Esthéticienne certifiée à Verdun, spécialisée en soins du visage sur mesure, peelings chimiques et microneedling.",
        url: SITE_URL,
        email: "dermaglowbyhanane@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "670 de Gaspé, Appartement 305",
          addressLocality: "Verdun",
          addressRegion: "QC",
          postalCode: "H3E 1H8",
          addressCountry: "CA",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 45.4603,
          longitude: -73.5674,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "10:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday"],
            opens: "09:00",
            closes: "16:00",
          },
        ],
        priceRange: "$$",
        currenciesAccepted: "CAD",
        paymentAccepted: "Cash, Credit Card, Interac",
        image: `${SITE_URL}/approche-soin.jpg`,
        logo: `${SITE_URL}/logo-complet.svg`,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Soins esthétiques",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Facial Essentiel & Facial Signature",
                description:
                  "Soin personnalisé adapté à votre type de peau — nettoyage en profondeur, exfoliation douce et hydratation ciblée pour révéler votre éclat naturel.",
                provider: { "@id": `${SITE_URL}/#business` },
              },
              priceSpecification: {
                "@type": "PriceSpecification",
                minPrice: "65",
                maxPrice: "130",
                priceCurrency: "CAD",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Peeling Professionnel Éclat & Renouvellement Cellulaire",
                description:
                  "Soin exfoliant professionnel qui stimule le renouvellement cellulaire et révèle un teint plus lumineux, lisse et uniforme.",
                provider: { "@id": `${SITE_URL}/#business` },
              },
              priceSpecification: {
                "@type": "PriceSpecification",
                price: "130",
                priceCurrency: "CAD",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Microneedling",
                description:
                  "Soin esthétique avancé qui stimule la peau à l'aide de micro-aiguilles pour favoriser le renouvellement cellulaire et la production de collagène.",
                provider: { "@id": `${SITE_URL}/#business` },
              },
              priceSpecification: {
                "@type": "PriceSpecification",
                price: "150",
                priceCurrency: "CAD",
              },
            },
          ],
        },
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#hanane`,
        name: "Hanane Ali-Eddine",
        jobTitle: "Esthéticienne certifiée",
        worksFor: { "@id": `${SITE_URL}/#business` },
        knowsAbout: [
          "Soins du visage",
          "Peeling chimique",
          "Analyse cutanée",
          "Soins peaux sensibles",
        ],
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "Académie Aya Benzekri",
          address: {
            "@type": "PostalAddress",
            streetAddress: "1310 Bd des Récollets",
            addressLocality: "Trois-Rivières",
            addressRegion: "QC",
            addressCountry: "CA",
          },
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
