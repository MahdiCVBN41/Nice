<template>
  <section class="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden pt-20">
    <!-- Background Image with overlay -->
    <div class="absolute inset-0 z-0">
      <img src="/images/hero-truck.jpg" alt="Camion de déménagement" class="w-full h-full object-cover opacity-30" />
      <div class="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
    </div>

    <!-- Floating shapes (optional) -->
    <div class="absolute top-40 left-10 w-20 h-20 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

    <div class="relative z-10 text-center max-w-5xl px-4 text-white">
      <div class="animate-fade-in">
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
          Déménagement <span class="text-secondary">serein</span> vers<br />votre nouvelle vie
        </h1>
        <p class="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto">
          Local, national, international. Service tout compris, assurance, sécurité.
        </p>

        <!-- Quick contact info pills -->
        <div class="flex flex-wrap justify-center gap-4 mb-10">
          <div class="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            <Icon name="ic:baseline-phone" size="20" class="text-secondary" />
            <span>+33 5 87 41 20 00</span>
          </div>
          <div class="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            <Icon name="ic:outline-email" size="20" class="text-secondary" />
            <span>contact@nice-demenagement.fr</span>
          </div>
          <div class="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            <Icon name="ic:outline-access-time" size="20" class="text-secondary" />
            <span>Lun–Sam : 8h–19h</span>
          </div>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-wrap justify-center gap-4">
          <a href="https://wa.me/3358741200" target="_blank" class="group bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-green-500/30 flex items-center gap-2 transform hover:-translate-y-1">
            <Icon name="ic:baseline-whatsapp" size="24" />
            WhatsApp
          </a>
          <DevisButton class="bg-secondary hover:bg-secondary-dark text-primary-dark font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-secondary/30 flex items-center gap-2 transform hover:-translate-y-1" />
        </div>

        <!-- Trust indicators -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
          <div class="bg-white/10 backdrop-blur rounded-xl p-6 transform hover:scale-105 transition-transform">
            <div class="text-3xl font-bold counter">+5000</div>
            <div class="text-sm">Déménagements réalisés</div>
          </div>
          <div class="bg-white/10 backdrop-blur rounded-xl p-6 transform hover:scale-105 transition-transform">
            <div class="text-3xl font-bold">20</div>
            <div class="text-sm">Années d'expérience</div>
          </div>
          <div class="bg-white/10 backdrop-blur rounded-xl p-6 transform hover:scale-105 transition-transform">
            <div class="text-3xl font-bold">100%</div>
            <div class="text-sm">Satisfaction client</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>