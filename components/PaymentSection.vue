<template>
  <section class="py-20 bg-gradient-to-b from-white to-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-extrabold text-primary text-center mb-16">Comment ça marche ?</h2>
      <div class="max-w-4xl mx-auto relative">
        <!-- Vertical line -->
        <div class="absolute left-4 md:left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
        <div v-for="(step, idx) in steps" :key="idx" class="flex items-center mb-12 relative" :class="idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'">
          <div class="flex-1 md:text-right" :class="idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'">
            <div class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
              <div class="text-secondary font-bold text-xl mb-2">{{ step.number }}</div>
              <h3 class="text-2xl font-bold text-primary mb-2">{{ step.title }}</h3>
              <p class="text-gray-600">{{ step.description }}</p>
            </div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-primary font-bold flex items-center justify-center z-10 shadow-lg">✓</div>
          <div class="flex-1 hidden md:block"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  { number: '01', title: 'Prenez rendez-vous', description: 'Appelez ou demandez un devis en ligne.' },
  { number: '02', title: 'Confirmation', description: 'Nous validons la date et les détails.' },
  { number: '03', title: 'Devis personnalisé', description: 'Votre conseiller ajuste l\'offre.' },
  { number: '04', title: 'Déménagement', description: 'Transport sécurisé de A à B.' },
  { number: '05', title: 'Paiement Stripe', description: 'Réglez en ligne après livraison, en toute sécurité.' }
]
</script>