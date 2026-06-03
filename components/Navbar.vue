<template>
  <nav class="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
    <div class="container px-4 mx-auto sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo / Brand -->
         <img 
                  src="/images/logo-nice-demenagement.png" 
                  alt="Logo Nice Déménagement" 
                  width="50" 
                  height="100"
                  class="h-15"
            />
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="text-2xl font-bold text-blue-600 ">
            Nice Déménagement 
          </NuxtLink>
        </div>

        <!-- Desktop menu -->
        <div class="hidden space-x-8 md:flex">
          <NuxtLink to="#qui-sommes-nous" class="text-gray-700 transition hover:text-blue-600">Qui sommes-nous</NuxtLink>
          <NuxtLink to="#services" class="text-gray-700 transition hover:text-blue-600">Services</NuxtLink>
          <NuxtLink to="#zone" class="text-gray-700 transition hover:text-blue-600">Zones</NuxtLink>
          <NuxtLink to="#avis" class="text-gray-700 transition hover:text-blue-600">Avis</NuxtLink>
          <NuxtLink to="#faq" class="text-gray-700 transition hover:text-blue-600">FAQ</NuxtLink>
          <NuxtLink to="https://www.nice-demenagement.fr/devis" class="px-4 py-2 text-white transition bg-blue-600 rounded-md hover:bg-blue-700">
            Devis Gratuit
          </NuxtLink>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-gray-700 focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu panel -->
      <div v-if="mobileMenuOpen" class="pb-4 space-y-2 bg-white md:hidden">
        <NuxtLink to="#qui-sommes-nous" @click="mobileMenuOpen = false" class="block px-3 py-2 text-gray-700 rounded hover:bg-blue-50">Qui sommes-nous</NuxtLink>
        <NuxtLink to="#services" @click="mobileMenuOpen = false" class="block px-3 py-2 text-gray-700 rounded hover:bg-blue-50">Services</NuxtLink>
        <NuxtLink to="#zones" @click="mobileMenuOpen = false" class="block px-3 py-2 text-gray-700 rounded hover:bg-blue-50">Zones</NuxtLink>
        <NuxtLink to="#avis" @click="mobileMenuOpen = false" class="block px-3 py-2 text-gray-700 rounded hover:bg-blue-50">Avis</NuxtLink>
        <NuxtLink to="#faq" @click="mobileMenuOpen = false" class="block px-3 py-2 text-gray-700 rounded hover:bg-blue-50">FAQ</NuxtLink>
        <NuxtLink to="https://www.nice-demenagement.fr/devis" @click="mobileMenuOpen = false" class="block px-3 py-2 text-center text-white bg-blue-600 rounded-md">Devis Gratuit</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
const mobileMenuOpen = ref(false)
</script>