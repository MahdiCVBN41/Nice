<template>
  <div class="fixed z-50 flex flex-col gap-3 bottom-6 right-6">
    <!-- Bouton WhatsApp / Appel -->
    <div class="relative group">
      <div class="absolute z-10 -top-1 -right-1">
        <span class="relative flex w-4 h-4">
          <span class="absolute inline-flex w-full h-full bg-green-400 rounded-full opacity-75 animate-ping"></span>
          <span class="relative inline-flex w-4 h-4 bg-green-500 rounded-full"></span>
        </span>
      </div>
      <a
        :href="whatsappUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center justify-center transition-all duration-300 bg-green-500 rounded-full shadow-lg w-14 h-14 hover:bg-green-600 hover:scale-110"
      >
        <svg class="text-white w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.032 2.001c-5.52 0-10 4.48-10 10 0 1.76.46 3.42 1.27 4.86L2 22l5.25-1.37c1.4.8 2.99 1.23 4.64 1.23 5.52 0 10-4.48 10-10s-4.48-10-10-10zm0 18c-1.56 0-3.06-.43-4.34-1.18l-.31-.18-3.11.81.83-3.03-.2-.32a7.96 7.96 0 0 1-1.22-4.17c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>
          <path d="M16.73 14.19c-.26-.13-1.55-.76-1.79-.85-.24-.09-.42-.13-.6.13-.18.26-.7.85-.86 1.02-.16.18-.32.2-.58.07-.26-.13-1.1-.4-2.09-1.29-.77-.69-1.29-1.54-1.44-1.8-.16-.26-.02-.4.12-.53.13-.13.29-.33.43-.49.15-.16.2-.28.3-.46.1-.18.05-.34-.02-.48-.07-.13-.6-1.45-.82-1.99-.22-.54-.44-.45-.6-.46-.16-.01-.34-.01-.52-.01-.18 0-.47.07-.71.33-.24.26-.92.9-.92 2.2 0 1.3.95 2.56 1.08 2.73.13.18 1.87 2.86 4.53 4.01.63.27 1.12.43 1.51.55.63.2 1.21.17 1.66.11.51-.07 1.55-.63 1.77-1.24.22-.61.22-1.13.15-1.24-.07-.11-.26-.18-.52-.31z"/>
        </svg>
      </a>
      <div class="absolute px-2 py-1 mr-3 text-sm text-white transition -translate-y-1/2 bg-gray-800 rounded opacity-0 pointer-events-none right-full top-1/2 whitespace-nowrap group-hover:opacity-100">
        Appelez-nous ou WhatsApp
      </div>
    </div>

    <!-- Bouton Devis Gratuit -->
    <div class="relative group">
      <NuxtLink
        to="https://nice-demenagement.fr//devis"
        class="flex items-center justify-center transition-all duration-300 bg-blue-600 rounded-full shadow-lg w-14 h-14 hover:bg-blue-700 hover:scale-110"
      >
        <svg class="text-white w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </NuxtLink>
      <div class="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5 animate-bounce">
        Offre
      </div>
      <div class="absolute px-2 py-1 mr-3 text-sm text-white transition -translate-y-1/2 bg-gray-800 rounded opacity-0 pointer-events-none right-full top-1/2 whitespace-nowrap group-hover:opacity-100">
        Devis gratuit en 24h
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from '#app'

const route = useRoute()

const whatsappMessage = computed(() => {
  const pageName = route.path === '/' ? "page d'accueil" : route.path.substring(1).replace(/-/g, ' ') || 'notre site'
  return `Bonjour, je viens de la ${pageName} du site Nice Déménagement et je souhaite obtenir un devis ou des informations sur vos prestations (déménagement local, national ou international). Merci de me contacter.`
})

const whatsappUrl = computed(() => {
  const encodedMessage = encodeURIComponent(whatsappMessage.value)
  return `https://wa.me/33650222278?text=${encodedMessage}`
})
</script>