<template>
  <section id="services" class="py-20 bg-gradient-to-b from-gray-50 to-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-extrabold text-primary mb-4">Nos services</h2>
        <div class="w-24 h-1 bg-secondary mx-auto"></div>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(service, index) in services" :key="index" class="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 p-8 transform hover:-translate-y-2 animate-slide-up opacity-0" :style="{ animationDelay: `${index * 150}ms` }">
          <div class="w-16 h-16 flex items-center justify-center bg-primary/5 text-primary rounded-2xl mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
            <Icon :name="service.icon" size="36" />
          </div>
          <h3 class="text-xl font-bold text-primary mb-3">{{ service.title }}</h3>
          <p class="text-gray-600 leading-relaxed">{{ service.description }}</p>
          <a href="#" class="inline-flex items-center gap-1 text-secondary font-semibold mt-4 hover:underline">En savoir plus <Icon name="ic:baseline-arrow-forward" size="18" /></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  { icon: 'ic:baseline-home', title: 'Résidentiel', description: 'Appartements, villas, résidences secondaires. Emballage, transport, réinstallation.' },
  { icon: 'ic:baseline-business', title: 'Bureaux & Commerces', description: 'Transfert de vos locaux professionnels sans interruption. Week-end possible.' },
  { icon: 'ic:baseline-local-shipping', title: 'Objets spéciaux', description: 'Pianos, coffres, œuvres d’art. Véhicules adaptés et personnel formé.' },
  { icon: 'ic:baseline-people', title: 'Entreprise complète', description: 'Planification, coordination et déménagement de tous vos services.' }
]
</script>