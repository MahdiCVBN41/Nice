<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-extrabold text-primary mb-4">Ils nous ont fait confiance</h2>
        <p class="text-xl text-gray-600">Avis vérifiés et questions fréquentes</p>
      </div>

      <!-- Carousel container -->
      <div class="relative max-w-5xl mx-auto">
        <div class="overflow-hidden">
          <div class="flex transition-transform duration-500" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            <div v-for="item in faqItems" :key="item.id" class="w-full flex-shrink-0 px-4">
              <div class="bg-white rounded-2xl shadow-lg p-8 md:flex gap-8 items-start">
                <div class="md:w-1/3 text-center mb-6 md:mb-0">
                  <img :src="item.avatar" :alt="item.name" class="w-24 h-24 rounded-full mx-auto object-cover border-4 border-secondary" />
                  <h4 class="font-bold text-lg mt-4">{{ item.name }}</h4>
                  <p class="text-sm text-gray-500">{{ item.from }} → {{ item.to }}</p>
                  <div class="flex justify-center mt-2">
                    <span v-for="star in 5" :key="star" class="text-secondary text-xl">★</span>
                  </div>
                </div>
                <div class="md:w-2/3">
                  <blockquote class="italic text-gray-700 mb-6 text-lg">“{{ item.review }}”</blockquote>
                  <div class="bg-gray-50 p-4 rounded-xl">
                    <p class="font-semibold text-primary mb-1">Q: {{ item.question }}</p>
                    <p class="text-gray-600">R: {{ item.answer }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Nav buttons -->
        <button @click="prev" class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition z-10">
          <Icon name="ic:baseline-chevron-left" size="28" class="text-primary" />
        </button>
        <button @click="next" class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition z-10">
          <Icon name="ic:baseline-chevron-right" size="28" class="text-primary" />
        </button>

        <!-- Dots -->
        <div class="flex justify-center mt-6 gap-2">
          <button v-for="(item, index) in faqItems" :key="index" @click="goTo(index)" :class="[index === currentIndex ? 'bg-secondary w-6' : 'bg-gray-300 w-3', 'h-3 rounded-full transition-all']"></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const currentIndex = ref(0)
const faqItems = [
  {
    id: 1, name: 'Marie L.', avatar: 'https://i.pravatar.cc/150?u=marie', from: 'Nice', to: 'Paris',
    review: 'Service impeccable, équipe ponctuelle et très professionnelle.', question: 'Délai pour un déménagement national ?', answer: '2 à 4 jours selon la distance, suivi en temps réel.'
  },
  // ... (include all 8 items from previous message, keep structure same)
  {
    id: 8, name: 'Nicolas P.', avatar: 'https://i.pravatar.cc/150?u=nicolas', from: 'Paris', to: 'Nice',
    review: 'Arrivée à l’heure, déménagement rapide et soigné.', question: 'Travaillez-vous le week-end ?', answer: 'Oui, le samedi sur demande.'
  }
]

const next = () => { currentIndex.value = (currentIndex.value + 1) % faqItems.length }
const prev = () => { currentIndex.value = (currentIndex.value - 1 + faqItems.length) % faqItems.length }
const goTo = (index) => { currentIndex.value = index }
</script>