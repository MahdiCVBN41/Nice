<template>
  <section  ref="sectionEl" id="zones" class="py-16 overflow-hidden bg-white md:py-24">
    <div class="container px-4 mx-auto sm:px-6 lg:px-8">
      <div :class="['text-center max-w-3xl mx-auto mb-12 transition-all duration-700', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8']">
        <div class="inline-block px-3 py-1 mb-4 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full">
          Notre couverture
        </div>
        <h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
          Où intervenons‑nous ?
        </h2>
        <p class="text-lg text-gray-600">
          Déménagement local, national et international. Nous desservons toute la France et l’Europe.
        </p>
      </div>

      <!-- Villes locales (France) -->
      <div class="mb-12">
        <h3 class="flex items-center gap-2 mb-6 text-2xl font-bold text-gray-800">
          <span class="w-8 h-0.5 bg-blue-500 block"></span>
          Nos villes en France
        </h3>
        <div class="relative group">
          <button @click="scrollLeft(localScrollRef)" class="absolute left-0 z-10 p-2 transition -translate-y-1/2 rounded-full shadow-md top-1/2 bg-white/80 backdrop-blur hover:bg-blue-500 hover:text-white disabled:opacity-50" :disabled="canScrollLeft(localScrollRef)">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <div ref="localScrollRef" class="flex gap-6 pb-4 overflow-x-auto scroll-smooth hide-scrollbar">
            <div v-for="ville in villesFrance" :key="ville.nom" class="flex-shrink-0 w-64 overflow-hidden transition-all shadow bg-gray-50 rounded-xl hover:shadow-lg hover:-translate-y-1">
              <img :src="ville.image" :alt="`Déménagement à ${ville.nom}`" class="object-cover w-full h-40">
              <div class="p-4 text-center">
                <h4 class="text-xl font-bold text-gray-800">{{ ville.nom }}</h4>
                <NuxtLink :to="`/ville/${ville.slug}`" class="inline-block mt-2 text-sm text-blue-600 hover:underline">Voir nos offres →</NuxtLink>
              </div>
            </div>
          </div>
          <button @click="scrollRight(localScrollRef)" class="absolute right-0 z-10 p-2 transition -translate-y-1/2 rounded-full shadow-md top-1/2 bg-white/80 backdrop-blur hover:bg-blue-500 hover:text-white">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>
      </div>

      <!-- Pays internationaux -->
      <div>
        <h3 class="flex items-center gap-2 mb-6 text-2xl font-bold text-gray-800">
          <span class="w-8 h-0.5 bg-blue-500 block"></span>
          Déménagement international
        </h3>
        <div class="relative group">
          <button @click="scrollLeft(intlScrollRef)" class="absolute left-0 z-10 p-2 transition -translate-y-1/2 rounded-full shadow-md top-1/2 bg-white/80 backdrop-blur hover:bg-blue-500 hover:text-white disabled:opacity-50" :disabled="canScrollLeft(localScrollRef)">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <div ref="intlScrollRef" class="flex gap-6 pb-4 overflow-x-auto scroll-smooth hide-scrollbar">
            <div v-for="pays in paysInternationaux" :key="pays.nom" class="flex-shrink-0 w-64 overflow-hidden transition-all shadow bg-gray-50 rounded-xl hover:shadow-lg hover:-translate-y-1">
              <img :src="pays.image" :alt="`Déménagement vers ${pays.nom}`" class="object-cover w-full h-40">
              <div class="p-4 text-center">
                <h4 class="text-xl font-bold text-gray-800">{{ pays.nom }}</h4>
                <NuxtLink :to="`/pays/${pays.slug}`" class="inline-block mt-2 text-sm text-blue-600 hover:underline">Voir nos prestations →</NuxtLink>
              </div>
            </div>
          </div>
          <button @click="scrollRight(intlScrollRef)" class="absolute right-0 z-10 p-2 transition -translate-y-1/2 rounded-full shadow-md top-1/2 bg-white/80 backdrop-blur hover:bg-blue-500 hover:text-white">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const sectionEl = ref(null)
const isVisible = ref(false)
const localScrollRef = ref(null)
const intlScrollRef = ref(null)

const villesFrance = [
  { nom: 'Nice', slug: 'nice', image: '/images/nice.png' },
  { nom: 'Paris', slug: 'paris', image: '/images/paris.jpg' },
  { nom: 'Monaco', slug: 'monaco', image: '/images/monaco.jpg' },
  { nom: 'Cannes', slug: 'cannes', image: '/images/cannes.jpg' },
  { nom: 'Grasse', slug: 'grasse', image: '/images/grasse.jpg' },
  { nom: 'Antibes', slug: 'antibes', image: '/images/antibes.jpg' },
  { nom: 'Marseille', slug: 'marseille', image: '/images/marseille.jpg' },
  { nom: 'Nantes', slug: 'nantes', image: '/images/Nantes.jpg' },
  { nom: 'Lyon', slug: 'lyon', image: '/images/lyon.jpg' },
  { nom: 'Marseille', slug: 'marseille', image: '/images/marseille.jpg' },
  { nom: 'Bordeaux', slug: 'bordeaux', image: '/images/Bordeaux.jpg' },
  { nom: 'Lille', slug: 'lille', image: '/images/lille.jpg' },
  { nom: 'Strasbourg', slug: 'strasbourg', image: '/images/strasbourg.jpg' },
  { nom: 'Toulouse', slug: 'toulouse', image: '/images/toulouse.jpg' }
]

const paysInternationaux = [
  { nom: 'Italie', slug: 'italie', image: '/images/italie.jpg' },
  { nom: 'Suisse', slug: 'suisse', image: '/images/suisse.jpg' },
  { nom: 'Luxembourg', slug: 'luxembourg', image: '/images/luxembourg.jpg' },
  { nom: 'Allemagne', slug: 'allemagne', image: '/images/allemagne.jpg' },
  { nom: 'Belgique', slug: 'belgique', image: '/images/belgique.jpg' },
  { nom: 'Espagne', slug: 'espagne', image: '/images/spain.jpg' }
]

const scrollLeft = (ref) => { if (ref) ref.scrollBy({ left: -300, behavior: 'smooth' }) }
const scrollRight = (ref) => { if (ref) ref.scrollBy({ left: 300, behavior: 'smooth' }) }
const canScrollLeft = (ref) => {
  if (!ref) return false
  return ref.scrollLeft > 0
}
onMounted(() => {
  const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) isVisible.value = true }, { threshold: 0.1 })
  if (sectionEl.value) observer.observe(sectionEl.value)
})
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar { display: none; }
.hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>