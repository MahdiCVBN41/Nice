<template>
  <div class="min-h-screen pt-20 bg-gray-50">
    <div class="container px-4 py-10 mx-auto">
      <div class="max-w-4xl mx-auto">
        <h1 class="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
          Déménagement vers {{ paysNom }}
        </h1>
        <img :src="imageUrl" :alt="`Déménagement international ${paysNom}`" class="object-cover w-full my-6 shadow-lg h-80 rounded-2xl">
        <div class="prose prose-lg max-w-none">
          <p>
            Nice Déménagement vous accompagne pour votre installation à l’étranger. Nous organisons votre déménagement depuis Nice ou toute la France vers <strong>{{ paysNom }}</strong>. Profitez d’un service complet : transport, formalités douanières, assurance tous risques.
          </p>
          <p>
            Notre équipe francophone et internationale maîtrise les réglementations européennes. Nous réalisons des déplacements réguliers vers l’Italie, la Suisse, l’Allemagne, la Belgique, l’Espagne, le Luxembourg et bien d’autres destinations.
          </p>
          <h2>Nos atouts pour un déménagement vers {{ paysNom }}</h2>
          <ul>
            <li>Devis multidevis comparatif gratuit</li>
            <li>Conteneurs maritimes ou camions complets</li>
            <li>Aide aux démarches administratives et douanières</li>
            <li>Assurance dommages incluse</li>
          </ul>
          <div class="p-6 my-6 text-center bg-blue-50 rounded-xl">
            <NuxtLink to="https://www.nice-demenagement.fr/devis" class="inline-block px-8 py-3 font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700">
              Demandez un devis pour {{ paysNom }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const paysNom = computed(() => route.params.pays.charAt(0).toUpperCase() + route.params.pays.slice(1))
const imageUrl = computed(() => {
  const images = {
    italie: '/images/italie.jpg',
    suisse: '/images/suisse.jpg',
    luxembourg: '/images/luxembourg.jpg',
    allemagne: '/images/allemagne.jpg',
    belgique: '/images/belgique.jpg',
    espagne: '/images/espagne.jpg'
  }
  return images[route.params.pays] || 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=500&fit=crop'
})

useHead({
  title: `Déménagement vers ${paysNom.value} | Nice Déménagement`,
  meta: [
    { name: 'description', content: `Déménageur professionnel pour ${paysNom.value}. Devis gratuit, formalités douanières, assurance tous risques. Déménagement international depuis Nice vers ${paysNom.value}.` },
    { name: 'keywords', content: `déménagement ${paysNom.value.toLowerCase()}, devis déménagement ${paysNom.value.toLowerCase()}, déménagement international ${paysNom.value.toLowerCase()}` }
  ]
})
</script>