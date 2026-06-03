<template>
  <section id="avis" ref="sectionEl" class="py-16 overflow-hidden md:py-24 bg-gray-50">
    <div class="container px-4 mx-auto sm:px-6 lg:px-8">
      <div :class="['text-center max-w-3xl mx-auto mb-12 transition-all duration-700', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8']">
        <div class="inline-block px-3 py-1 mb-4 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full">
          Ils nous font confiance
        </div>
        <h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
          Ce que nos clients pensent de notre service de déménagement
        </h2>
        <p class="text-lg text-gray-600">
          Plus de 98% de clients satisfaits – Déménagements réussis à Nice, en France et à l'international
        </p>
      </div>

      <!-- Carrousel -->
      <div class="relative group">
        <!-- Bouton précédent -->
        <button 
          @click="prevSlide" 
          :disabled="currentIndex === 0"
          class="absolute left-0 z-10 p-2 transition -translate-y-1/2 rounded-full shadow-md top-1/2 bg-white/80 backdrop-blur hover:bg-blue-600 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>

        <!-- Conteneur du carrousel -->
        <div class="overflow-hidden">
          <div 
            class="flex transition-transform duration-500 ease-out"
            :style="{ transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)` }"
          >
            <div 
              v-for="(avis, idx) in avisList" 
              :key="idx"
              class="flex-shrink-0 px-3"
              :style="{ width: `${100 / slidesPerView}%` }"
            >
              <div class="h-full p-6 transition-all bg-white shadow-lg rounded-2xl hover:shadow-xl hover:-translate-y-1">
                <div class="flex items-center gap-4 mb-4">
                  <img :src="avis.avatar" :alt="`Avatar de ${avis.nom}`" class="object-cover border-2 border-blue-500 rounded-full w-14 h-14">
                  <div>
                    <h3 class="text-lg font-bold text-gray-800">{{ avis.nom }}</h3>
                    <div class="flex text-sm text-yellow-400">
                      <span v-for="i in 5" :key="i">★</span>
                    </div>
                  </div>
                </div>
                <p class="mb-3 italic text-gray-600">“{{ avis.commentaire }}”</p>
                <p class="text-sm font-semibold text-blue-600">{{ avis.ville }}</p>
                <p class="mt-2 text-xs text-gray-400">{{ avis.date }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Bouton suivant -->
        <button 
          @click="nextSlide" 
          :disabled="currentIndex >= maxIndex"
          class="absolute right-0 z-10 p-2 transition -translate-y-1/2 rounded-full shadow-md top-1/2 bg-white/80 backdrop-blur hover:bg-blue-600 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </div>

      <!-- Indicateurs (dots) -->
      <div class="flex justify-center gap-2 mt-8">
        <button 
          v-for="(_, idx) in totalDots" 
          :key="idx"
          @click="goToSlide(idx)"
          class="w-2 h-2 transition-all duration-300 rounded-full"
          :class="currentIndex === idx ? 'w-8 bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'"
        ></button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const sectionEl = ref(null)
const isVisible = ref(false)
const currentIndex = ref(0)
const slidesPerView = ref(3) // 3 avis visibles sur desktop

// Liste des avis (contenu extrêmement riche en mots-clés SEO)
const avisList = [
  {
    nom: 'Sophie Martin',
    avatar: '/avatars/sophie.jpg', // image locale (à placer dans public/avatars/)
    commentaire: 'Un déménagement de Nice à Paris impeccable. Équipe très professionnelle, devis gratuit et négociable. Ils ont pris soin de tous mes meubles, même les plus fragiles. Je recommande vivement Nice Déménagement pour tout déménagement national ou international.',
    ville: 'Nice → Paris',
    date: '15 mars 2025'
  },
  {
    nom: 'Thomas Dubois',
    avatar: '/avatars/thomas.jpg',
    commentaire: 'Service exceptionnel pour mon déménagement vers l’Italie (Rome). Formalités douanières gérées sans souci, assurance incluse, prix très compétitif. Les déménageurs sont polis, rapides et soigneux. Un grand merci à toute l’équipe.',
    ville: 'Nice → Italie',
    date: '2 février 2025'
  },
  {
    nom: 'Laura Chevalier',
    avatar: '/avatars/laura.jpg',
    commentaire: 'Déménagement local à Cannes réalisé en moins de 4 heures. Devis en ligne reçu rapidement, tarif négocié à la baisse. Les cartons étaient étiquetés, le camion propre. Très bonne expérience avec cette entreprise de déménagement niçoise.',
    ville: 'Cannes',
    date: '20 janvier 2025'
  },
  {
    nom: 'Marc Weber',
    avatar: '/avatars/marc.jpg',
    commentaire: 'Nous avons fait appel à Nice Déménagement pour un transfert de notre appartement à Monaco vers la Suisse. Tout a été parfait : le matériel d’emballage, le suivi GPS, la ponctualité. Des déménageurs assurés et à l’écoute. À recommander sans hésiter.',
    ville: 'Monaco → Suisse',
    date: '5 décembre 2024'
  },
  {
    nom: 'Camillia De Luca',
    avatar: '/avatars/camille.jpg',
    commentaire: 'Superbe prestation pour un déménagement international vers l’Espagne (Barcelone). Le devis était clair, sans mauvaises surprises. L’équipe a même démonté/remonté ma cuisine équipée. Un service 5 étoiles.',
    ville: 'Nice → Espagne',
    date: '10 novembre 2024'
  },
  {
    nom: 'Nicolas Leroy',
    avatar: '/avatars/nicolas.jpg',
    commentaire: 'Je cherchais un déménageur pour reloger mes bureaux de Nice à Lyon. Nice Déménagement a su être réactif, discret et efficace. Le rapport qualité-prix est imbattable. Je les recommande pour les pros comme pour les particuliers.',
    ville: 'Nice → Lyon',
    date: '18 octobre 2024'
  }
]

const totalSlides = computed(() => avisList.length)
const maxIndex = computed(() => totalSlides.value - slidesPerView.value)
const totalDots = computed(() => Math.ceil(totalSlides.value / slidesPerView.value))

const nextSlide = () => {
  if (currentIndex.value < maxIndex.value) currentIndex.value++
}
const prevSlide = () => {
  if (currentIndex.value > 0) currentIndex.value--
}
const goToSlide = (index) => {
  currentIndex.value = index * slidesPerView.value
  if (currentIndex.value > maxIndex.value) currentIndex.value = maxIndex.value
}

// Adaptation du slidesPerView selon la largeur d'écran
const updateSlidesPerView = () => {
  if (window.innerWidth < 768) slidesPerView.value = 1
  else if (window.innerWidth < 1024) slidesPerView.value = 2
  else slidesPerView.value = 3
}

onMounted(() => {
  updateSlidesPerView()
  window.addEventListener('resize', updateSlidesPerView)
  const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) isVisible.value = true }, { threshold: 0.1 })
  if (sectionEl.value) observer.observe(sectionEl.value)
})
</script>