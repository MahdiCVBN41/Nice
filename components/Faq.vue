<template>
  <section id="faq" ref="sectionEl" class="py-16 bg-white md:py-24">
    <div class="container px-4 mx-auto sm:px-6 lg:px-8">
      <div :class="['text-center max-w-3xl mx-auto mb-12 transition-all duration-700', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8']">
        <div class="inline-block px-3 py-1 mb-4 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full">
          Questions fréquentes
        </div>
        <h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
          Tout ce que vous devez savoir sur votre déménagement à Nice
        </h2>
        <p class="text-lg text-gray-600">
          Devis, assurance, délais, matériel – on répond à toutes vos interrogations
        </p>
      </div>

      <div class="max-w-3xl mx-auto space-y-4">
        <div 
          v-for="(item, index) in faqItems" 
          :key="index"
          :class="['bg-gray-50 rounded-xl overflow-hidden transition-all duration-300', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8']"
          :style="{ transitionDelay: `${index * 0.05}s` }"
        >
          <button
            @click="toggle(index)"
            class="flex items-center justify-between w-full p-5 font-semibold text-left text-gray-800 transition hover:bg-gray-100"
          >
            <span class="text-lg">{{ item.question }}</span>
            <svg 
              class="w-5 h-5 transition-transform duration-300" 
              :class="{ 'rotate-180': openIndex === index }"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div 
            class="overflow-hidden transition-all duration-300"
            :style="{ maxHeight: openIndex === index ? '1000px' : '0' }"
          >
            <div class="p-5 pt-0 text-gray-600 border-t border-gray-200">
              <p v-for="(paragraph, i) in item.reponse" :key="i" class="mb-3 last:mb-0">
                {{ paragraph }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA finale -->
      <div class="mt-12 text-center">
        <NuxtLink 
          to="https://www.nice-demenagement.fr/devis" 
          class="inline-flex items-center gap-2 px-8 py-3 font-semibold text-white transition bg-blue-600 rounded-lg shadow-md hover:bg-blue-700"
        >
          Vous avez d’autres questions ? Demandez un devis gratuit
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const sectionEl = ref(null)
const isVisible = ref(false)
const openIndex = ref(null)

const toggle = (index) => {
  openIndex.value = openIndex.value === index ? null : index
}

const faqItems = [
  {
    question: 'Comment obtenir un devis gratuit pour mon déménagement depuis Nice ?',
    reponse: [
      'Vous pouvez obtenir un devis gratuit et sans engagement en remplissant notre formulaire en ligne sur la page dédiée "Devis Gratuit". Il vous suffit de renseigner la date, les volumes (nombre de pièces, type de meubles) et les villes de départ et d’arrivée (Nice vers Paris, Monaco, Cannes, Antibes, ou toute autre ville française ou internationale).',
      'Notre équipe vous recontacte sous 24h avec une proposition détaillée, négociable et adaptée à votre budget. Nous comparons plusieurs options (camion seul, équipe complète, emballage) pour vous offrir le meilleur rapport qualité-prix.'
    ]
  },
  {
    question: 'Proposez-vous l’assurance pour les déménagements locaux et internationaux ?',
    reponse: [
      'Oui, tous nos déménagements sont couverts par une assurance responsabilité civile professionnelle. Pour les biens de valeur (œuvres d’art, instruments de musique, objets fragiles), nous proposons une extension de garantie “tous risques” avec une franchise réduite.',
      'Lors d’un déménagement international vers l’Italie, la Suisse, l’Allemagne, la Belgique, l’Espagne ou le Luxembourg, nous souscrivons automatiquement une assurance transport maritime/terrestre incluant les dommages et le vol. Les formalités sont transparentes et incluses dans le devis.'
    ]
  },
  {
    question: 'Quels types de déménagements réalisez-vous à Nice et dans les Alpes-Maritimes ?',
    reponse: [
      'Nous intervenons pour tous types de déménagements : appartements, villas, studios, bureaux, commerces. Que ce soit un déménagement local à Nice, Cannes, Antibes, Grasse, Cagnes-sur-Mer, ou un déménagement longue distance vers Paris, Lyon, Marseille, Bordeaux, Lille, Strasbourg...',
      'Nous disposons d’une flotte de camions adaptés aux centres-villes étroits (camions 20m³, 40m³, avec hayon). Nos équipes sont formées au port de charges lourdes, au démontage/remontage de meubles (armoires, cuisines, lits) et à l’emballage professionnel (cartons renforcés, film bulle, housses).'
    ]
  },
  {
    question: 'Vos tarifs sont-ils négociables ? Proposez-vous des forfaits ?',
    reponse: [
      'Absolument, nous savons que chaque budget est différent. Nos devis sont donnés à titre indicatif et sont toujours négociables en fonction de la période (hors saison, regroupement de chargements), du volume exact après visite, ou des services optionnels que vous souhaitez ajouter ou retirer.',
      'Nous proposons des forfaits “clé en main” (emballage, chargement, transport, déchargement, remontage) ou des formules “économie” où vous assurez vous-même l’emballage. Demandez un devis personnalisé et notre équipe vous fera une proposition ajustée.'
    ]
  },
  {
    question: 'Quels sont vos délais pour un déménagement depuis Nice vers une autre ville ?',
    reponse: [
      'Pour un déménagement local (Nice et sa région), nous pouvons intervenir sous 48h à 72h selon disponibilité. Pour un déménagement national (Paris, Lyon, Marseille, etc.), comptez généralement 5 à 10 jours ouvrés, selon la distance et le volume.',
      'Pour l’international (Italie, Suisse, Allemagne, Belgique, Espagne, Luxembourg), les délais varient entre 10 et 21 jours en fonction des formalités douanières et du mode de transport (route ou maritime). Nous vous donnons une fourchette précise lors du devis.'
    ]
  },
  {
    question: 'Faut-il être présent le jour du déménagement ?',
    reponse: [
      'Il n’est pas obligatoire d’être présent, mais nous recommandons d’être sur place au début et à la fin des opérations pour un état des lieux et la signature des documents. Si vous ne pouvez pas être là, vous pouvez désigner une personne de confiance (voisin, famille, mandataire).',
      'Pour les déménagements internationaux, nous gérons l’intégralité des formalités avec le garde-meuble ou le destinataire final. Un suivi en temps réel est disponible via notre plateforme client.'
    ]
  },
  {
    question: 'Proposez-vous le démontage et remontage des meubles ?',
    reponse: [
      'Oui, nos déménageurs sont outillés pour démonter/remonter la plupart des meubles : armoires, lits, sommiers, bibliothèques, cuisines équipées, bureaux. Nous prenons soin de protéger chaque pièce avec du film bulle et des couvertures.',
      'Le service est inclus dans nos formules “confort” ou peut être ajouté en option. N’hésitez pas à le préciser lors de votre demande de devis pour une tarification adaptée.'
    ]
  }
]

onMounted(() => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) isVisible.value = true
  }, { threshold: 0.1 })
  if (sectionEl.value) observer.observe(sectionEl.value)
})
</script>