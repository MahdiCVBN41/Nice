<template>
  <div class="min-h-screen pt-20 bg-gray-50">
    <div class="container px-4 py-10 mx-auto">
      <div class="max-w-4xl mx-auto">
        <h1 class="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
          Déménagement à {{ villeNom }} avec Nice Déménagement
        </h1>
        <img :src="imageUrl" :alt="`Déménagement ${villeNom}`" class="object-cover w-full my-6 shadow-lg h-80 rounded-2xl">
        <div class="prose prose-lg max-w-none">
          <p>
            Vous préparez un déménagement à <strong>{{ villeNom }}</strong> ? Notre équipe de déménageurs professionnels basée à Nice intervient dans toute la France, y compris à {{ villeNom }}. Nous vous proposons un service clé en main : devis gratuit, assurance tous risques, matériel adapté et tarifs négociables.
          </p>
          <p>
            Que ce soit pour un appartement, une maison ou des bureaux, nous assurons le transport sécurisé de vos biens, le démontage/remontage des meubles, et l’emballage soigné. Notre flotte de camions permet de réaliser votre déménagement dans les meilleurs délais, avec un suivi GPS en temps réel.
          </p>
          <h2>Pourquoi choisir Nice Déménagement pour {{ villeNom }} ?</h2>
          <ul>
            <li>Devis en ligne gratuit et sans engagement</li>
            <li>Déménageurs expérimentés et assurés (RC Pro)</li>
            <li>Forfaits adaptés à votre budget, négociables</li>
            <li>Respect des délais et protection des biens fragiles</li>
          </ul>
          <div class="p-6 my-6 text-center bg-blue-50 rounded-xl">
            <NuxtLink to="https://www.nice-demenagement.fr/devis" class="inline-block px-8 py-3 font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700">
              Demandez votre devis gratuit pour {{ villeNom }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const villeNom = computed(() => route.params.ville.charAt(0).toUpperCase() + route.params.ville.slice(1))
const imageUrl = computed(() => {
  const images = {
    nice: '/images/nice.png',
    paris: '/images/paris.jpg',
    monaco: '/images/monaco.jpg',
    grasse: '/images/grasse.jpg',
    cannes: '/images/cannes.jpg',
    antibes: '/images/antibes.jpg',
    nantes: '/images/nantes.jpg',
    lyon: '/images/lyon.jpg',
    marseille: '/images/marseille.jpg',
    bordeaux: '/images/Bordeaux.jpg',
    lille: '/images/lille.jpg',
    strasbourg: '/images/strasbourg.jpg',
    toulouse: '/images/toulouse.jpg'
  }
  return images[route.params.ville] || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop'
})

useHead({
  title: `Déménagement à ${villeNom.value} | Nice Déménagement`,
  meta: [
    { name: 'description', content: `Déménageur professionnel pour ${villeNom.value}. Devis gratuit, déménageurs assurés, tarifs négociables. Déménagement local ou depuis Nice vers ${villeNom.value}.` },
    { name: 'keywords', content: `déménagement ${villeNom.value.toLowerCase()}, devis déménagement ${villeNom.value.toLowerCase()}, déménageur ${villeNom.value.toLowerCase()}, Nice Déménagement` }
  ]
})
</script>