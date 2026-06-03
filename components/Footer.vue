<template>
  <footer class="pt-12 pb-6 text-gray-300 bg-gray-900">
    <div class="container px-4 mx-auto sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-8 mb-8 md:grid-cols-2 lg:grid-cols-4">
        
        <!-- Colonne 1 : Services -->
        <div>
          <h3 class="mb-4 text-lg font-semibold text-white">Nos services</h3>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="#services" class="transition hover:text-blue-400">Déménagement local Nice & Côte d'Azur</NuxtLink></li>
            <li><NuxtLink to="#services" class="transition hover:text-blue-400">Déménagement national France entière</NuxtLink></li>
            <li><NuxtLink to="#services" class="transition hover:text-blue-400">Déménagement international (Europe)</NuxtLink></li>
            <li><NuxtLink to="https://nice-demenagement.fr//devis" class="transition hover:text-blue-400">Devis gratuit & négociable</NuxtLink></li>
            <li><NuxtLink to="#services" class="transition hover:text-blue-400">Déménageurs assurés</NuxtLink></li>
            <li><NuxtLink to="#faq" class="transition hover:text-blue-400">Questions fréquentes (FAQ)</NuxtLink></li>
          </ul>
        </div>

        <!-- Colonne 2 : Zones d'intervention -->
        <div>
          <h3 class="mb-4 text-lg font-semibold text-white">Zones d'intervention</h3>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/ville/nice" class="transition hover:text-blue-400">Déménagement Nice</NuxtLink></li>
            <li><NuxtLink to="/ville/paris" class="transition hover:text-blue-400">Déménagement Paris</NuxtLink></li>
            <li><NuxtLink to="/ville/monaco" class="transition hover:text-blue-400">Déménagement Monaco</NuxtLink></li>
            <li><NuxtLink to="/ville/cannes" class="transition hover:text-blue-400">Déménagement Cannes</NuxtLink></li>
            <li><NuxtLink to="/ville/antibes" class="transition hover:text-blue-400">Déménagement Antibes</NuxtLink></li>
            <li><NuxtLink to="/pays/italie" class="transition hover:text-blue-400">Déménagement Italie</NuxtLink></li>
            <li><NuxtLink to="/pays/suisse" class="transition hover:text-blue-400">Déménagement Suisse</NuxtLink></li>
            <li><NuxtLink to="/pays/allemagne" class="transition hover:text-blue-400">Déménagement Allemagne</NuxtLink></li>
            <li><NuxtLink to="/pays/belgique" class="transition hover:text-blue-400">Déménagement Belgique</NuxtLink></li>
            <li><NuxtLink to="/pays/espagne" class="transition hover:text-blue-400">Déménagement Espagne</NuxtLink></li>
          </ul>
        </div>

        <!-- Colonne 3 : Coordonnées + horaires -->
        <div>
          <h3 class="mb-4 text-lg font-semibold text-white">Coordonnées</h3>
          <address class="space-y-3 text-sm not-italic">
            <p class="flex items-start gap-2">
              <svg class="w-5 h-5 mt-0.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Nice Boulevard 6200, 06000 Nice, France</span>
            </p>
            <p class="flex items-center gap-2">
              <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+33650222278" class="transition hover:text-blue-400">+33 6 50 22 22 78</a>
            </p>
            <p class="flex items-center gap-2">
              <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:secretariat@nice-demenagement.fr" class="transition hover:text-blue-400">secretariat@nice-demenagement.fr</a>
            </p>
            <p class="flex items-start gap-2">
              <svg class="w-5 h-5 mt-0.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Lun-Sam : 7h - 20h<br>Dimanche : 8h - 18h</span>
            </p>
          </address>
        </div>

        <!-- Colonne 4 : Map + réseaux -->
        <div>
          <h3 class="mb-4 text-lg font-semibold text-white">Nous trouver</h3>
          <div class="mb-4 overflow-hidden rounded-lg shadow-md">
            <iframe 
              src="https://maps.google.com/maps?q=Nice%20Boulevard%206200%2C%2006000%20Nice&t=&z=14&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="150" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy"
              title="Carte du siège Nice Déménagement"
              class="transition grayscale hover:grayscale-0">
            </iframe>
          </div>
          <div class="flex mt-4 space-x-4">
            <a href="#" aria-label="Facebook" class="transition hover:text-blue-400"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z"/></svg></a>
            <a href="#" aria-label="Instagram" class="transition hover:text-blue-400"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
            <a href="#" aria-label="LinkedIn" class="transition hover:text-blue-400"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z"/></svg></a>
          </div>
        </div>
      </div>

      <!-- Copyright + liens légaux (en externe avec <a>) -->
      <div class="pt-6 mt-6 text-sm text-center border-t border-gray-800">
        <p class="mb-2">© 2025 Nice Déménagement - Tous droits réservés</p>
        <div class="flex flex-wrap justify-center gap-4">
          <a href="https://nice-demenagement.fr/legal/mentions-legales.html" target="_blank" rel="noopener noreferrer" class="transition hover:text-blue-400">Mentions légales</a>
          <a href="https://nice-demenagement.fr/legal/politique-confidentialite.html" target="_blank" rel="noopener noreferrer" class="transition hover:text-blue-400">Politique de confidentialité</a>
          <a href="https://nice-demenagement.fr/legal/CGV.html" target="_blank" rel="noopener noreferrer" class="transition hover:text-blue-400">Conditions générales de vente</a>
        </div>
        <p class="mt-4 text-xs text-gray-500">
          Déménageur professionnel assuré – Devis gratuit et négociable – Déménagements locaux, nationaux et internationaux (Nice, Paris, Monaco, Cannes, Antibes, Italie, Suisse, Allemagne, Belgique, Espagne...)
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Pas de logique particulière
</script>