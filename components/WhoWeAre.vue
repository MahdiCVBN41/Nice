<template>
  <section ref="sectionEl" id="qui-sommes-nous" class="py-16 overflow-hidden bg-white md:py-24">
    <div class="container px-4 mx-auto sm:px-6 lg:px-8">
      <div class="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
        <!-- Colonne texte -->
        <div :class="['flex-1 transition-all duration-700', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8']">
          <div class="inline-block px-3 py-1 mb-4 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full">
            Notre histoire
          </div>
          <h2 class="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
            L’expertise du déménagement<br>à Nice et dans toute l’Europe
          </h2>
          <div class="space-y-4 text-lg leading-relaxed text-gray-600">
            <p>
              Basée à <strong class="text-blue-600">Nice</strong>, notre équipe de déménageurs professionnels<br class="hidden sm:block">
              est <strong class="text-blue-600">assurée et expérimentée</strong>. Nous organisons votre déménagement 
              en toute sérénité, que ce soit un <strong>déménagement local</strong> (Nice, Cannes, Antibes, Monaco…), 
              un <strong>déménagement longue distance</strong> vers toutes les villes de France, 
              ou encore un <strong>déménagement international</strong> (Italie, Suisse, Luxembourg, Allemagne, Belgique, Espagne).
            </p>
            <p>
              Notre force : des <strong>devis transparents et négociables</strong>, un accompagnement personnalisé, 
              et une flotte de véhicules adaptés. Nous mettons un point d’honneur à respecter vos délais 
              et à protéger vos biens comme s’ils étaient les nôtres.
            </p>
            <p>
              Avec <strong>plus de 10 ans d’expérience</strong> et des centaines de clients satisfaits, 
              nous sommes devenus la référence du déménagement sur la Côte d’Azur.
            </p>
          </div>
          <!-- Chiffres clés -->
          <div class="grid grid-cols-2 gap-6 mt-10 sm:grid-cols-3">
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-600">10+</div>
              <div class="text-gray-500">années d’expérience</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-600">98%</div>
              <div class="text-gray-500">clients satisfaits</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-600">24/7</div>
              <div class="text-gray-500">support client</div>
            </div>
          </div>
          <div class="mt-10">
            <NuxtLink to="https://www.nice-demenagement.fr/devis" class="inline-flex items-center gap-2 px-6 py-3 text-white transition bg-blue-600 rounded-lg shadow-md hover:bg-blue-700">
              Demandez votre devis gratuit
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </NuxtLink>
          </div>
        </div>

        <!-- Colonne image -->
        <div :class="['flex-1 transition-all duration-700 delay-200', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8']">
          <div class="relative">
            <div class="absolute bg-blue-100 -inset-4 rounded-2xl blur-2xl opacity-70"></div>
            <img 
              src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
              alt="Déménageurs professionnels à Nice préparant un camion de déménagement"
              class="relative object-cover w-full h-auto shadow-2xl rounded-2xl"
              loading="lazy"
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const sectionEl = ref(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.unobserve(entry.target)
      }
    },
    { threshold: 0.2 }
  )
  if (sectionEl.value) observer.observe(sectionEl.value)
})
</script>