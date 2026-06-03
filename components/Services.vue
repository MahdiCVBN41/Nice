<template>
  <section id="services" ref="sectionEl" class="py-16 md:py-24 bg-gray-50">
    <div class="container px-4 mx-auto sm:px-6 lg:px-8">
      <!-- En-tête -->
      <div :class="['text-center max-w-3xl mx-auto mb-16 transition-all duration-700', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8']">
        <div class="inline-block px-3 py-1 mb-4 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full">
          Nos prestations
        </div>
        <h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
          Des services de déménagement sur mesure
        </h2>
        <p class="text-lg text-gray-600">
          Que vous déménagiez dans un appartement niçois, une villa à Cannes, ou que vous partiez à l’international, 
          nous vous offrons une solution clé en main, assurée et négociable.
        </p>
      </div>

      <!-- Grille des services -->
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- Carte 1 : Déménagement local -->
        <div :class="['bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8']" style="transition-delay: 0.1s">
          <div class="flex items-center justify-center h-48 bg-gradient-to-br from-blue-500 to-blue-600">
            <svg class="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <div class="p-6">
            <h3 class="mb-3 text-2xl font-bold text-gray-800">Déménagement local</h3>
            <p class="mb-4 text-gray-600">
              Spécialiste du déménagement à <strong>Nice, Monaco, Cannes, Antibes, Grasse, Cagnes‑sur‑Mer</strong> et toute la Côte d’Azur. 
              Intervention rapide, camions adaptés aux centres‑villes, et équipe expérimentée.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-center gap-2"><span class="text-blue-600">✓</span> Devis gratuit sous 24h</li>
              <li class="flex items-center gap-2"><span class="text-blue-600">✓</span> Assuré responsabilité civile</li>
              <li class="flex items-center gap-2"><span class="text-blue-600">✓</span> Forfaits négociables</li>
            </ul>
          </div>
        </div>

        <!-- Carte 2 : Déménagement national -->
        <div :class="['bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8']" style="transition-delay: 0.2s">
          <div class="flex items-center justify-center h-48 bg-gradient-to-br from-green-500 to-green-600">
            <svg class="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </div>
          <div class="p-6">
            <h3 class="mb-3 text-2xl font-bold text-gray-800">Déménagement national</h3>
            <p class="mb-4 text-gray-600">
              De Nice vers <strong>Paris, Lyon, Marseille, Bordeaux, Lille, Strasbourg</strong> ou toute autre ville de France. 
              Nous organisons le transport, la logistique et la livraison en toute sécurité.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-center gap-2"><span class="text-green-600">✓</span> Suivi GPS en temps réel</li>
              <li class="flex items-center gap-2"><span class="text-green-600">✓</span> Garantie des délais</li>
              <li class="flex items-center gap-2"><span class="text-green-600">✓</span> Devis ferme et négociable</li>
            </ul>
          </div>
        </div>

        <!-- Carte 3 : Déménagement international -->
        <div :class="['bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8']" style="transition-delay: 0.3s">
          <div class="flex items-center justify-center h-48 bg-gradient-to-br from-purple-500 to-purple-600">
            <svg class="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div class="p-6">
            <h3 class="mb-3 text-2xl font-bold text-gray-800">Déménagement international</h3>
            <p class="mb-4 text-gray-600">
              Départ de Nice vers <strong>l’Italie, la Suisse, le Luxembourg, l’Allemagne, la Belgique, l’Espagne</strong> et toute l’Europe. 
              Gestion des formalités douanières, assurance tous risques.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-center gap-2"><span class="text-purple-600">✓</span> Accompagnement administratif</li>
              <li class="flex items-center gap-2"><span class="text-purple-600">✓</span> Conteneurs ou camions complets</li>
              <li class="flex items-center gap-2"><span class="text-purple-600">✓</span> Devis multidevis comparatif</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Avantages supplémentaires (assurance, devis, professionnels) -->
      <div :class="['mt-16 p-6 bg-blue-50 rounded-2xl transition-all duration-700', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8']" style="transition-delay: 0.4s">
        <div class="grid gap-6 text-center md:grid-cols-3">
          <div>
            <svg class="w-10 h-10 mx-auto mb-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <h4 class="font-bold text-gray-800">Déménageurs assurés</h4>
            <p class="text-sm text-gray-600">RC Pro, garantie dommages, protection des biens fragiles</p>
          </div>
          <div>
            <svg class="w-10 h-10 mx-auto mb-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h4 class="font-bold text-gray-800">Devis négociable</h4>
            <p class="text-sm text-gray-600">Prix adaptés à votre budget, sans mauvaises surprises</p>
          </div>
          <div>
            <svg class="w-10 h-10 mx-auto mb-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h4 class="font-bold text-gray-800">Équipe expérimentée</h4>
            <p class="text-sm text-gray-600">Plus de 10 ans d’expertise, matériel professionnel</p>
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
    { threshold: 0.1 }
  )
  if (sectionEl.value) observer.observe(sectionEl.value)
})
</script>