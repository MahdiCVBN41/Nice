<template>
  <section class="py-20 bg-primary text-white relative overflow-hidden">
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-10 left-20 w-64 h-64 bg-secondary rounded-full blur-3xl"></div>
      <div class="absolute bottom-10 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
    </div>
    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-extrabold mb-4">Nous couvrons partout</h2>
        <p class="text-xl text-white/80">De Nice au monde entier</p>
      </div>

      <!-- Tabs -->
      <div class="flex justify-center gap-2 mb-12 flex-wrap">
        <button @click="activeTab = 'national'" :class="[activeTab === 'national' ? 'bg-secondary text-primary' : 'bg-white/10 text-white', 'px-6 py-3 rounded-full font-semibold transition-all']">National</button>
        <button @click="activeTab = 'international'" :class="[activeTab === 'international' ? 'bg-secondary text-primary' : 'bg-white/10 text-white', 'px-6 py-3 rounded-full font-semibold transition-all']">International</button>
      </div>

      <!-- Cities Grid (National) -->
      <div v-if="activeTab === 'national'" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 animate-fade-in">
        <div v-for="city in nationalCities" :key="city" class="bg-white/10 backdrop-blur rounded-xl p-4 text-center hover:bg-white/20 transition cursor-pointer transform hover:-translate-y-1">
          <span class="text-lg font-medium">📍 {{ city }}</span>
        </div>
      </div>

      <!-- International Countries -->
      <div v-else class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 animate-fade-in">
        <div v-for="country in internationalCountries" :key="country.name" class="bg-white/10 rounded-xl p-4 text-center hover:bg-white/20 transition cursor-pointer transform hover:-translate-y-1">
          <span class="text-3xl mb-2 block">{{ country.flag }}</span>
          <span class="font-semibold">{{ country.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const activeTab = ref('national')
const nationalCities = ['Nice', 'Antibes', 'Cannes', 'Cagnes-sur-Mer', 'Monaco', 'Marseille', 'Paris', 'Lyon', 'Toulouse', 'Bordeaux', 'Lille', 'Nantes']
const internationalCountries = [
  { name: 'Suisse', flag: '🇨🇭' },
  { name: 'Allemagne', flag: '🇩🇪' },
  { name: 'Italie', flag: '🇮🇹' },
  { name: 'Belgique', flag: '🇧🇪' },
  { name: 'Luxembourg', flag: '🇱🇺' },
  { name: 'Espagne', flag: '🇪🇸' }
]
</script>