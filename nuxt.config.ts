export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  ssr: true, 
  app: {
    head: {
      title: 'Nice Déménagement | Déménageur professionnel Nice & France',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Déménagement à Nice, Monaco, Cannes, Antibes et toute la France. Devis gratuit, déménageurs assurés. Déplacements internationaux (Italie, Suisse, Allemagne...).' },
        { name: 'keywords', content: 'déménagement Nice, déménageur Nice, devis déménagement, déménagement international, déménagement France' },
        { name: 'author', content: 'Nice Déménagement' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/icon.png' }
      ]
    }
  },
  nitro: {
    prerender: {
      routes: [
        '/ville/nice', '/ville/paris', '/ville/monaco', '/ville/cannes', '/ville/antibes', '/ville/nantes', '/ville/lyon', '/ville/marseille', '/ville/bordeaux', '/ville/lille', '/ville/strasbourg', '/ville/toulouse',
        '/ville/grasse','/pays/italie', '/pays/suisse', '/pays/luxembourg', '/pays/allemagne', '/pays/belgique', '/pays/espagne'
      ]
    }
  }
})