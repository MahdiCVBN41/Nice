<template>
  <div>
    <Navbar />
    <WhoWeAre />
    <Services />
    <Zones />
    <Avis />
    <Faq />
    
  </div>
</template>

<script setup>
import WhoWeAre from '@/components/WhoWeAre.vue'
import Services from '@/components/Services.vue'
import Zones from '@/components/Zones.vue'
import Avis from '@/components/Avis.vue'
import Navbar from '@/components/Navbar.vue'
import Faq from '@/components/Faq.vue'
// JSON‑LD Organisation (inchangé) + JSON‑LD Zones d'intervention
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MovingCompany",
        "name": "Nice Déménagement",
        "url": "https://www.nice-demenagement.fr",
        "logo": "https://www.nice-demenagement.fr/logo.png",
        "image": "https://www.nice-demenagement.fr/og-image.jpg",
        "description": "Entreprise de déménagement à Nice, déménagements locaux, nationaux et internationaux (Italie, Suisse, Allemagne...). Devis gratuit et négociable.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "15 Avenue Jean Médecin",
          "addressLocality": "Nice",
          "addressRegion": "Alpes-Maritimes",
          "postalCode": "06000",
          "addressCountry": "FR"
        },
        "geo": { "@type": "GeoCoordinates", "latitude": 43.7034, "longitude": 7.2663 },
        "telephone": "+33493000000",
        "email": "contact@nice-demenagement.fr",
        "priceRange": "€€",
        "areaServed": ["Nice", "Monaco", "Cannes", "Antibes", "France", "Italie", "Suisse", "Luxembourg", "Allemagne", "Belgique", "Espagne"],
        "serviceType": ["Déménagement local", "Déménagement longue distance", "Déménagement international"],
        "openingHours": "Mo-Fr 08:00-19:00",
        "sameAs": ["https://www.facebook.com/nice-demenagement", "https://www.instagram.com/nice_demenagement"]
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Zones d'intervention de Nice Déménagement",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "item": { "@type": "City", "name": "Nice" } },
          { "@type": "ListItem", "position": 2, "item": { "@type": "City", "name": "Paris" } },
          { "@type": "ListItem", "position": 3, "item": { "@type": "City", "name": "Monaco" } },
          { "@type": "ListItem", "position": 4, "item": { "@type": "City", "name": "Cannes" } },
          { "@type": "ListItem", "position": 5, "item": { "@type": "City", "name": "Antibes" } },
          { "@type": "ListItem", "position": 6, "item": { "@type": "Country", "name": "Italie" } },
          { "@type": "ListItem", "position": 7, "item": { "@type": "Country", "name": "Suisse" } },
          { "@type": "ListItem", "position": 8, "item": { "@type": "Country", "name": "Allemagne" } },
          { "@type": "ListItem", "position": 9, "item": { "@type": "Country", "name": "Belgique" } },
          { "@type": "ListItem", "position": 10, "item": { "@type": "Country", "name": "Espagne" } },
          { "@type": "ListItem", "position": 11, "item": { "@type": "Country", "name": "Luxembourg" } }
        ]
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Nice Déménagement",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "287",
          "reviewCount": "287"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Sophie Martin" },
            "reviewBody": "Déménagement Nice Paris impeccable. Devis gratuit et négociable. Professionnels.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Thomas Dubois" },
            "reviewBody": "Service exceptionnel pour l'Italie. Formalités douanières gérées.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Laura Chevalier" },
            "reviewBody": "Déménagement local Cannes rapide, devis négocié à la baisse.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          }
        ]
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Comment obtenir un devis gratuit pour mon déménagement depuis Nice ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Vous pouvez obtenir un devis gratuit et sans engagement en remplissant notre formulaire en ligne. Notre équipe vous recontacte sous 24h avec une proposition détaillée et négociable."
            }
          },
          {
            "@type": "Question",
            "name": "Proposez-vous l’assurance pour les déménagements locaux et internationaux ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui, tous nos déménagements sont couverts par une assurance responsabilité civile. Pour l'international, une assurance tous risques est incluse."
            }
          },
          {
            "@type": "Question",
            "name": "Quels types de déménagements réalisez-vous à Nice et dans les Alpes-Maritimes ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nous réalisons tous types de déménagements : locaux, nationaux (Paris, Lyon, etc.) et internationaux (Italie, Suisse, Allemagne...)."
            }
          },
          {
            "@type": "Question",
            "name": "Vos tarifs sont-ils négociables ? Proposez-vous des forfaits ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nos devis sont négociables. Nous proposons des forfaits clé en main ou des formules économiques."
            }
          },
          {
            "@type": "Question",
            "name": "Quels sont vos délais pour un déménagement depuis Nice vers une autre ville ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Local : 48h à 72h. National : 5 à 10 jours. International : 10 à 21 jours selon destination."
            }
          },
          {
            "@type": "Question",
            "name": "Faut-il être présent le jour du déménagement ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ce n'est pas obligatoire. Vous pouvez désigner un mandataire ou suivre à distance."
            }
          },
          {
            "@type": "Question",
            "name": "Proposez-vous le démontage et remontage des meubles ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui, ce service est inclus dans nos formules confort ou en option."
            }
          }
        ]
      })
    }
  ]
})
</script>